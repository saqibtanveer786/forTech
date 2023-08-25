'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function BlogBriefDescription({ blog }) {
  const router = useRouter();
  async function deleting() {
    const url = `http://localhost:3000/api/deleteblog?slug=${blog.slug}`;
    const response = await fetch(url, {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
      },
    });
    if (response.ok) {
      router.refresh();
    }
  }
  return (
    <>
      <div className="grid lg:grid-cols-2 border rounded-lg gap-4 h-auto p-4 max-w-7xl mx-auto">
        <div className="max-w-2xl  h-auto  flex items-center relative ">
          <img src="img/aaa.png" className="w-full h-auto" alt="placeholder img" />
          <div className="bg-blue-400  w-24 pt-1  h-8 text-gray-50 font-semibold text-center absolute top-0">
            Javascript
          </div>
        </div>
        <div className="">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 cursor-pointer ">How to create tailwind Template</h3>
          <div className="flex gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div className="text-sm text-gray-600">
              <h4>By Sarthak Kaushik</h4>
              <h4>Updated over 2 weeks ago</h4>
            </div>
          </div>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit dolores aspernatur doloremque quis neque quo cupiditate id obcaecati qui. Magnam magni natus voluptas laboriosam ad iste, praesentium explicabo aliquid?</p>
          <button className="py-2 border px-4 w-full bg-blue-500 text-gray-50 rounded-lg mt-3 outline-none focus:outline-none hover:bg-blue-600 hover:text-gray-100" style={{ background: 'linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(9,9,118,1) 13%, rgba(0,212,255,1) 100%, rgba(2,0,36,1) 100%)' }}>Read More</button>
        </div>
      </div>
    </>
  );
}
