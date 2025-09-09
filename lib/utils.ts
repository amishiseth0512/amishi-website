import { clsx, type ClassValue } from "clsx";
import { title } from "process";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const projects = [
  {
    title: "URL Shortener with Redis",
    href: "https://github.com/amishiseth0512/url-shortner",
  },
  {
    title: "An ETL data pipeline with Semgrep and Sumo Logic Integrations",
    href: "https://github.com/amishiseth0512/etl",
  },
  {
    title: "User Management API in Golang",
    href: "https://github.com/amishiseth0512/api-user-management",
  },
];
