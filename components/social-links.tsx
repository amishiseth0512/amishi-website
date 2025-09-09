"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const links = [
  {
    href: "https://www.linkedin.com/in/amishi-seth-3b3508247",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link, i) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
        >
          <Link
            href={link.href}
            className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm transition-colors hover:bg-accent ml-5"
          >
            <link.icon className="h-4 w-4" />
            <span>{link.label}</span>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
