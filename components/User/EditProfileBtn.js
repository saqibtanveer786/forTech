"use client";
import { OtherStates } from "lib/context";
import React, { useContext } from "react";

export default function EditProfileBtn() {
  const { isEditProfileModalOpen, setEditProfileModalOpen } =
    useContext(OtherStates);
  return (
    <button
      className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white absolute bottom-3 right-3"
      onClick={() => setEditProfileModalOpen((previous) => !previous)}
    >
      Edit
    </button>
  );
}
