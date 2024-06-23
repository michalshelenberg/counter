"use client";

import IntroductionHeader from "@/components/introduction-header";
import { motion } from "framer-motion";
import { LayoutGrid, Rows3, Square } from "lucide-react";
import { useEffect, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi2";

function SoloView() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const localState = parseInt(localStorage.getItem("count") || "0");
    setCount(localState);
  }, []);

  const increment = () => {
    setCount(count + 1);
    localStorage.setItem("count", (count + 1).toString());
  };

  const decrement = () => {
    setCount(count - 1);
    localStorage.setItem("count", (count - 1).toString());
  };

  return (
    <motion.div
      whileTap={"tap"}
      className="flex aspect-video h-full w-auto max-w-full cursor-pointer flex-col rounded-[32px] bg-[#171717] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.25)]"
    >
      <div className="relative flex h-full flex-col">
        <div className="absolute right-0 top-0 flex flex-row gap-3 p-6">
          <div className="h-8 w-24 rounded-full bg-white"></div>
          <div className="h-8 w-8 rounded-full bg-white"></div>
          <div className="h-8 w-8 rounded-full bg-white"></div>
        </div>
        <div
          onClick={increment}
          className="flex h-full items-center justify-center"
        >
          <motion.p
            variants={{
              initial: { scale: 1 },
              tap: { scale: 0.8 },
            }}
            className="text-9xl font-bold text-white"
          >
            {count}
          </motion.p>
        </div>
      </div>
      <div className="w-full border border-black"></div>
      <div className="flex h-1/5 flex-row">
        <button
          onClick={decrement}
          className="flex flex-1 items-center justify-center text-white"
        >
          <HiMinus size={32} strokeWidth={3} />
        </button>
        <div className="h-full border border-black"></div>
        <button
          onClick={increment}
          className="flex flex-1 items-center justify-center text-white"
        >
          <HiPlus size={32} strokeWidth={3} />
        </button>
      </div>
    </motion.div>
  );
}

function GridView() {
  const [counters, setCounters] = useState(1);

  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
      <div className="aspect-video w-full rounded-[16px] bg-[#171717]"></div>
      <div className="aspect-video w-full rounded-[16px] bg-[#171717]"></div>
    </div>
  );
}

const TABS = [
  {
    label: "Solo view",
    icon: <Square size={24} />,
    content: <SoloView />,
  },
  {
    label: "Grid view",
    icon: <LayoutGrid size={24} />,
    // content: (
    //   <div className="flex h-full w-full items-center justify-center text-white">
    //     <p>Grid view</p>
    //   </div>
    // ),
    content: <GridView />,
  },
  {
    label: "List view",
    icon: <Rows3 size={24} />,
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <p>List view</p>
      </div>
    ),
  },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
    <IntroductionHeader />
    <main className="flex h-dvh select-none flex-col items-center gap-3 bg-black p-3">
      <div className="flex flex-row gap-3">
        {TABS.map(({ label, icon }, index) => (
          <button
            onClick={() => setActiveTab(index)}
            key={label}
            className="rounded-full bg-[#1E1E1E] p-3 text-white"
          >
            {icon}
          </button>
        ))}
      </div>
      {TABS[activeTab].content}
    </main>
    </>
  );
}
