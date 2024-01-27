"use client";
import React, { useState } from "react";

import { signIn } from "next-auth/react";

// Importing logos
import { logos } from "../../../../lib/logos";
import { notFound } from "next/navigation";
import Link from "next/link";
import { registerUser } from "lib/serverAction";

export default function Page({ params }) {
  const [authSuccessful, setAuthSuccessful] = useState("default");
  const [loading, setLoading] = useState(false);

  // common states for signin and signup
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // states need for signup
  const [name, setName] = useState("");

  async function registerHandler() {
    const res = await registerUser(name, email, pass);
    if (!res) setAuthSuccessful((previous) => res);
    setLoading((previous) => !previous);
    if (res) signIn("credentials", { email, pass, callbackUrl: "/" });
  }

  const { auth } = params;
  if (auth !== "signin" && auth !== "signup") {
    return notFound();
  }
  return (
    <section className="bg-gray-50 px-6 mx-auto h-screen pt-11">
      <div className="flex flex-col items-center justify-center ">
        <div className="-ml-12">{logos.siteLogo}</div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              {auth === "signin" ? "Sign In" : "Sign Up"}
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center min-h-[200px] bg-gray-100 px-4 pb-10 pt-4">
            {/* Credential provider */}
            <div className="">
              {!authSuccessful && (
                <p className="text-red-500 text-center">
                  Something Went Wrong!
                </p>
              )}
              {auth === "signup" && (
                <input
                  value={name}
                  onChange={(e) => {
                    e.preventDefault();
                    setName((previous) => e.target.value);
                  }}
                  type="text"
                  required
                  className="px-5 py-2 rounded-t-md border-b-blue-400 border-b-4 w-full my-2 focus:border-b-blue-600 focus:outline-none"
                  placeholder="Saqib Tanveer"
                />
              )}
              <input
                value={email}
                onChange={(e) => {
                  e.preventDefault();
                  setEmail((previous) => e.target.value);
                }}
                type="email"
                required
                className="px-5 py-2 rounded-t-md border-b-blue-400 border-b-4 w-full my-2 focus:border-b-blue-600 focus:outline-none"
                placeholder="example@gmail.com"
              />
              <input
                value={pass}
                onChange={(e) => {
                  e.preventDefault();
                  setPass((previous) => e.target.value);
                }}
                type="password"
                required
                className="px-5 py-2 rounded-t-md border-b-blue-400 border-b-4 w-full my-2 focus:border-b-blue-600 focus:outline-none"
                placeholder="Your Password"
              />
            </div>
            <button
              className="bg-blue-600 text-white w-full py-3 rounded-md my-4 flex items-center justify-center"
              onClick={async (e) => {
                e.preventDefault();
                setLoading((previous) => !previous);
                auth === "signup"
                  ? registerHandler()
                  : signIn("credentials", {
                      email,
                      pass,
                      callbackUrl: "/",
                    });
              }}
            >
              {loading && logos.circleLoader()}
              {!loading && (auth === "signin" ? "Sign In" : "Sign Up")}
            </button>

            <p className="mb-2">OR</p>

            {/* Google provider */}
            <button
              className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 w-full justify-center"
              onClick={() => signIn("google")}
            >
              {logos.google()}
              <span>Continue with Google</span>
            </button>

            {
              <p className="my-4 text-gray-500">
                {auth === "signup"
                  ? "Already have an account "
                  : "Have no account "}
                <Link
                  href={auth === "signup" ? "/auth/signin" : "/auth/signup"}
                  className="text-red-500"
                >
                  {auth === "signup" ? "Sign In" : "Sign Up"}
                </Link>
              </p>
            }
          </div>
        </div>
      </div>
    </section>
  );
}
