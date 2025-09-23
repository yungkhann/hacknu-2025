import Image from 'next/image';
import { Icons } from '.';

import umag from '../../public/images/umag.svg';
import higgsfield from '../../public/images/higgsfield.svg';
import zaman from '../../public/images/zaman.svg';
import zapis from '../../public/images/zapis.svg';
import dataart from '../../public/images/dataart.svg';
import mycar from '../../public/images/mycar.svg';

const sponsors = [
  // Row 1: zaman (single item)
  [{ src: zaman, alt: 'zaman' }],
  // Row 2: higgsfield and mycar (two items)
  [
    { src: higgsfield, alt: 'higgsfield' },
    { src: mycar, alt: 'mycar' },
  ],
  // Row 3: zapis, umag, dataart (three items)
  [
    { src: zapis, alt: 'zapis' },
    { src: umag, alt: 'umag' },
    { src: dataart, alt: 'dataart' },
  ],
];

const Sponsors = () => {
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
            Our lovely sponsors
          </div>
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
          <Image src={logo3} width={1094} height={1094} alt="invalid image" />
          <Image src={logo4} width={1094} height={1094} alt="invalid image" />
          <Image src={logo5} width={1094} height={1094} alt="invalid image" />
        </div>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8 lg:w-[65%]">
            <Image src={logo6} width={1094} height={1094} alt="invalid image" />
            <Image src={logo7} width={1094} height={1094} alt="invalid image" />
          </div>
        </div> */}
        <div className="flex flex-col items-center gap-12 md:gap-12 mt-8 px-4">
          {sponsors.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex flex-col md:flex-row justify-center items-center gap-8 md:gap-8 ${
                row.length === 1
                  ? ''
                  : row.length === 2
                  ? 'md:gap-16'
                  : 'md:gap-10'
              }`}>
              {row.map(({ src, alt }, itemIndex) => (
                <Image
                  key={itemIndex}
                  src={src}
                  alt={alt}
                  width={alt === 'zaman' ? 800 : 350}
                  height={alt === 'zaman' ? 800 : 350}
                  className={`object-contain w-auto ${
                    alt === 'zaman'
                      ? 'h-32 md:h-60'
                      : alt === 'zapis'
                      ? 'h-20 md:h-24'
                      : alt === 'higgsfield' || alt === 'mycar'
                      ? 'h-16 md:h-20'
                      : alt === 'umag'
                      ? 'h-16 md:h-20'
                      : alt === 'dataart'
                      ? 'h-10 md:h-12'
                      : 'h-20 md:h-24'
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
