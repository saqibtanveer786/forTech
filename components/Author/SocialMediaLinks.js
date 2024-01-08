import React from "react";
// react icons
import { PiTwitterLogoBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function SocialMediaLinks({ socialLinks }) {
  return (
    <div className="flex w-full justify-center gap-4">
      {socialLinks && socialLinks.twitter && (
        <Link
          href={`https://${socialLinks?.twitter}`}
          className="p-3 bg-gray-300 rounded-full text-primary hover:bg-gray-200"
        >
          <PiTwitterLogoBold size={30} />
        </Link>
      )}

      {socialLinks && socialLinks.facebook && (
        <Link
          href={`https://${socialLinks?.twitter}`}
          className="p-3 bg-gray-300 rounded-full text-primary hover:bg-gray-200"
        >
          <FaFacebookF size={30} />
        </Link>
      )}

      {socialLinks && socialLinks.linkdin && (
        <Link
          href={`https://${socialLinks?.twitter}`}
          className="p-3 bg-gray-300 rounded-full text-primary hover:bg-gray-200"
        >
          <FaLinkedinIn size={30} />
        </Link>
      )}
    </div>
  );
}
