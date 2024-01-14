import React from "react";
import TextareaAutosize from "react-textarea-autosize";

export default function Title({ titleState, setTitleState }) {
  return (
    <div className="prose prose-stone lg:px-9 2xsm:px-10">
      <TextareaAutosize
        value={titleState}
        onChange={({ target }) => setTitleState(() => target.value)}
        placeholder="Title"
        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
      />
    </div>
  );
}
