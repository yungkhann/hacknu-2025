import Image from "next/image";

const Agenda = () => {
    return (
        <div className="flex flex-col py-24 px-6">
            <div className="flex">
                <div className="w-1/2">
                    <Image
                    src="/images/hack-nu-2019.jpg"
                    alt="Description of the image"
                    fill={true}
                    className="object-cover"
                    />
                </div>
                <div className="w-1/2">
                    <Image
                    src="/images/hack-nu-2019.jpg"
                    alt="Description of the image"
                    width={400}
                    height={400}
                    className="h-full"
                    />
                </div>
            </div>
        </div>
    );
  };
  
  export default Agenda;