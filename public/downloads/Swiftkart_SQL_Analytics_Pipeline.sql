-- ==============================================================================
-- SWIFTKART AI ASSISTANT: END-TO-END RETAIL & QUICK-COMMERCE SQL ANALYTICS PIPELINE
-- Author: Tanu Chaudhary | Business Analytics & Financial Strategy
-- Dialect: PostgreSQL / ANSI SQL Compliant
-- Description: Core analytical database schemas, automated revenue velocity views,
--              unit economics calculations, and LLM NL-to-SQL benchmark queries.
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1. CORE SCHEMA DEFINITIONS
-- ------------------------------------------------------------------------------

CREATE TABLE IF NOT EXISTS dark_stores (
    store_id SERIAL PRIMARY KEY,
    store_name VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    tier VARCHAR(10) CHECK (tier IN ('Tier-1', 'Tier-2', 'Tier-3')),
    daily_fixed_cost NUMERIC(10, 2) NOT NULL, -- Rent, Utilities, Base Staff
    active_riders_capacity INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS product_categories (
    category_id SERIAL PRIMARY KEY,
    category_name VARCHAR(100) NOT NULL,
    target_gross_margin NUMERIC(5, 2) NOT NULL -- Target Gross Margin %
);

CREATE TABLE IF NOT EXISTS products (
    product_id SERIAL PRIMARY KEY,
    category_id INT REFERENCES product_categories(category_id),
    sku_code VARCHAR(50) UNIQUE NOT NULL,
    product_name VARCHAR(150) NOT NULL,
    unit_cost_price NUMERIC(10, 2) NOT NULL,
    mrp NUMERIC(10, 2) NOT NULL,
    is_perishable BOOLEAN DEFAULT FALSE,
    reorder_threshold INT DEFAULT 25
);

CREATE TABLE IF NOT EXISTS store_inventory (
    inventory_id SERIAL PRIMARY KEY,
    store_id INT REFERENCES dark_stores(store_id),
    product_id INT REFERENCES products(product_id),
    current_stock INT NOT NULL CHECK (current_stock >= 0),
    safety_stock INT NOT NULL,
    last_replenished_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS orders (
    order_id BIGSERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    store_id INT REFERENCES dark_stores(store_id),
    order_timestamp TIMESTAMP NOT NULL,
    delivery_time_mins INT,
    gross_order_value NUMERIC(10, 2) NOT NULL,
    discount_amount NUMERIC(10, 2) DEFAULT 0.00,
    delivery_fee_charged NUMERIC(6, 2) DEFAULT 0.00,
    delivery_payout_cost NUMERIC(6, 2) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'COMPLETED'
);

CREATE TABLE IF NOT EXISTS order_items (
    item_id BIGSERIAL PRIMARY KEY,
    order_id BIGINT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id),
    quantity INT NOT NULL,
    unit_selling_price NUMERIC(10, 2) NOT NULL,
    unit_cost_price NUMERIC(10, 2) NOT NULL
);

-- ------------------------------------------------------------------------------
-- 2. ADVANCED ANALYTICAL VIEWS
-- ------------------------------------------------------------------------------

-- VIEW 1: Unit Economics per Order (EBITDA Contribution at Store Level)
CREATE OR REPLACE VIEW view_order_unit_economics AS
SELECT 
    o.order_id,
    o.store_id,
    ds.store_name,
    ds.city,
    o.order_timestamp::DATE AS order_date,
    o.gross_order_value,
    o.discount_amount,
    (o.gross_order_value - o.discount_amount) AS net_revenue,
    SUM(oi.quantity * oi.unit_cost_price) AS total_cogs,
    ((o.gross_order_value - o.discount_amount) - SUM(oi.quantity * oi.unit_cost_price)) AS gross_profit,
    o.delivery_fee_charged,
    o.delivery_payout_cost,
    -- Net Contribution 1 (Order Level)
    (
        ((o.gross_order_value - o.discount_amount) - SUM(oi.quantity * oi.unit_cost_price)) 
        + o.delivery_fee_charged 
        - o.delivery_payout_cost
    ) AS contribution_margin_1
FROM orders o
JOIN dark_stores ds ON o.store_id = ds.store_id
JOIN order_items oi ON o.order_id = oi.order_id
GROUP BY 
    o.order_id, o.store_id, ds.store_name, ds.city, 
    o.order_timestamp, o.gross_order_value, o.discount_amount, 
    o.delivery_fee_charged, o.delivery_payout_cost;

-- VIEW 2: 7-Day Rolling Revenue Velocity & Store Throughput
CREATE OR REPLACE VIEW view_store_rolling_velocity AS
WITH daily_store_metrics AS (
    SELECT 
        store_id,
        order_timestamp::DATE AS metric_date,
        COUNT(DISTINCT order_id) AS total_daily_orders,
        SUM(gross_order_value - discount_amount) AS net_daily_revenue,
        AVG(delivery_time_mins) AS avg_delivery_time
    FROM orders
    GROUP BY store_id, order_timestamp::DATE
)
SELECT 
    dsm.store_id,
    ds.store_name,
    dsm.metric_date,
    dsm.total_daily_orders,
    dsm.net_daily_revenue,
    dsm.avg_delivery_time,
    -- Window Function: 7-Day Moving Average Net Revenue
    AVG(dsm.net_daily_revenue) OVER (
        PARTITION BY dsm.store_id 
        ORDER BY dsm.metric_date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS rolling_7d_avg_revenue,
    -- Window Function: Cumulative Gross Volume Year-to-Date
    SUM(dsm.net_daily_revenue) OVER (
        PARTITION BY dsm.store_id, EXTRACT(YEAR FROM dsm.metric_date)
        ORDER BY dsm.metric_date
    ) AS cumulative_ytd_revenue
FROM daily_store_metrics dsm
JOIN dark_stores ds ON dsm.store_id = ds.store_id;

-- VIEW 3: Stockout Risk & SKU Margin Elasticity Triage
CREATE OR REPLACE VIEW view_inventory_stockout_risk AS
SELECT 
    p.sku_code,
    p.product_name,
    pc.category_name,
    si.store_id,
    ds.store_name,
    si.current_stock,
    si.safety_stock,
    -- Flag critical inventory shortage
    CASE 
        WHEN si.current_stock <= (si.safety_stock * 0.25) THEN 'CRITICAL_STOCKOUT_RISK'
        WHEN si.current_stock <= si.safety_stock THEN 'REORDER_NOW'
        ELSE 'OPTIMAL_INVENTORY'
    END AS inventory_status,
    ROUND(((p.mrp - p.unit_cost_price) / p.mrp) * 100, 2) AS gross_margin_pct
FROM store_inventory si
JOIN products p ON si.product_id = p.product_id
JOIN product_categories pc ON p.category_id = pc.category_id
JOIN dark_stores ds ON si.store_id = ds.store_id;

-- ------------------------------------------------------------------------------
-- 3. LLM TEXT-TO-SQL BENCHMARK PROMPT TEMPLATES & VERIFIED QUERIES
-- ------------------------------------------------------------------------------

-- Query A: "Which dark stores achieved positive EBITDA contribution this past week?"
SELECT 
    store_name,
    city,
    COUNT(order_id) AS orders_fulfilled,
    ROUND(AVG(gross_order_value), 2) AS aov,
    ROUND(SUM(contribution_margin_1), 2) AS total_contribution_1,
    ROUND(ds.daily_fixed_cost * 7, 2) AS weekly_fixed_overhead,
    ROUND(SUM(contribution_margin_1) - (ds.daily_fixed_cost * 7), 2) AS estimated_weekly_ebitda
FROM view_order_unit_economics vue
JOIN dark_stores ds ON vue.store_id = ds.store_id
WHERE order_date >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY store_name, city, ds.daily_fixed_cost
ORDER BY estimated_weekly_ebitda DESC;

-- Query B: "Identify top 5 high-margin SKUs with falling order velocity (Discount Cannibalization)"
SELECT 
    p.sku_code,
    p.product_name,
    pc.category_name,
    COUNT(oi.item_id) AS total_units_sold,
    ROUND(AVG(oi.unit_selling_price - oi.unit_cost_price), 2) AS unit_margin,
    DENSE_RANK() OVER (ORDER BY SUM((oi.unit_selling_price - oi.unit_cost_price) * oi.quantity) DESC) AS profitability_rank
FROM order_items oi
JOIN products p ON oi.product_id = p.product_id
JOIN product_categories pc ON p.category_id = pc.category_id
GROUP BY p.sku_code, p.product_name, pc.category_name
ORDER BY profitability_rank ASC
LIMIT 5;

-- End of Swiftkart AI Assistant Analytics Pipeline
