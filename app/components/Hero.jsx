import Image from "next/image";
import React from "react";
import hero_img from "@/assets/hero-coffee.png";

function Hero() {
  return (
    <div className="max-sm:pt-[8rem] sm:pt-40 md:pt-40">
      <div className="relative w-full max-md:my-6 md:my-10 max-md:px-6 md:px-12">
        <Image
          src={hero_img}
          alt="Welcome Image"
          className="w-full min-h-60 max-h-[579px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end max-sm:px-8 sm:px-12 md:px-16">
          <h1 className="font-Mitr text-white max-sm:text-2xl sm:text-4xl md:text-7xl font-bold text-right">
            <span className="block">Welcome to</span>
            <span className="block">Our Coffee</span>
            <span className="block">Shop</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
