import Counter from "@/components/new/counter";
import { useEffect, useState } from "react";

export default function GridView() {
  const [counters, setCounters] = useState<string[]>([]);

  useEffect(() => {
    const storedCounters = Object.keys(localStorage).filter((key) =>
      key.includes("counter-"),
    );
    setCounters(storedCounters);
  }, []);

  const handleAddCounter = () => {
    const id = `counter-${Math.random()}`;
    localStorage.setItem(id, JSON.stringify({ count: 0, color: 0 }));
    setCounters([...counters, id]);
  };

  return (
    <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 2xl:grid-cols-3">
      {counters.map((id) => (
        <Counter id={id} key={id} />
      ))}
      <div className="text-white">
        <button
          onClick={handleAddCounter}
          className="rounded-full bg-white px-6 py-3 text-black"
        >
          Add counter
        </button>
      </div>
    </div>
  );
}
