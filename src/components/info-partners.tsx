import Image from "next/image";
import { Icons } from ".";
import Logo1 from "../../public/images/infoLogo1.svg"
import Logo2 from "../../public/images/infoLogo2.svg"

const Images = [Logo1, Logo2];

const InfoPartners = () => {
  return (
    <div id="partners" className="w-full py-12">
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
            Our info-partners
          </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
          <Image src={logo3} width={1094} height={1094} alt="invalid image" />
          <Image src={logo4} width={1094} height={1094} alt="invalid image" />
          <Image src={logo5} width={1094} height={1094} alt="invalid image" />
        </div> */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 lg:w-[65%]">
            <Image src={Logo1} width={1094} height={1094} alt="invalid image" />
            <Image src={Logo2} width={1094} height={1094} alt="invalid image" />
          </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8 ">
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
        </div> */}
      </div>
    </div>
  );
};

export default InfoPartners;