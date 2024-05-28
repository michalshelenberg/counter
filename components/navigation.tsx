import { LayoutGrid, Rows3, Square } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 gap-8 p-8">
      <Square size={32} />
      <LayoutGrid size={32} />
      <Rows3 size={32} />
      {/* <AboutModal /> */}
    </nav>
  );
}
