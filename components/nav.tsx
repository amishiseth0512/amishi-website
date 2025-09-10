"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  {
    href: "/hobbies",
    label: "Hobbies",
  },
  {
    href: "https://www.linkedin.com/in/amishi-seth-aa5348325",
    label: "LinkedIn",
  },
  {
    href: "https://drive.google.com/file/d/1XEy5hrd606geNC65mrADr7DWkSqsa8Uf/view?usp=sharing",
    label: "Resume",
  },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-zinc-900"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex h-14 items-center justify-between ">
        <Link href="/" className="font-serif text-xl font-bold ml-5">
          Amishi Seth
        </Link>

        <div className="hidden md:flex md:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
