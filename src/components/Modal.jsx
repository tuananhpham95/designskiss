import React, { useContext } from "react";
import { AppContex } from "../Context/AppContext";

export const Modal = ({
  imageUrl,
  togglePopUpImage,
  images,
  onSelectImages,
}) => {
  const handleImageSelect = (img) => {
    onSelectImages(img);
  };
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="w-[550px] h-[722px]">
        <div className="flex justify-end">
          <p className=" text-44 text-[#FF7E1B] " onClick={togglePopUpImage}>
            &times;
          </p>
        </div>
        <div>
          <img
            className="rounded-[15px] w-[550px] h-[550px]"
            src={imageUrl}
            alt="Popup"
          />
          <div>
            <ul className="flex gap-[31] justify-around mt-[40px]">
              {images.map((item) => (
                <li key={item.id}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`cursor-pointer w-[88px] h-[88px] ${
                      imageUrl === item.img
                        ? "rounded-[15px] border-2 border-darkorange"
                        : ""
                    }`}
                    onClick={() => handleImageSelect(item.img)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CartModal = () => {
  const { quantity, price, setQuantity, setPrice } = useContext(AppContex);
  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      const totalCost = quantity * 125;
      setPrice(totalCost);
    }
  };
  const isCartEmpty = quantity === 0;
  return (
    <div>
      {isCartEmpty ? (
        <div className=" w-[360px] h-[256px] rounded-[10px] bg-[#FFFFFF] absolute right-[87px] top-[80px] shadow-xl">
          <p className="text-grey">Cart</p>
          <div className="h-[1px] w-[360px] bg-darkblue mt-[20px] mb-[24px]"></div>
          <div className="flex justify-center items-center">
            <p className="text-[#69707D] font-bold">Your card is empry</p>
          </div>
        </div>
      ) : (
        <div className=" w-[360px] h-[256px] rounded-[10px] bg-[#FFFFFF] absolute right-[87px] top-[80px] shadow-xl">
          <p className="text-grey">Cart</p>
          <div className="h-[1px] w-[360px] bg-darkblue mt-[20px] mb-[24px]"></div>
          <div className="flex mb-[24px] gap-[20px] mr-[24px] ml-[24px]">
            <div>
              <img src="./Rectangle2.png" alt="" />
            </div>
            <div>
              <p className="text-grey">Fall Limited Edition Sneakers</p>
              <p className="text-grey">
                125 x <span>{quantity} </span>{" "}
                <span className="font-bold">${price}</span>
              </p>
            </div>
            <div onClick={decrease}>
              <p className="font-bold">X</p>
            </div>
          </div>
          <button className=" ml-[24px] mb-[32px] w-[312px] h-[56px] bg-darkorange rounded-[10px]">
            Check out
          </button>
        </div>
      )}
    </div>
  );
};
