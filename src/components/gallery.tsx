"use client";
import { useEffect, useState } from "react";
import { IMAGES } from "@/consts/images";
import ImageContainer from "./image-container";

const Gallery = () => {
  const [imageSets, setImageSets] = useState<
    { images: { src: string; event: string }[]; width: string }[]
  >([]);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      let sliceRanges = [];

      if (screenWidth >= 768) {
        sliceRanges = [
          [0, 2],
          [2, 5],
          [5, 9],
        ];
      } else {
        sliceRanges = [
          [0, 1],
          [1, 3],
          [3, 5],
        ];
      }

      const newImageSets = sliceRanges.map(([start, end]) => ({
        images: IMAGES.slice(start, end),
        width:
          end - start === 1
            ? "1"
            : end - start === 2
            ? "1/2"
            : end - start === 3
            ? "1/3"
            : "1/4",
      }));
      setImageSets(newImageSets);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-3 pb-24">
      {imageSets.map((imageSet, setIndex) => (
        <div key={setIndex} className="flex flex-row gap-x-3">
          {imageSet.images.map((image, imageIndex) => (
            <div
              key={imageIndex}
              style={{ width: `calc(${imageSet.width} * 100%)` }}
            >
              <ImageContainer
                index={setIndex * 3 + imageIndex}
                image={image.src}
                event={image.event}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
