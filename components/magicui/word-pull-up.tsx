"use client";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1, // This makes the animation go from last to first
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2, // Use the custom value to set the delay
      },
    }),
  },
  className,
}: WordPullUpProps) {
  const wordArray = words.split(" ");
  return (
    <motion.h1
      variants={wrapperFramerProps}
      initial="hidden"
      animate="show"
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {wordArray.map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          custom={wordArray.length - 1 - i}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
