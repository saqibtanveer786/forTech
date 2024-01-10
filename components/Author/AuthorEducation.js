import React from "react";

export default function AuthorEducation({ educationData }) {
  return (
    <div className="flex flex-col items-start md:pl-[20%] justify-start gap-5">
      <div className="border-b border-stroke py-4">
        <h3 className="font-medium text-black">Education</h3>
      </div>
      <p className="">
        <span className="text-gray-500"> institution: </span>
        {educationData?.institution}
      </p>

      <p className="">
        <span className="text-gray-500"> degree: </span>
        {educationData?.degree}
      </p>

      <p className="">
        <span className="text-gray-500"> field: </span>
        {educationData?.field}
      </p>

      <p className="">
        <span className="text-gray-500"> started At: </span>
        {educationData?.startYear}
      </p>

      <p className="">
        <span className="text-gray-500"> Ended At: </span>
        {educationData?.endYear}
      </p>
    </div>
  );
}
