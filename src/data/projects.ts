export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "flutter" | "web" | "ai";

  overview: string;
  features: string[];
  tech: string[];
  challenges: string[];
  screenshots: string[];
  videos: string[];
};

export const projects: Project[] = [
  {
    id: "ai-multi",
    title: "AI Multi-Industry App",
    description: "Hotel, school, restaurant platform with AI assistant",
    tags: ["Flutter", "AI"],
    category: "ai",

    overview:
      "A scalable multi-service platform supporting hotel, school, and restaurant systems with dynamic content and AI-powered interaction.",

    features: [
      "AI voice and text assistant",
      "Dynamic content via admin dashboard",
      "Role-based authentication",
      "Service ordering system",
      "In-app navigation via chat",
    ],

    tech: ["Flutter", "Provider", "REST API"],

    challenges: [
      "Handled dynamic UI rendering from backend-driven content",
      "Designed AI interaction flow for real user queries",
      "Optimized performance for multi-module system",
    ],

    screenshots: ["/images/ai1.png", "/images/ai2.png", "/images/ai3.png"],
    videos: [
      "https://www.youtube.com/embed/CyuMtbO7rfQ",
      "https://www.youtube.com/embed/EZw9kUK7uyQ",
      "https://www.youtube.com/embed/EZw9kUK7uyQ"
    ]
  },

  // 👉 Add others later
];
