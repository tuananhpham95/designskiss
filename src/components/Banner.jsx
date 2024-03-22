import React, { useContext, useEffect, useState } from "react";
import { Modal, CartModal } from "./Modal";
import { AppContex } from "../Context/AppContext";
const imgData = {
  id: 1,
  images: [
    {
      id: 1,
      img: "/Rectangle1.png",
      name: "Image 1",
    },
    {
      id: 2,
      img: "/Rectangle2.png",
      name: "Image 2",
    },
    {
      id: 3,
      img: "/Rectangle3.png",
      name: "Image 3",
    },
    {
      id: 4,
      img: "/Rectangle4.png",
      name: "Image 4",
    },
  ],
};

const Banner = () => {
  const [showImage, setShowImage] = useState(imgData.images[0].img);
  const [showCartModal, setShowCartModal] = useState(false);
  /* const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");  */
  /* const [quantity, setQuantity] = useState(0) */
  /*const [price, setPrice] = useState(0); */
  const {
    quantity,
    price,
    setPrice,
    setQuantity,
    popupImage,
    setPopupImage,
    showPopup,
    setShowPopup,
  } = useContext(AppContex);

  const getImg = (img) => {
    setShowImage(img);
  };
  const togglePopUpImage = () => {
    setPopupImage(showImage);
    setShowPopup(!showPopup);
  };
  const selectImage = (img) => {
    setShowImage(img);
    setPopupImage(img);
  };
  const totalCost = quantity * 125;
  setPrice(totalCost);

  const increase = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleClickCart = () => {
    setPrice(totalCost);
    toggleCartModal();
  };
  return (
    <div className="relative max-w-[1440px] mx-auto mt-[174px] flex gap-[125px]">
      <div className="w-[445px] h-[565px] ml-[49px]">
        <div>
          <img
            className="w-[445px] h-[445px] rounded-[15px]"
            src={showImage}
            alt="Rectangle"
            onClick={togglePopUpImage}
          />
        </div>
        <div>
          <ul className="flex gap-[31px] mt-[32px]">
            {imgData.images.map((item) => (
              <li className="w-[88px] h-[88px]" key={item.id}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={
                    showImage === item.img
                      ? "rounded-[15px] border-2 border-darkorange"
                      : ""
                  }
                  onClick={() => getImg(item.img)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {showPopup && (
        <Modal
          imageUrl={popupImage}
          togglePopUpImage={togglePopUpImage}
          images={imgData.images}
          showImagePopup={getImg}
          onSelectImages={selectImage}
        />
      )}
      <div className="flex-1 mr-[47px] mt-[152px]">
        <h1 className="text-darkorange font-bold text-13 leading-4 tracking-[2px]">
          Sneaker Company
        </h1>
        <h4 className="text-darkblue font-bold text-44 leading-[44px] mt-[48px]">
          Fall Limited Edition Sneakers
        </h4>
        <h1 className="text-grey mt-[32px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </h1>
        <div className="flex gap-[31px] mt-[28px]">
          <span className="w-[99px] h-[35px] font-bold text-28">$125.00</span>
          <div className="w-[51px] h-[27px] rounded-md bg-[#FFEEE2]">
            <span className="text-darkorange font-bold text-16px leading-[19.84px] w-[32px] h-[20px] mt-[7px] ml-[8px]">
              50%
            </span>
          </div>
        </div>
        <div className="mt-[3px] w-[60px] h-[26px]">
          <span className="line-through leading-[19.84px] text-[#B6BCC8] font-bold text-16">
            $250.00
          </span>
        </div>
        <div className="flex gap-[16px] mt-[32px]">
          <div className="flex justify-around items-center w-[157px] h-[56px] rounded-[10px] bg-[#F6F8FD]">
            <div
              className="text-darkorange text-28 cursor-pointer"
              onClick={decrease}
            >
              -
            </div>

            <div className="font-bold">{quantity}</div>

            <div
              className="text-darkorange text-28 cursor-pointer"
              onClick={increase}
            >
              +
            </div>
          </div>
          <button
            onClick={handleClickCart}
            className=" relative  w-[272px] h-[56px] bg-darkorange rounded-[10px] text-[#FFFFFF]"
          >
            <img
              className="absolute left-[77px] top-[20px] text-[#FFFFFF]"
              src="./Shape.png"
              alt="Shape"
            />{" "}
            <p className="absolute left-[110px] top-[23px]">Add to card</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
