import Link from "next/link"
import { Icons } from ".";
import ShapeWrapper from "./shape-wrapper";

export const Register = () => {
  return (
    <div className="flex justify-center items-center self-stretch py-80 px-2">
      <Link href="/register" className="flex flex-row" style={{
        textDecoration: "none",
      }}>
        <div className="flex flex-row items-center gap-x-2 md:gap-x-4">
          <Icons.smallArrowRight className="w-[24px] h-[37px] md:w-[33px] md:h-[55px] lg:w-[44px] lg:h-[74px]" />
          <span className="font-Helloviteca text-[30px] text-[32px] md:text-[60px] lg:text-[80px] leading-[100%] text-primary-green">
            register
          </span>
        </div>
        <div className="relative bottom-1 md:bottom-2 self-end mb-1 bg-primary-green w-[24px] md:w-[36px] h-[5.25px] animate-blink" />
      </Link>
    </div>
  )
}