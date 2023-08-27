"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
function Editor() {
    const [content, setContent] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': ['1', '2', '3', '4', '5', '6'] }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline'],
            ['blockquote', 'code-block'],
            ['link', 'image'], // Include the image button
            [{ 'color': [], 'background': [] }],
            ['clean']
        ],
    };

    return (
        <>
            <ReactQuill
                theme='snow'
                value={content}
                onChange={setContent}
                modules={modules}
            />
            {console.log(content)}
        </>
    );
}

export default Editor;
