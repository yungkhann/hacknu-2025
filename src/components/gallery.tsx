import Image from "next/image";

const Gallery = () => {
    return (
<div className="flex gap-x-4 py-6">
      <div className="w-1/2">
        <div className="relative" style={{ paddingTop: '100%' }}>
          <Image
            src="/images/hack-nu-2019.jpg"
            alt="Your Image Alt Text"
            layout="fill"
            objectFit="cover"
          />
        <div className="absolute bottom-0 bg-black">
        <p>HACKNU-2023</p>
        </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="relative" style={{ paddingTop: '100%' }}>
          <Image
            src="/images/hack-nu-2019.jpg"
            alt="Your Image Alt Text"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
    );
  };
  
  export default Gallery;