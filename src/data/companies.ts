export type Company = {
  id: string;
  name: string;
  role: string;
  duration: string;
  responsibilities: string[];
  contributions: string[];
  tech: string[];
  projects: string[];
  summary: string;
  tags: string[];
};

export const companies: Company[] = [
  {
    id: "xlance",
    name: "Xlance Collective",
    role: "Front-end Developer (Flutter & Vue)",
    duration: "07/2024 - Present",

    summary:
      "Built and contributed to production-grade multi-industry applications including hotel, school, and restaurant platforms with AI-powered features and workflow systems.",

    responsibilities: [
      "Built multi-service mobile applications using Flutter",
      "Integrated AI assistant with voice and chat interactions",
      "Implemented Firebase authentication and backend services",
      "Developed enterprise workflow systems with multiple modules",
      "Worked with REST APIs and cross-platform integrations",
      "Collaborated with designers, PMs, and clients",
    ],

    contributions: [
      "Led development of scalable multi-industry platform",
      "Designed AI interaction flows for real-time assistance",
      "Improved performance, UX consistency, and architecture stability",
      "Developed Flutter Flame-based game with ads integration",
      "Built Vue.js frontend modules for web-based systems",
    ],

    tech: ["Flutter", "Vue 3", "Firebase", "REST API", "Provider"],

    tags: [
      "Flutter Development",
      "AI Integration",
      "Vue Frontend",
      "Firebase Backend",
      "System Architecture",
    ],

    projects: ["ai-multi", "medical-ai", "hr_workflow", "tour", "festival"],
  },

  {
    id: "sync",
    name: "Sync Systems",
    role: "Flutter Developer",
    duration: "08/2023 - 01/2024",

    summary:
      "Developed and maintained production food delivery applications with focus on UI/UX, API integration, and ordering workflows.",

    responsibilities: [
      "Developed UI for food delivery application",
      "Integrated REST APIs for ordering flow",
      "Improved app performance and user experience",
      "Worked on feature updates based on client feedback",
    ],

    contributions: [
      "Delivered end-to-end ordering workflow improvements",
      "Enhanced UI consistency and responsiveness",
      "Optimized app performance across devices",
    ],

    tech: ["Flutter", "REST API"],

    tags: [
      "Mobile UI Development",
      "API Integration",
      "UX Improvement",
      "Flutter Apps",
    ],

    projects: [],
  },

  {
    id: "kwin",
    name: "K-Win Technologies",
    role: "Intern Developer",
    duration: "03/2023 - 06/2023",

    summary:
      "Contributed to a restaurant POS system focusing on billing, order management UI, and system coordination with backend teams.",

    responsibilities: [
      "Worked on restaurant POS system UI development",
      "Collaborated with backend developers for API integration",
      "Assisted in system testing and demos",
    ],

    contributions: [
      "Supported development of billing and order management modules",
      "Assisted in preparing project presentations and demos",
    ],

    tech: ["Flutter"],

    tags: [
      "POS Systems",
      "UI Development",
      "Team Collaboration",
      "Flutter Basics",
    ],

    projects: [],
  },
];