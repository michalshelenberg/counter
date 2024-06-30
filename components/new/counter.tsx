import { motion } from "framer-motion";
import { Square } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { MdCloseFullscreen, MdOpenInFull, MdRefresh } from "react-icons/md";

const COLORS = ["bg-[#171717]", "bg-indigo-600", "bg-rose-600", "bg-lime-600"];

export default function Counter({ id }: { id: string }) {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  const [fullscreen, setFullscreen] = useState(
    window.innerHeight == screen.height,
  );
  const ref = useRef<any>(null);

  useEffect(() => {
    const storedCounter = localStorage.getItem(id);
    if (storedCounter) {
      const { count, color } = JSON.parse(storedCounter);
      setCount(count);
      setColor(color);
    }
  }, []);

  const increment = () => {
    setCount(count + 1);
    localStorage.setItem(
      id,
      JSON.stringify({ count: count + 1, color: color }),
    );
    localStorage.setItem("lastCounter", id);
  };

  const decrement = () => {
    setCount(count - 1);
    localStorage.setItem(
      id,
      JSON.stringify({ count: count - 1, color: color }),
    );
    localStorage.setItem("lastCounter", id);
  };

  const reset = () => {
    setCount(0);
    localStorage.setItem(id, JSON.stringify({ count: 0, color: color }));
    localStorage.setItem("lastCounter", id);
  };

  const changeColor = () => {
    const newColor = color < COLORS.length - 1 ? color + 1 : 0;
    setColor(newColor);
    localStorage.setItem(id, JSON.stringify({ count: count, color: newColor }));
    localStorage.setItem("lastCounter", id);
  };

  const handleFullscreen = () => {
    const el = ref.current;
    const isFullscreen = window.innerHeight == screen.height;

    if (isFullscreen) {
      document.exitFullscreen();
      setFullscreen(false);
    } else {
      const requestMethod =
        el.requestFullscreen ||
        el.webkitRequestFullscreen ||
        el.mozRequestFullscreen ||
        el.msRequestFullscreen;
      requestMethod.call(el);
      setFullscreen(true);
    }
  };

  return (
    <motion.div
      ref={ref}
      whileTap={"tap"}
      className={`${COLORS[color]} flex aspect-video h-full w-auto max-w-full cursor-pointer select-none flex-col rounded-[32px] shadow-[0px_0px_0px_0px_rgba(0,0,0,0.25)] transition duration-300`}
    >
      <div className="relative flex h-full flex-col">
        <div className="absolute right-0 top-0 flex flex-row gap-6 p-6">
          <button
            onClick={handleFullscreen}
            className="rounded-full text-white"
          >
            {fullscreen ? (
              <MdCloseFullscreen size={32} />
            ) : (
              <MdOpenInFull size={32} />
            )}
          </button>
          <button className="rounded-full text-white">
            <Square onClick={changeColor} size={32} />
          </button>
          <button onClick={reset} className="rounded-full text-white">
            <MdRefresh size={32} />
          </button>
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
      <div className="flex h-2/6 flex-row">
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
