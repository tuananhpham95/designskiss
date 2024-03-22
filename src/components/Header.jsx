import React, { useContext, useState } from "react";
import { CartModal } from "./Modal";
import { AppContex } from "../Context/AppContext";

const navBarData = [
  {
    title: "Collections",
    link: "#",
  },
  {
    title: "Men",
    link: "#",
  },
  {
    title: "Women",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
];
const Header = () => {
  const { quantity } = useContext(AppContex);
  const [showCartModal, setShowCartModal] = useState(false);
  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };
  return (
    <nav className="relative h-[112px] max-w-[1440px] mx-auto ">
      <div className="flex items-center h-full gap-[48.5px]">
        <div>
          <img src="/sneakers.png" alt="sneaker" />
        </div>
        <div>
          <ul className="flex gap-[33px] relative">
            {navBarData.map((item) => (
              <li key={item.title}>
                <a className="text-grey hover:text-[#1D2026]" href={item.link}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={toggleCartModal}
          className=" absolute top-[40px] left-[1166px] w-[19px] h-[13px] rounded-[6.5px] bg-darkorange z-[1]"
        >
          <p className="w-[7px] h-[10px]">{quantity}</p>
        </div>
        {showCartModal && <CartModal />}
        <img
          className="absolute left-[1157px] w-[21.82px] h-[20px] top-[44px]"
          src="/Shape.png"
          alt="shape"
        />
        <img
          className="w-[50px] h-[50px] absolute left-[1225px]"
          src="/Oval.png"
          alt="Oval"
        />
      </div>
    </nav>
  );
};

export default Header;
