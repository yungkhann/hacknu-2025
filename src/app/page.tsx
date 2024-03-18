import { Header, Icons, Hero, Timeline } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 w-full h-full">
      <Hero />
      <Timeline />
    </div>
  );
}
