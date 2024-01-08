import React from "react";

export default function FollowersFollowing({ followers, following }) {
  return (
    <div class="py-4 flex justify-center items-center w-full divide-x divide-gray-400 divide-solid">
      <span class="text-center px-2">
        <span class="font-bold text-gray-700">{followers.length}</span>
        <span class="text-gray-600"> followers</span>
      </span>
      <span class="text-center px-2">
        <span class="font-bold text-gray-700">{following.length}</span>
        <span class="text-gray-600"> following</span>
      </span>
    </div>
  );
}
