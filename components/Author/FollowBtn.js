"use client";
import { host } from "constants/common";
import { logos } from "lib/logos";
import React, { useEffect, useState } from "react";

export default function FollowBtn({ authorId, userId }) {
  const url = `${host}/api/follow`;
  const [isLoading, setIsLoading] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    async function funcToCall() {
      const response = await fetch(url, {
        cache: "no-store",
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ authorId, userId }),
      });
      const jsonResponse = await response.json();
      console.log("is followign", jsonResponse);
      setIsFollowing(() => jsonResponse);
    }

    funcToCall();
  }, []);
  
  async function followOrUnfollowAuther() {
    setIsLoading((pre) => !pre);
    const response = await fetch(url, {
      cache: "no-store",
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ authorId, userId }),
    });
    setIsLoading((pre) => !pre);
    const jsonResponse = await response.json();
    setIsFollowing(() => jsonResponse.status);
  }
  
  return (
    <button
    onClick={followOrUnfollowAuther}
    className="w-[100%] mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 flex items-center justify-center"
    >
      {!isLoading && (isFollowing === true ? "UnFollow" : "Follow")}
      {isLoading && logos.circleLoader()}
    </button>
  );
}
