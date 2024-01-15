"use client";
import React, { useState } from "react";

// Importing context
import { OtherStates } from "../lib/context";

export default function OtherStatesContextProvider({ children }) {
  const [currentCommentGettingUpdated, setCurrentCommentGettingUpdated] =
    useState("");
  const [searchedBlogs, setSearchedBlogs] = useState();
  const [isEditProfileModalOpen, setEditProfileModalOpen] = useState(false);
  return (
    <OtherStates.Provider
      value={{
        currentCommentGettingUpdated,
        setCurrentCommentGettingUpdated,
        searchedBlogs,
        setSearchedBlogs,
        isEditProfileModalOpen,
        setEditProfileModalOpen,
      }}
    >
      {children}
    </OtherStates.Provider>
  );
}
