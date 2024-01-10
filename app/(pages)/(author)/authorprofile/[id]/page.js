import React from "react";
import Image from "next/image";

import { getAuthSession } from "../../../../../lib/auth";
import { getAuthorsData } from "lib/serverAction";
import FollowersFollowing from "@components/Author/FollowersFollowing";
import FollowBtn from "@components/Author/FollowBtn";
import AuthorExperience from "@components/Author/AuthorExperience";
import AuthorEducation from "@components/Author/AuthorEducation";
import SocialMediaLinks from "@components/Author/SocialMediaLinks";

export const metadata = {
  title: "Author-Profile",
  description: "Author's profile details on forTech",
};

export default async function page({ params }) {
  const { user } = await getAuthSession();
  const data = await getAuthorsData(params?.id);

  console.log(data);

  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow">
        <div className="grid grid-cols-1 gap-35 md:gap-0 md:grid-cols-3">
          <FollowersFollowing
            followers={data?.following}
            following={data?.autherProfile?.followers}
          />

          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <Image
                src={data.image}
                alt="Authors Image"
                height={100}
                width={100}
              />
            </div>
          </div>

          <FollowBtn authorId={params?.id} userId={user?.id} />
        </div>

        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-3 md:mt-19">
          {/* about experience */}
          <AuthorExperience experienceData={data.autherProfile.experience[0]} />
          {/* about education */}
          {/* personal info */}
          <div className="text-center border-b pb-12">
            <div className="border-b border-stroke py-4">
              <h3 className="font-medium text-black">Presonal Info</h3>
            </div>
            <h1 className="text-4xl font-medium text-gray-700">{data.name}</h1>
            <p className="font-light text-gray-600 ">{data?.email}</p>
            <p className="font-light text-gray-600 my-4">
              {data?.autherProfile?.location}
            </p>
            <p className="my-6 text-center font-medium text-gray-800">
              <span className="text-gray-500">Bio: </span>
              {data?.autherProfile?.bio}
            </p>
            <SocialMediaLinks socialLinks={data?.autherProfile?.socialLinks} />
          </div>
          <AuthorEducation educationData={data.autherProfile.education[0]} />
        </div>

        {/* lower section */}
        <div className="mt-12 flex flex-col justify-center"></div>
      </div>
    </div>
  );
}
