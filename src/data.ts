import { ParsedResume, HRJobDescription } from "./types";

export const SAMPLE_CANDIDATES: ParsedResume[] = [
  {
    id: "candidate-1",
    fileName: "Sarah_Dev_AI_Engineer.pdf",
    parsedAt: "2026-05-20T12:00:00Z",
    contactInfo: {
      fullName: "Sarah Jenkins",
      email: "sarah.jenkins@aiwork.dev",
      phone: "+1 (555) 321-9876",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/sarah-jenkins-ai",
      portfolio: "sarahjenkins.github.io"
    },
    summary: "Passionate AI Software Engineer with over 6 years of experience building large language model pipelines, semantic keyword indices, and productionizing multi-agent systems. Former tech lead on computer vision applications at Tesla and core contributor to open-source agent frameworks.",
    careerLevel: "Senior",
    languages: ["English (Native)", "Spanish (Conversational)"],
    skills: [
      {
        category: "AI & Machine Learning",
        skills: ["PyTorch", "Transformers", "LangChain", "Retrieval-Augmented Generation (RAG)", "Fine-tuning", "LlamaIndex"]
      },
      {
        category: "Software Engineering",
        skills: ["Python", "TypeScript", "C++", "FastAPI", "gRPC", "PostgreSQL", "Docker", "AWS", "Kubernetes"]
      },
      {
        category: "Soft Skills",
        skills: ["Engineering Leadership", "Technical Architecture", "Cross-functional Collaboration", "Agile Methodologies"]
      }
    ],
    experience: [
      {
        company: "Cognitive Labs AI",
        role: "Senior AI Engineer & Tech Lead",
        startDate: "Aug 2023",
        endDate: "Present",
        location: "San Francisco, CA",
        description: "Leading the agentic workflows team specializing in custom auto-fine-tuning frameworks.",
        highlights: [
          "Architected a custom multi-agent RAG system serving 10M+ daily requests, decreasing token latencies by 35%.",
          "Fine-tuned 7B parameter models for legal contract extraction, improving accuracy scores from 74% to 92.5%.",
          "Mentored 6 junior engineers and established robust CI/CD pipelines for real-time model evaluation."
        ]
      },
      {
        company: "Tesla",
        role: "Computer Vision Engineer",
        startDate: "Jun 2021",
        endDate: "Jul 2023",
        location: "Palo Alto, CA",
        description: "Contributed to internal Autopilot data ingestion engines and object labeling algorithms.",
        highlights: [
          "Developed high-throughput active learning neural networks matching unlabeled clips with target semantic signatures.",
          "Optimized PyTorch vision pipelines, cutting down training times for multi-class classifiers by 2.4x."
        ]
      }
    ],
    education: [
      {
        institution: "Stanford University",
        degree: "Master of Science",
        fieldOfStudy: "Computer Science (AI Specialization)",
        graduationDate: "2021",
        gpa: "3.92"
      },
      {
        institution: "UC Berkeley",
        degree: "Bachelor of Science",
        fieldOfStudy: "Electrical Engineering and Computer Science",
        graduationDate: "2019",
        gpa: "3.85"
      }
    ],
    projects: [
      {
        name: "AgenticForge",
        description: "An open-source runtime to load stateful visual graph execution chains for self-correcting agent teams. Accumulated 4.2k GitHub Stars.",
        technologies: ["Python", "Asyncio", "FastAPI", "React"],
        link: "github.com/cognitive-labs/agenticforge"
      }
    ],
    certifications: [
      {
        name: "Google Cloud Professional Machine Learning Engineer",
        issuer: "Google Cloud",
        date: "2024"
      }
    ]
  },
  {
    id: "candidate-2",
    fileName: "Marcus_PM_Resume.pdf",
    parsedAt: "2026-05-19T09:15:00Z",
    contactInfo: {
      fullName: "Marcus Chen",
      email: "m.chen@productpulse.com",
      phone: "+1 (415) 888-2345",
      location: "Seattle, WA",
      linkedin: "linkedin.com/in/marcus-chen-pm",
      portfolio: "marcuschen.co"
    },
    summary: "Strategic Product Manager with 4+ years of experience leading high-velocity product teams in the SaaS B2B analytics space. Experienced in managing cross-functional technical teams, mapping complex system requirements, establishing user metrics, and scaling enterprise platform APIs.",
    careerLevel: "Mid-level",
    languages: ["English (Native)", "Mandarin (Fluent)"],
    skills: [
      {
        category: "Product Management",
        skills: ["Product Roadmap", "User Persona Research", "A/B Testing", "KPI Measurement", "Feature Scoping", "Wireframing"]
      },
      {
        category: "Technical & Tools",
        skills: ["SQL", "Mixpanel", "Jira & Confluence", "Amplitude", "Figma", "Tableau", "Git"]
      },
      {
        category: "SaaS / Business",
        skills: ["Enterprise B2B Strategy", "Churn Analysis", "GTM Execution", "Customer Development"]
      }
    ],
    experience: [
      {
        company: "ChartFlow Metrics",
        role: "Product Manager (Core Analytics)",
        startDate: "Jan 2022",
        endDate: "Present",
        location: "Seattle, WA",
        description: "Managing feature iteration and product roadmap for the company's enterprise dashboard suite.",
        highlights: [
          "Spearheaded redesign of the developer integration portal, resulting in a 44% increase in successful API configurations.",
          "Collaborated on pricing restructuring that improved Net Revenue Retention (NRR) by 12 points YoY.",
          "Conducted 50+ deep user interviews to prioritize Q3 features, delivering on-time with zero scope creep."
        ]
      },
      {
        company: "AppLaunch Studio",
        role: "Associate Product Manager",
        startDate: "Jul 2020",
        endDate: "Dec 2021",
        location: "Remote",
        description: "Shipped mobile components and analytics systems for high-growth client applications.",
        highlights: [
          "Product managed a subscription-gating SDK used by 4 client apps, processing $2M+ in in-app purchases.",
          "Iterated push notification flows based on A/B experiments, raising daily active user engagement by 18%."
        ]
      }
    ],
    education: [
      {
        institution: "University of Washington",
        degree: "Bachelor of Arts",
        fieldOfStudy: "Business Administration (Information Systems)",
        graduationDate: "2020",
        gpa: "3.70"
      }
    ],
    projects: [
      {
        name: "FeedbackLoop App",
        description: "A simple micro-survey tool that allows SaaS startups to capture slide-out customer NPS metrics on specific UI actions.",
        technologies: ["TypeScript", "Next.js", "TailwindCSS", "PostgreSQL"],
        link: "feedbackloop.dev"
      }
    ],
    certifications: [
      {
        name: "Certified Scrum Product Owner (CSPO)",
        issuer: "Scrum Alliance",
        date: "2021"
      }
    ]
  },
  {
    id: "candidate-3",
    fileName: "Emily_Watson_Designer.pdf",
    parsedAt: "2026-05-18T14:30:22Z",
    contactInfo: {
      fullName: "Emily Watson",
      email: "emily.watson.design@outlook.com",
      phone: "+44 7911 123456",
      location: "London, UK",
      linkedin: "linkedin.com/in/emily-watson-ux",
      portfolio: "emilywatson.design"
    },
    summary: "Senior Product Designer with 8 years of experience designing scalable digital services and enterprise dashboards. Passionate about system architectures, user interaction patterns, and making complex data models easily digestible and visually stunning.",
    careerLevel: "Senior",
    languages: ["English (Native)", "French (Conversational)"],
    skills: [
      {
        category: "UX/UI Design",
        skills: ["Design Systems", "Prototyping", "User Flows", "Information Architecture", "Visual Design", "Typography"]
      },
      {
        category: "Tools & Tech",
        skills: ["Figma", "Adobe Creative Suite", "Framer", "HTML/CSS", "TailwindCSS", "React (Basics)"]
      },
      {
        category: "Methodologies",
        skills: ["Design Sprints", "Usability Testing", "Heuristic Evaluation", "Accessibility (WCAG) compliance"]
      }
    ],
    experience: [
      {
        company: "Stripe UK",
        role: "Senior Product Designer (Dashboard Team)",
        startDate: "Mar 2022",
        endDate: "Present",
        location: "London, UK",
        description: "Designing localized merchant reports, subscription graphs, and global payout onboarding.",
        highlights: [
          "Revamped visual report interfaces, increasing user utilization of deep-filtered payout tables by 30%.",
          "Authored and scale-designed 12 major foundational tokens in Stripe's internal design system to enhance dark-mode accessibility.",
          "Partnered closely with 18 engineers to build responsive UI testing, maintaining beautiful visual standards across all viewpoints."
        ]
      },
      {
        company: "Deliveroo",
        role: "Product Designer (Merchant Experience)",
        startDate: "Sep 2018",
        endDate: "Feb 2022",
        location: "London, UK",
        description: "Focused on optimizing order management and menu editing apps for restaurant tablet terminals.",
        highlights: [
          "Redesigned the live order cancellation and refund workflow, reducing customer success ticket escalations by 22%.",
          "Conducted field studies in active restaurant kitchens, engineering layouts with high-contrast patterns for grease and high-pressure environments."
        ]
      }
    ],
    education: [
      {
        institution: "University of the Arts London",
        degree: "Bachelor of Arts (First Class Honours)",
        fieldOfStudy: "Graphic and Media Design",
        graduationDate: "2018",
        gpa: "N/A"
      }
    ],
    projects: [
      {
        name: "PatternLab Design Library",
        description: "An interactive visual documentation catalog detailing typography hierarchies, visual pacing rules, and layout structures for modern editorial systems.",
        technologies: ["Astro", "TailwindCSS", "Figma API"],
        link: "patternlab.io"
      }
    ],
    certifications: [
      {
        name: "NN/g UX Certification (ID: 104245)",
        issuer: "Nielsen Norman Group",
        date: "2020"
      }
    ]
  }
];

export const SAMPLE_JOBS: HRJobDescription[] = [
  {
    id: "job-1",
    title: "Senior AI & LLM Systems Engineer",
    department: "AI Engineering & Platform Foundations",
    requirements: [
      "5+ years engineering expertise with deep Python, PyTorch or Transformers background",
      "Hands-on architectural capability implementing advanced Retrieval-Augmented Generation (RAG) structures",
      "Experience with orchestrating local fine-tuning cycles, pre-training models, or customizing quantization graphs",
      "Excellent mentorship, communication, and visual workflow documentation habits",
      "BS/MS/PhD in Computer Science, Machine Learning, or related technical disciplines"
    ],
    text: `Job Title: Senior AI & LLM Systems Engineer
Department: AI Engineering
Location: San Francisco, CA (Hybrid)

About the Role:
We are looking for a Senior AI & LLM Systems Engineer to pioneer the next generation of our autonomous multi-agent pipelines. You will lead development on advanced RAG solutions, model alignment frameworks, search groundings, and tool-invocation loops.

Key Responsibilities:
- Build, optimize, and maintain real-time RAG applications handling tens of millions of embedding indexes.
- Experiment with and deploy custom open-weights models (Llama, Mistral) including post-training alignment, LLM fine-tuning, and robust parameter evaluations.
- Mentor junior engineers and collaborate with Product managers on system scalability.

Ideal Candidate:
- Fluent with PyTorch, transformers, FastAPI, LangChain/LlamaIndex, and vector databases (such as Pinecone, Chroma, pgvector).
- Proven track record deploying complex LLM agents in automated CI/CD settings.
- Highly proactive builder who contributes to open source.`
  },
  {
    id: "job-2",
    title: "Technical Product Manager (B2B SaaS)",
    department: "Product & Growth Applications",
    requirements: [
      "3+ years managing SaaS software products, especially analytics dashboard platforms",
      "Solid business acumen around data pipelines, Amplitude, SQL queries, and feature roadmapping",
      "Demonstrated ability of converting user qualitative feedback into strict JIRA requirements",
      "Familiarity with enterprise API integrations, software auth headers, or cloud system layouts"
    ],
    text: `Job Title: Technical Product Manager (B2B SaaS)
Department: Core Platform Product
Location: Seattle, WA or Remote

About the Role:
We are seeking a data-driven, technical Product Manager to own the developer experiences and cloud dashboard integrations of our enterprise monitoring portal.

Key Responsibilities:
- Lead the iterative discovery process, defining clear PRDs, feature boards, and wireframes.
- Define and review product success metrics using SQL, Mixpanel, and dashboard indices.
- Interface with technical enterprise stakeholders to design scalable APIs and developer portals.

Ideal Candidate:
- Background in CS, Business Administration (MIS), or related fields.
- Extremely structured communicator who can translates engineering trade-offs into business deliverables.
- Collaborative mindset prioritizing zero scope-creep milestones.`
  },
  {
    id: "job-3",
    title: "Senior UX/UI Product Designer",
    department: "Creative Studio & Design Operations",
    requirements: [
      "6+ years designing accessible, high-fidelity responsive web applications",
      "Expert knowledge of Figma design token workflows, layout engines, and prototyping",
      "Track record conducting usability tests, card sorting, or drafting deep heuristic audits",
      "Sufficient capability reading or writing CSS patterns (such as Tailwind classes)"
    ],
    text: `Job Title: Senior UX/UI Product Designer
Department: Design System Operations
Location: London, UK (Hybrid)

About the role:
We are in search of a thoughtful Senior Product Designer who excels at crafting enterprise dashboards, advanced tables, and interactive configuration portals.

Key Responsibilities:
- Design accessible, clean, responsive layout frameworks spanning complex financial analytics.
- Collaborate with the technical design systems team to scale unified Figma component tokens.
- Implement rapid high-fidelity interactive flow-prototypes in Framer or Figma.

Ideal Candidate:
- High attention to typography pairings, vertical visual rhythm, and generous negative spacing.
- Portfolios demonstrating complex system user flow optimizations.
- Passionate advocate for WCAG compliance.`
  }
];
