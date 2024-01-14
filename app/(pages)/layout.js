import React from "react";
import "@uploadthing/react/styles.css";

import Providers from "../../contextproviders/Providers";
import Loader from "../../components/Loader";
import Toast from "../../components/Toast";
import FloatChat from "../../components/FloatChat";
import CommentUpModal from "../../components/BlogPostDetailedPage/CommentUpModal";

import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export default async function PagesLayout({ children }) {
  const session = await getServerSession(authOptions);
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto relative">
        <Providers>
          <Loader />
          {children}
          {session && <FloatChat />}
          <Toast session={session} />
          <CommentUpModal />
        </Providers>
      </div>
    </div>
  );
}
