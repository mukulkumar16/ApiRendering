//@ts-nocheck
"use client";

import { useEffect, useState } from "react";
import ImageLoad from "@/app/Component/ImageLoad";
import Final from "@/app/Component/Final";

export default function ImageGroup() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("http://localhost:3000/api/images");
        const data = await res.json();
        setImages(data.images);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    }

    fetchImages();
  }, []);

  if (images.length === 0) return <p className="text-white">Loading...</p>;

  const hasError = images.some((img) => img.error);

  return (
    <div className="bg-black flex items-center m-4 p-7 gap-4">
      
      <div className="relative w-[120px] h-[120px]">

        
        <div
         className="absolute top-0 left-0 w-[70px] h-[70px] rounded-full overflow-hidden z-40"

        >
          <ImageLoad src={images[0].url} error={images[0].error} />
        </div>

        
        <div
          className="absolute top-0 left-[50px] w-[70px] h-[70px] rounded-full overflow-hidden z-30"

        >
          <ImageLoad src={images[1].url} error={images[1].error} />
        </div>

       
        <div
          className="absolute top-[50px] left-0 w-[70px] h-[70px] rounded-full overflow-hidden z-20"

        >
          <ImageLoad src={images[2].url} error={images[2].error} />
        </div>

        
        <div
          className="absolute top-[50px] left-[50px] w-[70px] h-[70px] rounded-full overflow-hidden z-10"

        >
          <ImageLoad src={images[3].url} error={images[3].error} />
        </div>
      </div>

      
      <div className="flex ml-[100px] flex-1">
        <div>
          <h1 className="text-white text-3xl font-bold ml-4">SUPER 30</h1>
          <p className="text-white ml-4">Moradabad, Uttar Pradesh</p>
        </div>
      </div>

      
      {hasError ? (
        <Final
          src={
            "https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png"
          }
          error={true}
        />
      ) : (
        <Final src={images[1].url} error={false} />
      )}
    </div>
  );
}
