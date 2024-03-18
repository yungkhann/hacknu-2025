import Image from "next/image";
import { IMAGES } from "@/consts/images";
import ImageContainer from "./image-container";

const Gallery = () => {
    const first2images = IMAGES.slice(0, 2);
    const next3images = IMAGES.slice(2, 5 );
    const next4images = IMAGES.slice(5, 9 );
    return (
        <div className="flex flex-col gap-y-3 pb-24">
            <div className="flex flex-row gap-x-3">
                {first2images.map((image, image_index) => (
                <div key={image_index} className="w-1/2">
                    <ImageContainer index={image_index} image={image} event="HackNU/23"/>
            </div>
        ))} 
        </div>
        <div className="flex flex-row gap-x-3">
                {next3images.map((image, image_index) => (
                <div key={image_index} className="w-1/3">
                    <ImageContainer index={image_index} image={image} event="HackNU/19" />
            </div>
        ))} 
        </div>
        <div className="flex flex-row gap-x-3">
                {next4images.map((image, image_index) => (
                <div key={image_index} className="w-1/4">
                    <ImageContainer index={image_index} image={image} event="HackNU/23"/>
            </div>
        ))} 
        </div>
    </div>
    );
  };
  
  export default Gallery;