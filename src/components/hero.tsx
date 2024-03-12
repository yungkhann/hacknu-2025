import Link from "next/link";
import { Icons } from ".";

const Hero = () => {
  return (
    <div className="h-[calc(100vh_-_80px)] flex flex-col justify-center gap-y-24">
      <div className="flex items-center flex-col space-y-4">
        <h1 className="text-primary-green font-extrabold text-5xl -tracking-[1.8px] lg:-tracking-[5.6px] md:text-[120px] lg:text-[170px] leading-normal font-NeueMachina">
          HackNU<span className="text-primary-purple">/24</span>
        </h1>
        <p className="text-base font-normal text-center leading-normal max-w-[480px]">
          7th Annual 24-hour student hackathon organized by NU ACM Student
          Chapter
        </p>
      </div>
      <div className="flex justify-center">
        <Link href="/register" className="flex flex-row">
          <div className="flex flex-row items-center gap-x-1">
            <Icons.smallArrowRight />
            <span className="font-Helloviteca text-[30px] lg:text-[42px] leading-normal text-primary-green">
              register
            </span>
          </div>
          <div className="self-end mb-1 bg-primary-green w-[36px] h-[5.25px] animate-blink"/>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
