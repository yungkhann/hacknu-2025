import { Header, Icons, Hero, Timeline } from "@/components";
import FAQ from "@/components/faq";
import { Register } from "@/components/register";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 w-full h-full">
      <Hero />
      <Timeline />
      <FAQ />
      <Register />
    </div>
  );
}
