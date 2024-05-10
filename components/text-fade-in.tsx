"use client";

import { motion } from "framer-motion";

export default function TextFadeIn({
  text,
  ...rest
}: {
  text: string;
  className?: string;
}) {
  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: index * 0.05, // Adjusts delay of the stagger effect
          }}
          {...rest}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}
