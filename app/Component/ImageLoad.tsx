// @ts-nocheck
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageTooltip } from "./ImageTooltip";

export default function ImageLoad({ src, error }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [finalSrc, setFinalSrc] = useState(src);

  const ERROR_ICON =
    "https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png";

  
  async function retryApiCall() {
    try {
      

      const res = await fetch("http://localhost:3000/api/images"); 
      const data = await res.json();

     
      if (data?.imageUrl) {
        setFinalSrc(data.imageUrl);
        setIsLoading(false);
        return true;
      }
    } catch (err) {
      console.log("API error");
    }

    return false;
  }

  useEffect(() => {
    if (error && count < 3) {
      setIsLoading(true);

      const t = setTimeout(async () => {
        const success = await retryApiCall();

        if (!success) {
          setCount((prev) => prev + 1); 
        }
      }, 5000);

      return () => clearTimeout(t);
    }

   
    if (count >= 3) {
      setIsLoading(false);
    }
  }, [count, error]);

  const status =
    isLoading ? "loading" : error && count >= 3 ? "error" : "ready";

  return (
    <ImageTooltip status={status} count={count}>
      <div className="relative h-[70px] w-[70px] rounded-full overflow-hidden flex justify-center items-center">
        {isLoading ? (
          <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full"></div>
        ) : error && count >= 3 ? (
          <Image src={ERROR_ICON} alt="error" fill style={{ objectFit: "cover" }} />
        ) : (
          <Image src={finalSrc} alt="image" fill style={{ objectFit: "cover" }} />
        )}
      </div>
    </ImageTooltip>
  );
}
