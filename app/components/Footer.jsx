import Image from "next/image";
import React from "react";
import phone_icon from "@/assets/phone_icon.png";
import email_icon from "@/assets/email_icon.png";
import logo from "@/assets/coffee-bean-icon-white.png";

function Footer() {
  return (
    <div id="contact">
      <footer className="bg-[#3C302C] p-14 mt-20">
        <div className="flex md:flex-row md:justify-between max-sm:flex-col sm:flex-col">
          <div className="md:w-1/2">
            <h2 className="font-Mitr font-semibold max-sm:text-4xl sm:text-4xl md:text-5xl text-white mb-10  max-md:text-center">
              Contact
            </h2>
            <div className="flex flex-col max-sm:gap-y-2 sm:gap-y-2 md:gap-y-4 max-md:items-center">
              <p className="font-Mitr text-white max-sm:text-2xl sm:text-2xl md:text-3xl">
                Jl. Kipas Raya No. 1, Kota Tangerang
              </p>
              <span className="flex items-center gap-x-2">
                <Image
                  src={phone_icon}
                  alt="phone"
                  className="max-sm:w-6 sm:w-6 md:w-9"
                />
                <p className="font-Mitr text-white max-sm:text-2xl sm:text-2xl md:text-3xl">
                  (+62)8120123456
                </p>
              </span>
              <span className="flex items-center gap-x-2">
                <Image
                  src={email_icon}
                  alt="email"
                  className="max-sm:w-6 sm:w-6 md:w-9"
                />
                <p className="font-Mitr text-white max-sm:text-2xl sm:text-2xl md:text-3xl">
                  kopisarirasa@gmail.com
                </p>
              </span>
              <p className="font-Mitr text-white max-sm:text-2xl sm:text-2xl md:text-3xl max-md:mt-4">
                © Copyright by Kopi Sari Rasa
              </p>
            </div>
          </div>
          <div className="flex max-md:justify-center md:items-start max-md:mt-4">
            <Image
              src={logo}
              alt="Logo"
              className="max-sm:w-14 sm:w-14 md:w-20"
            />
            <div>
              <p className="font-Italiana text-white sm:text-2xl max-sm:text-2xl md:text-3xl">
                Kopi Sari
              </p>
              <p className="font-Italiana text-white sm:text-2xl max-sm:text-2xl md:text-3xl">
                Rasa
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
