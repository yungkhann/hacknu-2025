import Image from "next/image";
import { Icons } from ".";
import logo1 from "../../public/images/logo1.svg";
import logo2 from "../../public/images/logo2.svg";
import logo3 from "../../public/images/logo3.svg";
import logo4 from "../../public/images/logo4.svg";
import logo5 from "../../public/images/logo5.svg";
import logo6 from "../../public/images/logo6.svg";

const Images = [logo1, logo2, logo3, logo4, logo5, logo6];

const Sponsors = () => {
  return (
    <div className="w-full py-12">
      <div className="w-full relative">
        <div className="flex items-center w-full">
          <span className="text-secondary-grey pr-3 md:text-base lg:text-2xl">
            #
          </span>
          <Icons.seperatorSuperLong className="hidden lg:block" />
          <Icons.seperatorLong className="block lg:hidden" />
        </div>
        <div className="absolute z-50 top-0 w-full flex justify-center">
          <div className="bg-[#191919] px-3 text-base lg:text-2xl">
            Our lovely sponsors
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
          {Images.map((image) => {
            return (
              <div key={image}>
                <Image
                  src={image}
                  width={1094}
                  height={1094}
                  alt="invalid image"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
