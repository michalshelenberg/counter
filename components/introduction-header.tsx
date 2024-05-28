"use client";

import TextFadeIn from "@/components/text-fade-in";
import { motion } from "framer-motion";

export default function IntroductionHeader() {
  return (
    <motion.div
      animate={{ opacity: 0, transitionEnd: { display: "none" } }}
      transition={{ delay: 3, duration: 1 }}
      className="absolute left-0 top-0 z-30 flex h-dvh w-dvw flex-col items-center justify-center gap-8 bg-black p-8"
    >
      <h1>
        <TextFadeIn
          text="Counter++"
          className="text-3xl font-bold md:text-7xl"
        />
      </h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, y: 8 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center"
      >
        Simple counter completely free, without any ads
      </motion.p>
    </motion.div>
  );
}
