import React from 'react';

export default function TopSection() {
  return (
    <section className="bg-gray-900" style={{ background: 'linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(9,9,118,1) 13%, rgba(0,212,255,1) 100%, rgba(2,0,36,1) 100%)' }}>
      <div className="flex h-96 flex-col items-center justify-center md:flex-row p-4 gap:4">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-xl md:text-4xl text-gray-200 font-semibold ">Welcome To /forTech</h1>
          <p className="my-4 text-xl md:text-lg text-gray-400">
            This blog is for the content related to Tech.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 my-4 w-full">
            <button className=" text-lg flex gap-2 items-center justify-center w-full md:w-48 h-12 hover:bg-blue-700 bg-blue-600 rounded-full  text-gray-50 focus:outline-none" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              All Post
            </button>
            <button className="flex gap-2 text-lg items-center justify-center w-full md:w-48 h-12  hover:bg-blue-700 bg-blue-600 rounded-full text-gray-50 focus:outline-none" >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
