import { createContext, useState } from "react";

export const AppContex = createContext();

export const AppProvider = ({ children }) => {
  const [showImage, setShowImage] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [popupImage, setPopupImage] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  return (
    <AppContex.Provider
      value={{
        quantity,
        price,
        setPrice,
        setQuantity,
        popupImage,
        setPopupImage,
        showPopup,
        setShowPopup,
        showImage,
        setShowImage,
      }}
    >
      {children}
    </AppContex.Provider>
  );
};
