import React from "react";

import TextareaAutosize from "react-textarea-autosize";

export default function Description({ descriptionState, setDescriptionState }) {
  return (
    <div className="prose prose-stone lg:px-9 2xsm:px-10">
      <TextareaAutosize
        value={descriptionState}
        onChange={({ target }) => setDescriptionState(() => target.value)}
        placeholder="Meta Description"
        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-lg font-bold focus:outline-none"
      />
    </div>
  );
}
