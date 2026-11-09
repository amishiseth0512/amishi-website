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
