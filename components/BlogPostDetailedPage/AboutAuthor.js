import React from "react";
import Image from "next/image";

// icons
import { logos } from "../../lib/logos";
import FollowBtn from "@components/Author/FollowBtn";
import SocialMediaLinks from "@components/Author/SocialMediaLinks";
import FollowersFollowing from "@components/Author/FollowersFollowing";
import SeeMoreBtn from "@components/SeeMoreBtn";

export default function AboutAuthor({
  name,
  username,
  image,
  bio,
  socialLinks,
  followers,
  following,
  authorId,
  userId,
}) {
  return (
    <div id="author-card" className="flex flex-col items-center xl:px-0">
      <h2 className="text-xl font-semibold border-l-4 border-gray-800 pl-2 text-gray-700 self-start mb-3">
        About Author
      </h2>
      <div>
        <Image
          src={image}
          alt="Author's Image"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div>
        <p
          id="author-name"
          className="text-2xl text-center font-medium my-4 text-gray-800"
        >
          {username ? username : name}
        </p>
        <p className="my-1 text-center font-medium mb-4 text-gray-800">{bio}</p>

        <FollowBtn authorId={authorId} userId={userId} />

        <FollowersFollowing followers={followers} following={following} />

        <SocialMediaLinks socialLinks={socialLinks} />

        <SeeMoreBtn link={`/authorprofile/${authorId}`} />
      </div>
    </div>
  );
}
