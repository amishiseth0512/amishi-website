import { clsx, type ClassValue } from "clsx";
import { title } from "process";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const projects = [
  {
    title: "Video Transcoder",
    href: "https://transcoder.amishiseth.online/",
  },
  {
    title: "Delivery Operations Dashboard",
    href: "https://github.com/amishiseth0512/delivery-ops-dashboard",
  },
  {
    title: "URL Shortener",
    href: "https://github.com/amishiseth0512/url-shortner",
  },
];

export const blogs = [
  {
    title: "AWS ECS Basics: From Task Definition to Running Task",
    href: "https://dockerkubernetes.hashnode.dev/aws-ecs-basics-from-task-definition-to-running-task",
  },
  {
    title:
      "Building a Delivery Operations Dashboard with FastAPI, PostgreSQL and React",
    href: "https://dockerkubernetes.hashnode.dev/building-a-delivery-operations-dashboard-with-fastapi-postgresql-and-react",
  },
  {
    title:
      "From Database to API: Designing the Backend of a Logistics Platform",
    href: "https://dockerkubernetes.hashnode.dev/from-database-to-api-designing-the-backend-of-a-logistics-platform",
  },
  {
    title: "Understanding Role-Based Access Control (RBAC)",
    href: "https://dockerkubernetes.hashnode.dev/understanding-role-based-access-control-rbac",
  },
  {
    title: "Docker and Kubernetes explained",
    href: "https://dockerkubernetes.hashnode.dev/docker-and-kubernetes-explained",
  },
];
