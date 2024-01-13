import React from "react";

export default function Nothing({ text }) {
  return (
    <div className="h-full w-full">
      <p className="text-3xl text-center pt-[20%]">{text}</p>
    </div>
  );
}
