export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  tags: string[];
  visual: "orbit" | "robot" | "signal";
  year: string;
  role: string;
  demoUrl: string;
  sourceUrl: string;
  challenge: string;
  approach: string;
  outcome: string;
  imageUrl?: string;
  imageAlt?: string;
};

export const profile = {
  brand: "Nicholas Carrasquilla's Portfolio",
  name: "Nicholas Carrasquilla",
  role: "Software Engineer & Curious Human",
  headline: ["Engineering", "what’s next."],
  introduction:
    "Thoughtful software. Intelligent systems. A curiosity for what’s possible and the drive to build it.",
  location: "Planet Earth",
  email: "carrasquilla.nicholas@gmail.com",
  githubUrl: "https://github.com/NicholasCarras",
  linkedinUrl: "https://linkedin.com/in/nicholascarrasquilla",
  resumeUrl: "/public/documents/Resume.pdf",
  exampleContent: false,
  about: [
    "Hey, my name is Nick. I'm a software engineer who is all about new frontiers. I love being apart of teams who develop amazing things and I would love to have a hand in technology that pushes the limits of what we currently know. For me, life is all about exploring and finding out the reason we are all here. Fun fact about me, my favorite thing to learn about is space and I would love to go there... except I'm afraid of heights which is ironic becuase once you get there height no longer matters anyways haha. Hmm kinda seems like there is some lesson to be taken away from this.",
  ],
};


export const projects: Project[] = [
  {
    slug: "fault-tolerant-distributed-monitoring-system",
    name: "Fault-Tolerant Distributed Monitoring System",
    category: "Backend Development",
    summary:
      "A distributed system of nodes that track health and statuses.",
    tags: ["Java", "REST APIs", "Postgre SQL"],
    visual: "orbit",
    year: "2026",
    role: "Owner/Developer",
    demoUrl: "",
    sourceUrl: "",
    challenge:
      "Creating a system of connected nodes that allowed for easy monitoring of status and health metrics.",
    approach:
      "Implemented a distributed system of nodes that allowed for creation of new nodes as well as deletion while maintaining status and alerts for changes.",
    outcome:
      "Delivered a reliable way to track if nodes are alive or when they last were alive.",
  },
  {
    slug: "sysadmin-copilot",
    name: "Sysadmin Copilot",
    category: "MCP Server/Agentic Architecture",
    summary:
      "Triage AI agent that can quickly and efficiently diagnose linux related issues and resolve them autonomously.",
    tags: ["Python", "MCP", "AI Agents", "Linux", "Linux Containers"],
    visual: "robot",
    year: "2026",
    role: "Agent Architecture Developer/LLM Developer",
    demoUrl: "",
    sourceUrl: "",
    challenge:
      "Capturing the power from new age artificial intelligence and implementing it in a way to solve modern day problems.",
    approach:
      "Create an AI triage agent that can assess the current state of a linux enviroment and quicly resolve any issues as well as sorting users permissions.",
    outcome:
      "Developed the agents architecture and gave it the necessary tools and permissions to accomplish our goal.",
  },
  {
    slug: "module",
    name: "Enterprise Module For Networking",
    category: "Java/OOP",
    summary:
      "Enabling a way to access networking functionallities without cutting corners.",
    tags: ["Java", "Embedded Scripting", "OOP"],
    visual: "signal",
    year: "2026",
    role: "Developer",
    demoUrl: "",
    sourceUrl: "",
    challenge:
      "Embedded scripts needed a simple, reliable way to access low-level networking functionality without managing its underlying complexity.",
    approach:
      "Built a custom Java plugin using OOP and abstract classes to encapsulate networking logic and expose clean, type-safe APIs to the scripting runtime.",
    outcome:
      "Created a reusable interface that simplified network operations while improving maintainability, extensibility, and separation between Java and scripting layers.",
  },
];

export const skillGroups = [
  {
    id: "Software Development Foundations",
    label: "Software Development Foundations",
    number: "01",
    title: "Ideas into reality.",
    description:
      "From ideas to creations",
    skills: [
      "Java",
      "Python",
      "C++",
      "HTML & CSS",
      "Ignition",
      "Spring Boot",
    ],
    projectSlug: "orbital",
    color: "#b8a4ff",
  },
  {
    id: "systems",
    label: "Systems",
    number: "02",
    title: "The logic underneath.",
    description:
      "Connecting data, services, and decisions. APIs and application architecture that keep the entire experience working together.",
    skills: [
      "MSSQL",
      "Postman",
      "REST APIs",
      "PostgreSQL",
      "System design",
      "Testing",
    ],
    projectSlug: "signal",
    color: "#87dcf6",
  },
  {
    id: "delivery",
    label: "Delivery",
    number: "03",
    title: "From local to live.",
    description:
      "Turning a working idea into a dependable release. Clear workflows, repeatable deployments, and a habit of improving what ships.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Scrum",
      "GitLab",
      "Agile",
    ],
    projectSlug: "signal",
    color: "#b9efb0",
  },
  {
    id: "exploration",
    label: "Exploration",
    number: "04",
    title: "Always another frontier.",
    description:
      "Following the questions that lead somewhere new. These are the things Im interested in exploring",
    skills: [
      "Robotics",
      "Machine learning",
      "AGI",
      "Embedded Systems",
      "DevOps",
      "Systems Engineering",
    ],
    projectSlug: "automata",
    color: "#f3bb8a",
  },
];

export const experience = [
  {
    period: "March 2026 - Current",
    role: "Software Engineering Intern",
    organization: "Tarket",
    description:
      "Woohoo! I did it, I got an internship! Honestly, it was a lot of work to get here. Many SWE students only dream of having an internship before graduating. Was it luck... or dedication. I say a bit of both haha. All jokes aside, I have learned so much from this amazing opportunity which I believe gives me a jumpstart to my career. Here is a little about it:\n\n",
    highlights: [
      "Developed operator-facing user interfaces for industrial automation systems using ignition, improving usability and real-time interaction with operational data",
      "Integrated Python scripting into UI applications to automate workflows, process data, and enhance system functionality",
      "Designed, wrote, and optimized SQL queries in Microsoft SQL Server to connect backend data with operator-facing applications",
      "Engineered a custom enterprise platform plugin using Java, leveraging OOP principles and abstract classes to encapsulate low-level networking logic and expose robust, type-safe APIs to an embedded scripting runtime.",
      "Collaborated with cross-functional engineering teams to implement system enhancements and improve operational efficiency",
      "Applied Agile methodologies throughout the software development lifecycle, collaborating with cross-functional teams through iterative development, testing, feedback, and continuous improvement.",

    ],
    tags: ["Python", "Java", "MSSQL", "Agile Methodologies", "SDLC", "Cross-Functional Team Collaboration", "Automation", "User Interfaces", "Traceability"],
  },
  {
    period: "January 2023 - October 2023 / January 2025 - March 2026",
    role: "Armed Security",
    organization: "Lockheed Martin",
    description:
      "So the answer is yes... I leaned into another job leveraging my military background. This was an interesting position that renewed my security clearence again. Here is a little about it:\n\n",
    highlights: [
      " Monitored high-security environments, demonstrating strong attention to detail, situational awareness, and rapid decision-making skills.",
      " Collaborated with personnel across teams to support safe operations and ensure compliance with established procedures and standards.",
    ],
    tags: ["Classified Document Handling", "Collaboration", "Security Clearence", "Time Management", "Interpersonal Skills"],
  },
  {
    period: "January 2023 - October 2023 / January 2025 - March 2026",
    role: "Parking Engineer",
    organization: "Atlanta Braves",
    description:
      "As you might be wondering... yes parking engineer is long for valet. This was an amazing opportunity for me while in college that gave me good networking skills belive it or not. I also did two tours here so thats why the time has a gap in it. Here is a little about it:\n\n",
    highlights: [
      "Delivered professional, personable customer service by greeting guests, addressing needs, and creating a positive first impression in a fast-paced environment.",
      "Built strong communication and interpersonal skills through daily interactions with customers, coworkers, and business professionals from diverse backgrounds.",
      "Developed networking and relationship-building skills by establishing rapport with repeat customers and maintaining professional connections.",
      "Demonstrated reliability, teamwork, time management, and problem-solving while coordinating vehicle retrieval and responding efficiently to customer requests.",
    ],
    tags: ["Communication", "Networking", "Team Building"],
  },
  {
    period: "January 2023 - December 2026",
    role: "Student",
    organization: "Kennesaw State University",
    description: "After finishing my time in the Marine Corps, I started my journey into higher education. Now I've always had a passion for technology and science so I landed on software engineering.\n\n",
    highlights: [
      "Learned Java, C++ and many other developer skills",
      "Collaborated with classmates on projects",
      "Practiced the software development life cycle",
      "Learned OOP design principles and best practices",
      "Overall broadened my knowledge with so much more",
    ],
    tags: ["Java", "SQL", "C++", "Python", "Algorithms", "Software Engineering", "Data Structures", "Git/GitHub", "SDLC", "SOLID"],
  },
  {
    period: "January 2019 - January 2023",
    role: "United States Marine",
    organization: "United States Marine Corps",
    description: [
      "Now I know this isn't what you excpected but yes, I started the journey of my professional life as a United States Marine.",
      " I served my country for four years which ended up teaching me a lot about life as well as important leadership and soft skills.",
      " Here is a little about what I did:\n\n"
    ],

    highlights: [
      " Managed and maintained over $200M in mission-critical equipment, ensuring operational readiness and full accountability",
      " Utilized GCSS (ERP system) to track inventory, maintenance schedules, and asset lifecycle data, maintaining high data accuracy",
      " Oversaw inventory control and maintenance workflows, improving tracking efficiency and reliability through structured processes",
      " Utilized radar systems to support mission execution and ensure operational objectives were met in time-sensitive environments",
      " Led, trained, and mentored personnel in high-tempo environments, improving team performance, accountability, and mission execution",

    ],
    tags: ["Leadership", "Time Management", "Complex Problem Solving", "Team Building/Collaboration", "Structure"],
  },
];

export const interests = [
  {
    number: "01",
    title: "Intelligent machines",
    description: "When code starts interacting with the world beyond a screen.",
  },
  {
    number: "02",
    title: "The next frontier",
    description:
      "Space exploration, ambitious engineering, and the perspective of looking up.",
  },
  {
    number: "03",
    title: "Progress by building",
    description:
      "Turning curiosity into experiments, and experiments into useful things.",
  },
];
