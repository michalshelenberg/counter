import AboutModal from "@/components/about-modal";

export default function Navigation() {
  return (
    <nav className="absolute left-1/2 top-0 z-10 flex -translate-x-1/2 gap-4 p-4">
      <AboutModal />
    </nav>
  );
}
