import Image from "next/image";
import { Icons } from ".";
import Image1 from "../../public/images/image10.svg";
import Image2 from "../../public/images/image11.svg";
import Image3 from "../../public/images/image12.svg";

const About = () => {
  return (
    <div className="w-full flex flex-col py-6 gap-6">
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="w-full aspect-square relative">
          <Image src={Image1} width={1000} height={1000} alt="invalid image" />
        </div>
        <div className="w-full flex flex-col">
          {/* drop-shadow-[0_1.2px_1.2px_rgba(193,91,255,1)] */}
          <p className="font-NeueMachina text-5xl lg:text-7xl bg-gradient-to-b from-[#ED5CFF] to-[#B355F8] inline-block text-transparent bg-clip-text">
            24 hour hackathon <br /> <br />
          </p>
          {/* drop-shadow-[0_1.2px_1.2px_rgba(114,93,255,1)] */}
          <p className="font-NeueMachina text-5xl lg:text-7xl bg-gradient-to-b from-[#6A4AD2] to-[#5682F1] inline-block text-transparent bg-clip-text">
            novices & amateurs <br /> <br />
          </p>
          {/* drop-shadow-[0_1.2px_1.2px_rgba(94,218,254,1)] */}
          <p className="font-NeueMachina text-5xl lg:text-7xl bg-gradient-to-b from-[#52b2d2] to-[#438d71] inline-block text-transparent bg-clip-text">
            engineers, developers & designers
          </p>
        </div>
      </div>
      <div className="flex gap-6 flex-col-reverse lg:flex-row">
        <div className="w-full flex flex-col justify-between">
          <p
            className="font-Helloviteca text-[40px] lg:text-6xl text-[#58E191]"
            style={{ lineHeight: "180%" }}
          >
            Hack
            <span className="text-[#E256FF]">NU</span>
          </p>
          <span className="font-NeueMachina text-2xl lg:text-3xl lg:leading-10">
            One of the{" "}
            <span className=" text-[14px] lg:text-base text-[#58E191] font-Helloviteca">
              largest
            </span>{" "}
            annual university hackathons in Central Asia. Hosted at{" "}
            <span className=" text-[14px] lg:text-base text-[#58E191] font-Helloviteca">
              Nazarbayev University
            </span>{" "}
            by the NU Student Chapter of the{" "}
            <span className=" text-[14px] lg:text-base text-[#58E191] font-Helloviteca">
              Association for Computing Machinery.
            </span>
          </span>
        </div>
        <div className="w-full aspect-square relative">
          <Image src={Image2} width={1000} height={1000} alt="invalid image" />
        </div>
      </div>
      <div className="flex gap-6 flex-col lg:flex-row">
        <div className="w-full aspect-square relative">
          <Image src={Image3} width={1000} height={1000} alt="invalid image" />
        </div>
        <div className="w-full flex flex-col justify-between">
          <p className="font-NeueMachina text-[#E256FF] text-[80px] lg:text-9xl">
            ACM SC
          </p>
          <span className="font-NeueMachina text-[#AEAEAE] lg:text-2xl">
            NU ACM Student Chapter{" "}
            <span className="text-[#E256FF]">(@nuacmsc)</span> is a branch of
            international organization ACM –Association for Computing Machinery.
            We have started our work in 2017. We believe that software
            engineering and computer science are cutting-edge fields that differ
            from other sciences.
            <div className="flex mt-4">
              <a href="https://t.me/nuacmsc">
                <Icons.telegram />
              </a>
              <a href="https://www.instagram.com/nuacmsc/">
                <Icons.instagram />
              </a>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
