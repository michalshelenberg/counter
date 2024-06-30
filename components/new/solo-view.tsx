import Counter from "@/components/new/counter";
import { useEffect, useState } from "react";

// TODO: Refactor
export default function SoloView() {
  const [lastCounter, setLastCounter] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedCounter = localStorage.getItem("lastCounter");
    if (storedCounter) {
      setLastCounter(storedCounter);
    } else {
      const id = `counter-${Math.random()}`;
      localStorage.setItem(id, JSON.stringify({ count: 0, color: 0 }));
      localStorage.setItem("lastCounter", id);
      setLastCounter(id);
    }
    setLoaded(true);
  }, []);

  return <>{loaded && <Counter id={lastCounter} />}</>;
}
