export type Company = {
  id: string;
  name: string;
  role: string;
  duration: string;
  responsibilities: string[];
  contributions: string[];
  tech: string[];
  projects: string[]; // link to project ids
};

export const companies: Company[] = [
  {
    id: "xlance",
    name: "Xlance Collective",
    role: "Front-end Developer (Mobile/Web)",
    duration: "07/2024 - Present",
    responsibilities: [
      "Built multi-service mobile applications",
      "Integrated AI assistant with voice & chat",
      "Implemented Firebase backend & authentication",
      "Worked with REST APIs and cross-platform integrations",
      "Collaborated with designers and clients",
    ],
    contributions: [
      "Led development of scalable multi-industry app",
      "Designed AI interaction workflows",
      "Improved app performance and UX across modules",
    ],
    tech: ["Flutter", "Firebase", "REST API", "Vue"],
    projects: ["ai-multi", "medical-ai", "hr_workflow", "tour", "festival"],
  },

  {
    id: "sync",
    name: "Sync Systems",
    role: "Flutter Developer",
    duration: "08/2023 - 01/2024",
    responsibilities: [
      "Worked on food delivery app UI",
      "Integrated APIs for ordering system",
      "Improved UX and performance",
    ],
    contributions: [
      "Delivered new features based on client feedback",
      "Enhanced ordering workflow",
    ],
    tech: ["Flutter", "REST API"],
    projects: [],
  },

  {
    id: "kwin",
    name: "K-Win Technologies",
    role: "Intern Developer",
    duration: "03/2023 - 06/2023",
    responsibilities: [
      "Worked on restaurant POS system",
      "Collaborated with backend team",
    ],
    contributions: [
      "Supported development of billing and order UI",
      "Assisted in demos and presentations",
    ],
    tech: ["Flutter"],
    projects: [],
  },
];
