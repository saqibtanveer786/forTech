"use client";
import React, { useContext, useRef, useState } from "react";
import { OtherStates } from "lib/context";
import { logos } from "lib/logos";
import { changeUserData } from "lib/serverAction";
import { useRouter } from "next/navigation";

export default function EditProfileModal({ userId, name, email }) {
  const [isLoading, setIsLoading] = useState(false);
  const { isEditProfileModalOpen, setEditProfileModalOpen } =
    useContext(OtherStates);

  const nameRef = useRef();
  const emailRef = useRef();

  const router = useRouter();

  if (!isEditProfileModalOpen) return null;
  return (
    <div className="absolute top-5 lg:top-20 left-[20%] right-[20%] border z-999999 flex flex-col gap-3 py-7 px-5 bg-white rounded-md shadow-4">
      <input
        type="text"
        ref={nameRef}
        className="py-2 px-3 text-gray-700 border focus:outline-none focus:border-blue-600 rounded-md border-gray-500"
        placeholder={name}
      />
      <button
        className="bg-blue-700 text-white px-3 py-2 hover:bg-blue-800 rounded-md flex items-center justify-center"
        onClick={async (e) => {
          e.preventDefault();
          setIsLoading((previous) => !previous);
          console.log("working");
          try {
            const response = await changeUserData(
              userId,
              null,
              nameRef.current.value
            );
          } catch (error) {
            console.log(error);
          } finally {
            setIsLoading((previous) => !previous);
            setEditProfileModalOpen(false);
            router.refresh();
          }
        }}
      >
        {isLoading ? logos.circleLoader() : "save"}
      </button>
    </div>
  );
}
