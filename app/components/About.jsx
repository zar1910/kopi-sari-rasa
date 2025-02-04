import React from "react";
import Image from "next/image";
import about_us_1 from "@/assets/about/about-us-1.jpg";
import about_us_2 from "@/assets/about/about-us-2.jpg";
import about_us_3 from "@/assets/about/about-us-3.jpg";

function About() {
  return (
    <div id="about">
      <h2 className="font-Mitr text-[#3C3023] max-sm:text-4xl sm:text-4xl md:text-6xl font-semibold text-center mt-20">
        About Us
      </h2>
      <div className="flex max-sm:flex-col sm:flex-col md:flex-row mt-14 mx-14">
        <div className="w-full md:w-1/2">
          <p className="font-Mitr text-[#3C3023]  max-sm:text-xl sm:text-xl md:text-5xl max-sm:leading-[25px] sm:leading-[25px] md:leading-[70px]">
            Kopi Sari Rasa merupakan warung kopi kekinian dan telah berjualan
            sejak tahun 2025. Kami berfokus untuk menyediakan asupan kafein mu
            tiap pagi dan menjadi teman saat kerja.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 max-sm:mt-4 sm:mt-4 md:pl-20 md:w-1/2 auto-rows-[200px]">
          <Image src={about_us_1} className="col-span-1 h-full object-cover" />
          <Image src={about_us_2} className="col-span-1 h-full object-cover" />
          <Image src={about_us_3} className="col-span-2 h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;
