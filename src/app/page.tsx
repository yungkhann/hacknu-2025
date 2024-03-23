import {
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
import Layout from "@/components/layout";

export default function Home() {
  return (
    <Layout withHeader>
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
    </Layout>
  );
}
