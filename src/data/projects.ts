export type Project = {
  id: string;
  title: string;
  image: string;
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
    image: "/images/logo.png",
    description: "AI-powered platform for hotel, school, and restaurant services",
    tags: ["Flutter", "AI"],
    category: "ai",

    overview:
      "A scalable multi-service platform supporting hotel, school, and restaurant systems with dynamic content and AI-powered interaction.",

    features: [
      "AI voice and text assistant",
      "Role-based authentication",
      "Dynamic admin-driven content",
      "Service ordering system",
      "Chat-based navigation",
    ],

    tech: ["Flutter", "Provider", "REST API"],

    challenges: [
      "Designed dynamic UI rendering from backend-driven content",
      "Built real-world AI interaction flows",
      "Optimized performance across multiple modules",
    ],

    screenshots: [],
    videos: [
      "https://www.youtube.com/embed/CyuMtbO7rfQ",
      "https://www.youtube.com/embed/EZw9kUK7uyQ",
    ],
  },

  {
    id: "medical-ai",
    title: "AI Medical Consultation App",
    image: "/images/logo.svg",
    description: "AI-powered consultation with real doctor handoff",
    tags: ["Flutter", "Firebase"],
    category: "ai",

    overview:
      "A healthcare app combining AI consultation with seamless transition to real doctors through chat and video.",

    features: [
      "AI-based initial diagnosis",
      "Real-time chat with doctors",
      "Video consultation support",
      "Push notifications via Firebase",
    ],

    tech: ["Flutter", "Firebase"],

    challenges: [
      "Handled real-time communication reliability",
      "Designed smooth transition from AI to human interaction",
    ],

    screenshots: [],
    videos: [
      "https://www.youtube.com/embed/TvCrb8geg3w"
    ],
  },

  {
    id: "hr_workflow",
    title: "HR Workflow App",
    image: "/images/logo.png",
    description: "Enterprise workflow and approval system",
    tags: ["Flutter", "Enterprise"],
    category: "flutter",

    overview:
      "A mobile workflow system for enterprise processes including approvals, documents, and task tracking.",

    features: [
      "Approval flows",
      "Checklist systems",
      "Document tracking",
      "Multi-role user system",
    ],

    tech: ["Flutter", "REST API"],

    challenges: [
      "Simplified complex enterprise workflows into mobile UX",
      "Handled multiple user roles and states",
    ],

    screenshots: [],
    videos: [
      "https://www.youtube.com/embed/JDqC_pTc97M"
    ],
  },

  {
    id: "tour",
    title: "Tour Guide & Booking App",
    image: "",
    description: "Tourism platform with content, booking, and audio guides",
    tags: ["Flutter"],
    category: "flutter",

    overview:
      "A tourism app providing guided experiences, booking features, and premium content.",

    features: [
      "Audio tour guides",
      "Booking system",
      "Paid content access",
      "CMS-driven dynamic data",
    ],

    tech: ["Flutter", "REST API"],

    challenges: [
      "Handled media content efficiently",
      "Built scalable CMS-driven UI",
    ],

    screenshots: [],
    videos: [],
  },

  {
    id: "job-platform",
    title: "Job Matching Platform",
    image: "",
    description: "Job platform for seekers and employers with subscription model",
    tags: ["Flutter"],
    category: "flutter",

    overview:
      "A full job-matching system with role-based onboarding and employer monetization.",

    features: [
      "OTP authentication",
      "Job recommendation system",
      "Employer subscription model",
      "Multi-language support (EN/MM)",
    ],

    tech: ["Flutter", "Provider", "REST API"],

    challenges: [
      "Designed dual user flows (job seeker vs employer)",
      "Implemented localization system",
    ],

    screenshots: [],
    videos: [
      "https://www.youtube.com/embed/iQFrx3-OrW8?feature=share",
      "https://www.youtube.com/embed/Yln3JdJPSNc"
    ],
  },

  {
    id: "festival",
    title: "Festival Event Platform",
    image: "",
    description: "Event browsing and ticketing system",
    tags: ["Vue", "TypeScript"],
    category: "web",

    overview:
      "A web platform for browsing events, purchasing tickets, and managing festival content.",

    features: [
      "Event listing",
      "Ticket purchasing",
      "Admin dashboard",
    ],

    tech: ["Vue", "TypeScript"],

    challenges: [
      "Improved UI consistency",
      "Fixed critical bugs in production system",
    ],

    screenshots: [],
    videos: [],
  },

  {
    id: "flutter_flame_game",
    title: "2D Game",
    image: "/images/logo.png",
    description: "Mobile game built with Flutter Flame",
    tags: ["Flutter", "Game"],
    category: "flutter",

    overview:
      "A 2D mobile game built using Flutter Flame with performance optimizations and feature updates.",

    features: [
      "2D gameplay mechanics",
      "Ad integration",
      "Performance optimization",
    ],

    tech: ["Flutter", "Flame"],

    challenges: [
      "Optimized rendering performance",
      "Handled game loop and state efficiently",
    ],

    screenshots: [],
    videos: [
      "https://www.youtube.com/embed/xzhJAUYr9hA",
    ],
  },
  {
    id: "portfolio-vue",
    title: "Developer Portfolio Website",
    image: "/images/portfolio.png", // add image later
    description: "Modern responsive portfolio built with Vue and Tailwind",
    tags: ["Vue", "TypeScript", "UI/UX"],
    category: "web",
  
    overview:
      "A personal portfolio website showcasing projects, experience, and contact features with a clean modern UI and responsive design.",
  
    features: [
      "Dynamic project and experience pages",
      "Reusable component architecture",
      "Responsive layout for all devices",
      "Contact form integration with EmailJS",
    ],
  
    tech: ["Vue 3", "TypeScript", "Tailwind CSS", "Vite"],
  
    challenges: [
      "Designed reusable and scalable component structure",
      "Handled routing between multiple dynamic pages",
    ],
  
    screenshots: [],
    videos: [
      "https://www.youtube.com/embed/4AXJQzrwQtQ"
    ],
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Management System",
    image: "/images/hotel_booking.png", // add later
    description: "Full-stack hotel booking system with admin dashboard and payment workflow",
    tags: ["Laravel", "PHP", "Tailwind"],
    category: "web",
  
    overview:
      "A full-stack hotel booking platform developed with Laravel, featuring user authentication, room management, booking workflows, and admin control panel.",
  
    features: [
      "User registration and authentication",
      "Room search and availability checking",
      "Booking and payment status workflow",
      "Admin dashboard for booking and room management",
      "Email confirmation after booking",
      "User profile and booking history",
      "Review submission system",
    ],
  
    tech: ["Laravel", "PHP", "MySQL", "Blade", "Tailwind CSS"],
  
    challenges: [
      "Designed full system architecture from ERD and use cases",
      "Handled booking logic with availability validation",
      "Implemented role-based admin and user workflows",
      "Built responsive UI directly using Tailwind without design tools",
    ],
  
    screenshots: [],
    videos: [
      "https://www.youtube.com/embed/HaSnqN8rZAM"
    ],
  }
];
