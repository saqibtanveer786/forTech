"use client";
import { UploadButton } from "@uploadthing/react";
import { changeUserData, changeUserImage } from "lib/serverAction";
import Image from "next/image";
import React, { useState } from "react";
import { BiSolidCamera } from "react-icons/bi";

export default function UserImage({ id, image }) {
  const [imageState, setImageState] = useState(image);
  return (
    <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full p-1 sm:h-44 sm:max-w-44 sm:p-3">
      <div className="relative drop-shadow-2">
        <Image src={imageState} width={160} height={160} alt="profile pic" />
        <BiSolidCamera
          className="fill-white absolute right-[17px] bottom-[15px] z-9"
          size={20}
        />
        <UploadButton
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            setImageState(() => res[0].url);
            changeUserData(id, res[0].url, null, null);
          }}
          onUploadError={(error) => {
            alert(`ERROR! ${error}`);
          }}
          className="ut-allowed-content:text-transparent absolute -right-2 -bottom-5 ut-button:w-10 ut-button:rounded-full ut-button:h-10 ut-button:mt-4 ut-button:text-transparent  ut-button:text-xs"
        />
      </div>
    </div>
  );
}
