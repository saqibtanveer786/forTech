import React from "react";

import Header from '../../components/Header'
import Providers from '../../contextproviders/Providers'
import Loader from "../../components/Loader";
import Toast from "../../components/Toast";
import FloatChat from "../../components/FloatChat";
import CommentUpModal from "../../components/CommentUpModal";

import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";

export default async function PagesLayout({
    children,
}) {
    const session = await getServerSession(authOptions)
    return (
        <>
            <div className='max-w-7xl mx-auto relative'>
                <Providers>
                    <Header session={session} />
                    <Loader />
                    {children}
                    {session && <FloatChat />}
                    <Toast session={session} />
                    <CommentUpModal />
                </Providers>
            </div>
        </>
    );
}
