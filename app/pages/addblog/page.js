'use client';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
// Importing editor
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles

// Importing serverActions
import { pusblishBlog } from '../../../serverActions/serverAction'

export default function Addblog(pl) {
  const [data, setData] = useState(); const editor = useRef(null);
  const [content, setContent] = useState('');


  // Function for getting input fields data
  function getData(e) {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  }

  // Editor Options
  // const modules = {
  //   toolbar: [
  //     [{ 'header': '1' }, { 'font': [] }],
  //     [{ 'list': 'ordered' }, { 'list': 'bullet' }],
  //     [{ 'align': 'left' }, { align: 'center' }, { 'align': 'right' }],
  //     ['bold', 'italic', 'underline'],
  //     ['blockquote', 'code-block'],
  //     ['link', 'image'], // Include the image button
  //     [{ 'color': [], 'background': [] }],
  //     ['clean']
  //   ],
  // };

  return (
    <>
      <form action={(e) => { pusblishBlog(data, content) }} className='max-w-7xl mx-auto mt-24'>
        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6"
          placeholder='Title'
          autoComplete='off'
          required
          name='title'
          onChange={getData}
        />

        <input
          type="text"
          id="large-input"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 my-6"
          placeholder='Brief Description'
          autoComplete='off'
          required
          name='briefdescription'
          onChange={getData}
        />

        <input
          type="text"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6"
          placeholder='slug'
          autoComplete='off'
          required
          name='slug'
          onChange={getData}
        />
        <>
          {/* <ReactQuill
            theme='snow'
            value={content}
            name='content'
            onChange={setContent}
            modules={modules}
          /> */}<JoditEditor
            value={content}
            tabIndex={1}
            onChange={setContent}
          />
          <div dangerouslySetInnerHTML={{ __html: content || '<p>This blog does not have content</p>' }} ></div>
        </>
        <button
          type="submit"
          className="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Publish</button>
      </form>
    </>
  );
}
