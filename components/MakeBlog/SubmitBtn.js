import React from "react";

export default function SubmitBtn({ text, submitFormHandler }) {
  return (
    <div className="flex justify-end my-4">
      <button
        onClick={submitFormHandler}
        type="submit"
        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm w-full lg:w-auto px-5 py-2.5 text-center focus:outline-none `}
      >
        {text}
      </button>
    </div>
  );
}
