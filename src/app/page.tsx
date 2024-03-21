import {
  Header,
  Icons,
  Hero,
  Timeline,
  Agenda,
  Gallery,
  FAQ,
  Register,
  KeyThings,
  About,
  Sponsors,
  Credentials,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 w-full h-full">
      <Hero />
      <Timeline />
      <KeyThings />
      <About />
      <Agenda />
      <Sponsors />
      <Gallery />
      <FAQ />
      <Register />
      <Credentials />
    </div>
  );
}
