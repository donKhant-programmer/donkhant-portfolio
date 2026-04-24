// src/data/skills.ts

export type SkillItem = {
    name: string;
    details: string[];
  };
  
  export type SkillCategory = {
    name: string;
    items: SkillItem[];
  };
  
  export const skills: SkillCategory[] = [
    {
      name: "Mobile",
      items: [
        {
          name: "Flutter",
          details: [
            "State management (Provider, Bloc)",
            "Performance optimization",
            "REST API integration",
          ],
        },
        {
          name: "Dart",
          details: [
            "OOP & clean architecture",
            "Async programming",
          ],
        },
        {
          name: "Flutter Flame",
          details: [
            "Game loop handling",
            "2D rendering optimization",
          ],
        },
      ],
    },
    {
      name: "Frontend",
      items: [
        {
          name: "Vue",
          details: [
            "Composition API",
            "Vue Router",
            "API integration",
          ],
        },
        {
          name: "TypeScript",
          details: [
            "Type safety",
            "Interface design",
          ],
        },
      ],
    },
    {
      name: "Backend",
      items: [
        {
          name: "Laravel",
          details: [
            "MVC architecture",
            "Authentication",
            "Eloquent ORM",
          ],
        },
        {
          name: "Firebase",
          details: [
            "Auth",
            "Realtime DB",
            "Push notifications",
          ],
        },
      ],
    },
  ];