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
  exampleContent: true,
  about: [
    "I’m a software engineer drawn to the moment an idea becomes something you can actually use. A few lines of code. A working prototype. A small piece of the future, here a little sooner.",
    "My interests live somewhere between software engineering, intelligent systems, and space exploration. I like understanding how things work—and finding ways to make them work better.",
    "Away from the screen, curiosity is still the common thread. There’s always another question to follow, another thing to take apart, and another reason to keep learning.",
  ],
};

// Example case studies. Replace with your own work before sharing publicly.
export const projects: Project[] = [
  {
    slug: "orbital",
    name: "Orbital",
    category: "Full-stack development",
    summary:
      "A clearer view of complex systems. A concept for a real-time operations workspace.",
    tags: ["TypeScript", "React", "Node.js"],
    visual: "orbit",
    year: "20XX",
    role: "Your role",
    demoUrl: "",
    sourceUrl: "",
    challenge:
      "Complex systems produce a lot of information. This example explores how an operations interface could make the important signals easier to find.",
    approach:
      "Describe your architecture, the decisions you made, and the trade-offs behind them. Add screenshots of the real product and explain your specific contribution.",
    outcome:
      "Replace this example with an honest account of what shipped, what you learned, and any measurable results you can support.",
  },
  {
    slug: "automata",
    name: "Automata",
    category: "Robotics & automation",
    summary:
      "Connecting software to the physical world. An exploration of intelligent automation.",
    tags: ["Python", "Computer vision", "APIs"],
    visual: "robot",
    year: "20XX",
    role: "Your role",
    demoUrl: "",
    sourceUrl: "",
    challenge:
      "Moving from a digital decision to a physical action introduces uncertainty. This example is a place for a robotics, automation, or AI project.",
    approach:
      "Walk through the inputs, the decision-making process, and the system’s response. Include the reliability and safety considerations relevant to your actual project.",
    outcome:
      "Add a working demonstration, a concise result, or the lesson that changed your next iteration. This is sample content, not a completed project.",
  },
  {
    slug: "signal",
    name: "Signal",
    category: "Developer tools",
    summary:
      "Less friction, more building. A concept for tools that help developers stay in flow.",
    tags: ["Next.js", "PostgreSQL", "Docker"],
    visual: "signal",
    year: "20XX",
    role: "Your role",
    demoUrl: "",
    sourceUrl: "",
    challenge:
      "Small interruptions add up. This example introduces a tool designed around a recurring problem in a developer’s everyday workflow.",
    approach:
      "Explain how you identified the problem, what you built, and which details made the experience more useful. Keep the focus on your own engineering decisions.",
    outcome:
      "Replace this paragraph with feedback, adoption, performance improvements, or what you learned from building the tool.",
  },
];

export const skillGroups = [
  {
    id: "interfaces",
    label: "Interfaces",
    number: "01",
    title: "Ideas into interfaces.",
    description:
      "Building the part people see, touch, and remember. Responsive experiences with careful attention to interaction and accessibility.",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "HTML & CSS",
      "Three.js",
      "Accessibility",
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
      "Node.js",
      "Python",
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
      "GitHub Actions",
      "Docker",
      "Cloud platforms",
      "CI/CD",
      "Observability",
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
      "Following the questions that lead somewhere new. Experimenting with intelligent systems, physical computing, and immersive experiences.",
    skills: [
      "Robotics",
      "Machine learning",
      "Computer vision",
      "Automation",
      "WebGL",
      "Prototyping",
    ],
    projectSlug: "automata",
    color: "#f3bb8a",
  },
];

export const experience = [
  {
    period: "20XX — Present",
    role: "Your current role",
    organization: "Company or organization",
    description:
      "Introduce your current work and the kind of problems you solve.",
    highlights: [
      "Add a specific contribution and explain its impact.",
      "Describe a system, feature, or initiative you helped deliver.",
    ],
    tags: ["Your stack", "Your focus"],
  },
  {
    period: "20XX — 20XX",
    role: "Your previous role",
    organization: "Company or organization",
    description: "Describe the next chapter in your engineering journey.",
    highlights: [
      "Highlight a meaningful technical challenge.",
      "Share what you learned or improved along the way.",
    ],
    tags: ["Your stack", "Your focus"],
  },
  {
    period: "20XX",
    role: "Where it started",
    organization: "Education or first milestone",
    description:
      "Add your education, training, or the project that started it all.",
    highlights: [
      "Include a qualification, an achievement, or a formative experience.",
    ],
    tags: ["Learning", "Foundations"],
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
