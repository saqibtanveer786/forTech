import React from "react";

export default function AuthorExperience({ experienceData }) {
  return (
    <div className="flex flex-col items-start md:pl-[20%] justify-start gap-5">
      <div className="border-b border-stroke py-4">
        <h3 className="font-medium text-black">Experience</h3>
      </div>
      <p className="">
        <span className="text-gray-500"> company: </span>
        {experienceData?.company}
      </p>

      <p className="">
        <span className="text-gray-500"> position: </span>
        {experienceData?.position}
      </p>

      <p className="">
        <span className="text-gray-500"> description: </span>
        {experienceData?.description}
      </p>

      <p className="">
        <span className="text-gray-500"> started At: </span>
        {experienceData?.startDate}
      </p>

      <p className="">
        <span className="text-gray-500"> Ended At: </span>
        {experienceData?.endDate}
      </p>
    </div>
  );
}
