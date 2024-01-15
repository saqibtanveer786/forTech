import React from "react";
import Image from "next/image";

import { getAuthSession } from "../../../../lib/auth";
import UserImage from "@components/User/UserImage";
import EditProfileModal from "@components/User/EditProfileModal";
import EditProfileBtn from "@components/User/EditProfileBtn";

export const metadata = {
  title: "forTech-Profile",
  description: "User's profile details on forTech",
};

export default async function page() {
  const session = await getAuthSession();
  console.log(session);
  return (
    <>
      <EditProfileModal
        userId={session?.user?.id}
        name={
          session?.user?.username
            ? session?.user?.username
            : session?.user?.name
        }
        email={session?.user?.email}
      />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default">
        {/* Background Image */}
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src={"/images/cover/cover-01.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width={970}
            height={260}
          />
        </div>

        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          {/* User Image */}
          <UserImage id={session?.user?.id} image={session?.user?.image} />

          <div className="mt-4">
            {/* Name */}
            <h3 className="mb-1.5 text-2xl font-semibold text-black">
              {session?.user?.username
                ? session?.user?.username
                : session?.user?.name}
            </h3>

            {/* Email */}
            <p className="font-medium">{session?.user?.email}</p>
          </div>
        </div>

        <EditProfileBtn />
      </div>
    </>
  );
}
