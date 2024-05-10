"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { HiOutlineInformationCircle, HiOutlineXMark } from "react-icons/hi2";

const variants = {
  open: { display: "flex", opacity: 1 },
  closed: { opacity: 0, transitionEnd: { display: "none" } },
};

export default function AboutModal() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <motion.button
        onClick={handleOpen}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      >
        <HiOutlineInformationCircle size={32} />
      </motion.button>
      {mounted
        ? createPortal(
            <motion.div
              variants={variants}
              animate={open ? "open" : "closed"}
              initial={false}
              className="absolute left-0 top-0 z-20 flex h-dvh w-dvw flex-col items-center justify-center gap-8 bg-black p-8"
            >
              <p className="max-w-[400px] text-center">
                Simple counter completely free, without any ads
              </p>
              <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <HiOutlineXMark size={32} />
              </motion.button>
            </motion.div>,
            document.body,
          )
        : null}
    </>
  );
}
