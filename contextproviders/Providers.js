"use client";
import React from "react";

import AlertContextProvider from "./AlertContextProvider";
import LoadingContextProvider from "./LoadingContextProvider ";
import CommentModalContextProvider from "./CommentModalContextProvider";
import OtherStatesContextProvider from "./OtherStatesContextProvider";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
  return (
    <LoadingContextProvider>
      <AlertContextProvider>
        <CommentModalContextProvider>
          <SessionProvider>
            <OtherStatesContextProvider>{children}</OtherStatesContextProvider>
          </SessionProvider>
        </CommentModalContextProvider>
      </AlertContextProvider>
    </LoadingContextProvider>
  );
}
