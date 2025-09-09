"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface VideoItem {
  title: string;
  href: string;
}

interface VideoListProps {
  items: VideoItem[];
}

export function VideoList({ items }: VideoListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
          className="flex gap-4 text-sm md:text-base"
        >
          <Link href={item.href} className="text-blue-500 hover:underline ml-5">
            {item.title}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
