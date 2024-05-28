"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { MdAdd, MdRefresh, MdRemove } from "react-icons/md";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="relative flex h-dvh w-dvw select-none flex-col overflow-hidden">
      <div className="absolute right-0 top-0 p-8">
        <motion.button
          onClick={reset}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        >
          <MdRefresh size={32} />
        </motion.button>
      </div>
      <motion.button
        onClick={increment}
        initial="initial"
        animate="initial"
        whileHover="hover"
        whileTap="tap"
        className="flex flex-grow items-center justify-center pt-16 font-mono text-9xl md:text-[256px]"
      >
        <motion.p
          variants={{
            initial: { scale: 1 },
            tap: { scale: 0.8 },
          }}
          className="font-bold"
        >
          {count}
        </motion.p>
      </motion.button>
      <div className="flex h-1/6 w-full divide-x-2 divide-neutral-800 border-t-2 border-neutral-800">
        <motion.button
          onClick={decrement}
          // whileTap={{ backgroundColor: "white", color: "black" }}
          className="flex flex-1 items-center justify-center"
        >
          <MdRemove size={32} />
        </motion.button>
        <motion.button
          onClick={increment}
          className="flex flex-1 items-center justify-center"
        >
          <MdAdd size={32} />
        </motion.button>
      </div>
    </div>
  );
}
