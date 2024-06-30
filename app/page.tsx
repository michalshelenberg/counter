"use client";

import GridView from "@/components/new/grid-view";
import SoloView from "@/components/new/solo-view";
import { LayoutGrid, Rows3, Square } from "lucide-react";
import { useEffect, useState } from "react";

const TABS = [
  {
    label: "Solo view",
    icon: <Square size={24} />,
    content: <SoloView />,
  },
  {
    label: "Grid view",
    icon: <LayoutGrid size={24} />,
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
  const [view, setView] = useState(0);

  useEffect(() => {
    const storageView = parseInt(localStorage.getItem("view") || "0");
    setView(storageView);
  }, []);

  const handleViewChange = (index: number) => {
    setView(index);
    localStorage.setItem("view", index.toString());
  };

  return (
    <main className="flex h-dvh select-none flex-col items-center gap-3 bg-black p-3">
      <div className="flex flex-row gap-3">
        {TABS.map(({ label, icon }, index) => (
          <button
            onClick={() => handleViewChange(index)}
            key={label}
            className="rounded-full bg-[#1E1E1E] p-3 text-white"
          >
            {icon}
          </button>
        ))}
      </div>
      {TABS[view].content}
    </main>
  );
}
