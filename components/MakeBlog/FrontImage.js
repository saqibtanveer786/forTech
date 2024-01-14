import { UploadDropzone } from "@uploadthing/react";
import Image from "next/image";
import React from "react";

export default function FrontImage({ imageState, setImageState }) {
  return (
    <div className="w-11/12 mx-auto lg:max-w-7xl grid place-items-center">
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          setImageState(() => res[0].url);
        }}
        onUploadError={(error) => {
          alert(`ERROR! ${error}`);
        }}
        className={`w-11/12 mx-auto lg:w-[700px] ${imageState ? "hidden" : ""}`}
      />
      <Image
        src={imageState || "/img/general.webp"}
        alt="Image"
        width={700}
        height={700}
        className={`mb-3 ${imageState ? "" : "hidden"}`}
      />
    </div>
  );
}
