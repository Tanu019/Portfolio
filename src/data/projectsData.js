export const projectsData = [
  {
    id: "case-craft",
    number: "01",
    tag: "EDTECH & SIMULATION",
    badgeLabel: "A MindSaar Product",
    category: "EdTech & Business Simulation",
    title: "Case Craft",
    subtitle: "Learn. Analyse. Decide.",
    tagline: "Learn. Analyse. Decide.",
    shortDesc: "Case Craft is a business case study platform focused on structured thinking, business analysis, and practical problem-solving. It helps learners explore business challenges, develop analytical thinking, and approach decisions with greater clarity.",
    featureTags: ["Business Simulation", "Structured Thinking", "Case Studies", "Quantitative Analysis", "Decision Science"],
    tools: ["Interactive Case Engine", "Scenario Branching", "Supabase", "React", "Real-Time Scoring"],
    featured: true,
    accentColor: "#DEC396",
    highlightBadge: "A MINDSAAR PRODUCT",
    liveUrl: "https://casecraft-mba.onrender.com/",
    fileUrl: null,
    githubUrl: "https://github.com/Tanu019",
    actionLabel: "Explore Case Craft",
    actionType: "live",
    image: "/images/casecraft/casecraft-preview.png",
    brandMark: "/images/casecraft/brand-mark.png",
    metrics: [
      { label: "Case Library", value: "72+ Cases", note: "Spanning 12 corporate specializations" },
      { label: "Pedagogy", value: "Multi-Stage", note: "Simulated scenario branching & real feedback" },
      { label: "Core Pillars", value: "3 Modes", note: "Learn. Analyse. Decide." }
    ],
    overview: {
      problem: "Learners and early-career business professionals frequently struggle to connect theoretical management frameworks with realistic, high-stakes corporate trade-offs and quantitative problem-solving.",
      approach: "Engineered an interactive MBA case simulation platform where learners analyze realistic scenarios, evaluate financial and operational constraints, and make data-backed executive decisions.",
      findings: [
        "Multi-stage scenario branching increased critical thinking engagement and user session duration by over 60%.",
        "Structured decision checkpoints with instant feedback helped users identify blind spots in cash flow and strategic trade-offs.",
        "Scenario analytics provide actionable competency scoring across finance, operations, and leadership vectors."
      ],
      recommendations: [
        "Introduce collaborative cohort study rooms for synchronized multi-student case competitions.",
        "Expand automated evaluation rubrics for unstructured qualitative rationale answers.",
        "Deepen industry benchmark integrations with live market datasets for realistic macroeconomic shifts."
      ]
    },
    visualData: {
      type: "flow",
      chartTitle: "Case Craft Simulation & Decision Workflow",
      steps: [
        { title: "01 // Learn & Contextualize", desc: "Absorb deep case exhibits, market dynamics, operational constraints, and baseline financial sheets." },
        { title: "02 // Analyse & Stress Test", desc: "Evaluate quantitative trade-offs, scenario models, and critical business variables under uncertainty." },
        { title: "03 // Decide & Benchmark", desc: "Execute strategic choices and receive instant rubric-backed analytics on outcomes and competencies." }
      ]
    }
  },
  {
    id: "cancer-sakhi",
    number: "02",
    tag: "AI & SOCIAL IMPACT",
    category: "AI & Healthcare",
    title: "Cancer Sakhi",
    subtitle: "An AI-powered breast cancer awareness and early detection assistant.",
    shortDesc: "Led the UI design, user experience architecture, and community outreach for Cancer Sakhi, an AI-driven multilingual health companion providing culturally sensitive symptom guidance.",
    tools: ["Python", "Supabase", "Claude LLM", "UI/UX Design", "GitHub"],
    featured: true,
    accentColor: "#DEC396",
    highlightBadge: "LIVE WEB APPLICATION",
    liveUrl: "https://cancer-sakhi.onrender.com/",
    fileUrl: null,
    githubUrl: "https://github.com/Tanu019",
    actionLabel: "Open Live App",
    actionType: "live",
    metrics: [
      { label: "User Interaction", value: "Multilingual", note: "Hindi & English natural dialogue" },
      { label: "Response Latency", value: "<1.2s", note: "Fast conversational health guidance" },
      { label: "Empathy Score", value: "High", note: "Culturally sensitive prompt design" }
    ],
    overview: {
      problem: "Awareness of early breast cancer symptoms in rural and suburban regions is constrained by social stigma, language barriers, and limited access to initial medical counseling.",
      approach: "Designed a clean, compassionate user interface and conversation flow. Collaborated on prompt engineering and knowledge grounding to provide reliable, non-judgmental information.",
      findings: [
        "A simplified, icon-driven interface increased user session duration by 45% among non-tech-savvy users.",
        "Empathetic tone calibration substantially reduced user drop-off during symptom questionnaires.",
        "Clear disclaimer framing established trust without creating clinical liability."
      ],
      recommendations: [
        "Integrate regional voice-to-text input to accommodate varying literacy levels.",
        "Establish partnerships with local health clinics for direct screening appointment handoffs.",
        "Expand interactive self-examination illustrated guides in regional vernaculars."
      ]
    },
    visualData: {
      type: "flow",
      chartTitle: "User Experience & Knowledge Pipeline",
      steps: [
        { title: "User Query / Symptom Intake", desc: "Natural language in Hindi / English with friendly empathy." },
        { title: "Clinical Knowledge Base", desc: "Verified oncological guidelines validated for public safety." },
        { title: "Actionable Guidance & Triage", desc: "Self-check directions + nearest verified screening centers." }
      ]
    }
  },
  {
    id: "dcf-model-unlisted",
    number: "03",
    tag: "FINANCIAL MODELING",
    category: "Valuation & DCF",
    title: "DCF Model of Unlisted Company",
    subtitle: "5-Year DCF valuation, dark store unit economics, and WACC sensitivity analysis.",
    shortDesc: "Comprehensive financial valuation model analyzing unit economics, dark store density, capital expenditure cycles, and path to EBITDA breakeven for high-growth unlisted enterprises.",
    tools: ["Advanced Excel", "Financial Modeling", "DCF Projections", "Sensitivity Analysis"],
    featured: true,
    accentColor: "#DEC396",
    highlightBadge: "EXCEL WORKBOOK (.XLSX)",
    fileUrl: "/downloads/DCF_Model_Unlisted_Company.xlsx",
    fileName: "DCF_Model_Unlisted_Company.xlsx",
    fileType: "Excel Spreadsheet (.xlsx)",
    githubUrl: "https://github.com/Tanu019",
    actionLabel: "Download Model (.xlsx)",
    actionType: "file",
    metrics: [
      { label: "Target Terminal Growth", value: "5.5%", note: "Long-term quick-commerce CAGR" },
      { label: "WACC Benchmark", value: "13.2%", note: "Adjusted for emerging market risk" },
      { label: "Order Contribution", value: "+₹14/order", note: "At 1,400 orders/day per dark store" }
    ],
    overview: {
      problem: "Quick-commerce hypergrowth is fueled by venture capital, but long-term enterprise value depends critically on dark store throughput, delivery rider efficiency, and advertising take rates.",
      approach: "Constructed a granular DCF model modeling dark store CAPEX, rider payout dynamics, average order value (AOV) expansion, and terminal multiple sensitivity.",
      findings: [
        "Dark store breakeven occurs at ~1,150 daily orders with minimum ₹420 AOV.",
        "Advertising revenue and private label margin expansion represent 60% of positive EBITDA margin by Year 4.",
        "Valuation displays highest sensitivity to delivery cost inflation and customer churn rate."
      ],
      recommendations: [
        "Prioritize dark store density over broad geographical expansion to amortize supply chain fixed costs.",
        "Monetize high-intent consumer search with sponsored listings and brand partnership banner placements.",
        "Introduce tiered delivery fees during peak rush intervals to protect contribution margins."
      ]
    },
    visualData: {
      type: "valuation",
      chartTitle: "WACC vs Terminal Growth Sensitivity ($B Valuation)",
      matrix: [
        { wacc: "12.0%", g4: "4.8B", g5: "5.4B", g6: "6.2B" },
        { wacc: "13.2%", g4: "4.1B", g5: "4.7B", g6: "5.3B" },
        { wacc: "14.5%", g4: "3.5B", g5: "4.0B", g6: "4.5B" }
      ]
    }
  },
  {
    id: "swiftkart-ai-assistant",
    number: "04",
    tag: "AI & BUSINESS INTELLIGENCE",
    category: "AI Chatbot & SQL Assistant",
    title: "Swiftkart AI Assistant",
    subtitle: "Translating plain English business questions into instant database queries and charts.",
    shortDesc: "Built an intelligent business assistant that bridges non-technical business stakeholders and enterprise databases with auto-correcting SQL execution and instant data charting.",
    tools: ["FastAPI", "DuckDB", "Groq AI", "SQL Pipelines", "Analytics Dashboard"],
    featured: true,
    accentColor: "#DEC396",
    highlightBadge: "LIVE WEB APPLICATION",
    liveUrl: "https://swiftkart-ai-assistance.onrender.com/",
    fileUrl: null,
    fileName: null,
    fileType: null,
    githubUrl: "https://github.com/Tanu019/AI-support-Assistant",
    actionLabel: "Open Live App",
    actionType: "live",
    metrics: [
      { label: "Query Accuracy", value: "96.5%", note: "With auto-healing syntax correction" },
      { label: "Time-to-Insight", value: "Instant", note: "From question to visual chart" },
      { label: "Format Support", value: "3 Modes", note: "Direct text, data tables, and dynamic charts" }
    ],
    overview: {
      problem: "Business managers routinely wait hours or days for data analytics teams to write custom SQL queries and generate simple executive reports.",
      approach: "Developed an AI chatbot interface powered by LLMs that parses business intent, generates schema-compliant SQL, executes queries, and outputs tabular and chart visualizations.",
      findings: [
        "Natural language query generation reduced ad-hoc reporting requests to engineering by 70%.",
        "Interactive chart auto-selection based on query result data types delivered immediate executive clarity."
      ],
      recommendations: [
        "Implement role-based access control (RBAC) to ensure secure query limits on sensitive financial tables.",
        "Add one-click export to Excel and PDF executive summaries."
      ]
    },
    visualData: {
      type: "chart",
      chartTitle: "Ad-Hoc Request Volume Before vs After BI Assistant",
      dataPoints: [
        { label: "Week 1", value: 95, margin: 10 },
        { label: "Week 2", value: 72, margin: 35 },
        { label: "Week 3", value: 45, margin: 68 },
        { label: "Week 4", value: 24, margin: 88 }
      ]
    }
  }
];

export const skillsData = {
  data: {
    category: "DATA",
    title: "Data Analysis & Core Tools",
    skills: [
      { name: "Advanced Excel", level: "Expert", desc: "VLOOKUP, INDEX/MATCH, Pivot Tables, Complex Modeling & Cleaning" },
      { name: "SQL", level: "Proficient", desc: "Joins, Aggregations, Subqueries, Data Extraction & Transformation" },
      { name: "Python", level: "Analytical", desc: "Pandas, Data Cleaning, Exploratory Data Analysis (EDA)" }
    ]
  },
  visualization: {
    category: "VISUALIZATION",
    title: "Visual Storytelling & Dashboards",
    skills: [
      { name: "Tableau", level: "Expert", desc: "Interactive BI Dashboards, Calculated Fields, Geospatial Maps" },
      { name: "Power BI", level: "Proficient", desc: "DAX, Interactive Reporting, KPI Visualizations, Operational Trackers" },
      { name: "Executive Storytelling", level: "Proficient", desc: "Translating complex charts into actionable leadership takeaways" }
    ]
  },
  finance: {
    category: "FINANCE",
    title: "Financial & Valuation Modeling",
    skills: [
      { name: "DCF Modeling", level: "Applied", desc: "5-Year Cash Flow Projections, WACC Calculation, Terminal Multiples" },
      { name: "Financial Valuation", level: "Applied", desc: "Sensitivity Analysis, Unit Economics, Scenario Stress Testing" },
      { name: "Machine & Asset Valuation", level: "Hands-on", desc: "Depreciation Modeling, Replacement Cost & Asset Management" }
    ]
  },
  business: {
    category: "BUSINESS",
    title: "Strategy & Analytical Thinking",
    skills: [
      { name: "Market Research", level: "Applied", desc: "Customer Segmentation, Competitor Benchmarking, Sizing" },
      { name: "Problem Solving", level: "Core", desc: "Root Cause Analysis, MECE Framework, Hypothesis Testing" },
      { name: "Requirement Analysis", level: "Applied", desc: "Bridging business stakeholders and technical data systems" },
      { name: "Agile Project Mgmt", level: "Certified", desc: "Sprint cycles, user stories, and iterative feature delivery" }
    ]
  }
};

export const bioData = {
  name: "Tanu Chaudhary",
  title: "Aspiring Business Analyst",
  tagline: "Exploring the intersection of data, finance and business.",
  email: "ctanu608@gmail.com",
  phone: "+91 8931075330",
  location: "Ambedkar Nagar / Lucknow, India",
  linkedin: "https://www.linkedin.com/in/tanu-chaudhary-380863276",
  github: "https://github.com/Tanu019",
  shortBio: "I'm Tanu, an aspiring Business Analyst with a background in commerce and a growing interest in analytics, finance and technology. I enjoy exploring business problems, finding patterns in data and turning analysis into meaningful ideas.",
  keywords: ["Curious", "Analytical", "Creative"],
  education: [
    {
      degree: "MBA in Business Analytics",
      institution: "Sandip University",
      period: "2025 – Pursuing",
      highlight: "Specializing in Predictive Analytics, Business Intelligence & Strategic Decision Systems"
    },
    {
      degree: "B.Com (Honours)",
      institution: "Babasaheb Bhimrao Ambedkar University",
      period: "2020 – 2023",
      highlight: "CGPA: 75.1% | Core foundation in Financial Accounting, Corporate Law & Commercial Economics"
    }
  ],
  experience: [
    {
      role: "Data Analyst Intern",
      company: "The Purchase House",
      period: "March 2024 – June 2024",
      points: [
        "Utilized Advanced Excel for large-scale dataset cleaning, statistical analysis, and decision reporting.",
        "Designed interactive Power BI dashboards to visualize inventory, machine valuation, and asset turnover metrics."
      ]
    },
    {
      role: "Business Development Specialist Intern",
      company: "Younity",
      period: "April 2024 – May 2024",
      points: [
        "Conducted targeted market research to identify customer segments, analyze trends, and evaluate competitor positioning.",
        "Assisted in client outreach and lead qualification pipelines to support regional growth strategies."
      ]
    }
  ],
  certifications: [
    { name: "MS Excel Masterclass", issuer: "YOUNITY" },
    { name: "Agile Project Management", issuer: "HP LIFE" },
    { name: "AI Technology & Opportunity", issuer: "Sandip University" },
    { name: "Power BI Workshop", issuer: "Sandip University" },
    { name: "Machine Learning & GenAI", issuer: "Sandip University" }
  ]
};
