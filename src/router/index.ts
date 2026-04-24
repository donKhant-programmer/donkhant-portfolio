import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import ExperiencePage from "@/pages/ExperiencePage.vue";
import CompanyDetailPage from "@/pages/CompanyDetailPage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";
import ProjectDetailPage from "@/pages/ProjectDetailPage.vue";
import ContactPage from "@/pages/ContactPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/experience", component: ExperiencePage },
  { path: "/experience/:id", component: CompanyDetailPage },
  { path: "/projects", component: ProjectsPage },
  { path: "/projects/:id", component: ProjectDetailPage },
  { path: "/contact", component: ContactPage },
  {
    path: "/cv",
    name: "cv",
    component: () => import("@/pages/CvPage.vue"),
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
