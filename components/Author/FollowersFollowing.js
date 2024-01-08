import React from "react";

export default function FollowersFollowing({ followers, following }) {
  return (
    <div className="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
      <span className="text-center px-2">
        <span className="font-bold text-gray-700">{followers?.length}</span>
        <span className="text-gray-600"> followers</span>
      </span>
      <span className="text-center px-2">
        <span className="font-bold text-gray-700">{following?.length}</span>
        <span className="text-gray-600"> following</span>
      </span>
    </div>
  );
}
