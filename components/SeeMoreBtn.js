import Link from "next/link";
import React from "react";

export default function SeeMoreBtn({ link }) {
  return (
    <div className="w-full h-15 text-blue-700 flex justify-center items-center">
      <Link href={link}>see more ...</Link>
    </div>
  );
}
