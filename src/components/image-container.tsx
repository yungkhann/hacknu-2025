import Image from "next/image";

interface ImageContainerProps {
  index: number;
  image: string;
  event: string;
}

const ImageContainer = ({ index, image, event }: ImageContainerProps) => {
  return (
    <div className="relative bg-[#252525]" style={{ paddingTop: '100%' }}>
      <Image src={image} alt={`Image ${index + 1}`} fill style={{objectFit: "cover"}} sizes="(max-width: 768px) 100vw, 33vw" quality={100}/>
      <div className="w-full absolute bottom-0">
        <div className="relative h-[88px]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#191919]"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="absolute left-2 bottom-2 md:left-4 md:bottom-4 text-white text-[12px] md:text-[16px] text">{event}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
