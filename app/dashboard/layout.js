import React from "react";
import "./style.css";
import "./data-tables-css.css";
import "./satoshi.css";

import Header from "../../components/DashboardHeader";

import Providers from "../../contextproviders/Providers";

export default function DashboardLayout({
  children,
}) {

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Providers>
            <Header />
            <main>
              <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                {children}
              </div>
            </main>
          </Providers>
        </div>
      </div>
    </>
  );
}
