import React from "react";
import Image from "next/image";
import espresso from "@/assets/menu-kopi/espresso.jpg";
import americano from "@/assets/menu-kopi/americano.jpg";
import cappucino from "@/assets/menu-kopi/cappuccino.jpg";
import latte from "@/assets/menu-kopi/coffe-latte.jpg";
import mocha from "@/assets/menu-kopi/mocha-latte.jpg";
import macchiato from "@/assets/menu-kopi/macchiato.jpg";

export const menu_kopi_data = [
  {
    name: "Espresso",
    image: espresso,
  },
  {
    name: "Americano",
    image: americano,
  },
  {
    name: "Cappucino",
    image: cappucino,
  },
  {
    name: "Latte",
    image: latte,
  },
  {
    name: "Mocha",
    image: mocha,
  },
  {
    name: "Machiato",
    image: macchiato,
  },
];

function Menu() {
  return (
    <div id="menu">
      <div className="w-1/2 h-fit bg-[#3C302C] py-2">
        <h2 className="font-Mitr text-white max-sm:text-2xl sm:text-2xl md:text-5xl text-center">
          Menu
        </h2>
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-y-10 mt-20">
        {menu_kopi_data.map((kopi) => (
          <div className="w-full max-w-sm shadow-sm flex flex-col items-center sm:basis-1/2">
            <Image
              className="w-[280px] h-[350px] object-cover rounded-lg"
              src={kopi.image}
              alt={kopi.name}
            />
            <div>
              <h5 className="font-Mitr text-xl text-center">{kopi.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
