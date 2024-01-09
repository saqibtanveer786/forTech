"use client";
import { createContext } from "react";

const LoadingContext = createContext("");
const AlertContext = createContext("");
const CommentModal = createContext();
const OtherStates = createContext();

export { LoadingContext, AlertContext, CommentModal, OtherStates };
