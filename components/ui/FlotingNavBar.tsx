"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  // set true for the initial state so that nav bar is visible in the hero section
  const [visible, setVisible] = useState(true);
  const [navBarIndicator, setNavBarIndicator] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      console.log(current);
      if (scrollYProgress.get() < 0.05) {
        // also set true for the initial state
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }

      if (current > 0 && current <= 0.3) setNavBarIndicator(0);
      if (current > 0.3 && current <= 0.48) setNavBarIndicator(1);
      if (current > 0.49 && current <= 0.84) setNavBarIndicator(2);
      if (current > 0.85 && current <= 0.94) setNavBarIndicator(3);
      if (current > 0.95 && current <= 1) setNavBarIndicator(4);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] md:space-x-4 lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-5 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-2",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-0 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
            onClick={() => setNavBarIndicator(idx)}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
            {navBarIndicator === idx && (
              <div className="w-[6px] h-[6px] bg-neutral-50 absolute -bottom-3 right-0 left-[50%] rounded-full" />
            )}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
