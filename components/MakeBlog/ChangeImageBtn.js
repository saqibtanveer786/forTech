import React from "react";
// react icons
import { AiOutlinePlus } from "react-icons/ai";

export default function ChangeImageBtn({ setImageState }) {
  return (
    <AiOutlinePlus
      size={30}
      className="bg-black rounded-full text-white p-1 ml-0 sm:ml-8"
      onClick={(e) => {
        e.preventDefault();
        setImageState(false);
      }}
    />
  );
}
