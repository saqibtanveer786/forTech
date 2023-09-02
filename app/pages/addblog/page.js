'use client';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
// Importing editor
import 'react-quill/dist/quill.snow.css'; // Import the styles

// Importing serverActions
import { pusblishBlog } from '../../../serverActions/serverAction'

export default function Addblog(pl) {
  const [data, setData] = useState();
  const [content, setContent] = useState('');
  const [imageFile, setImageFile] = useState();


  // Function for getting input fields data
  function getData(e) {
    // e.preventDefault();
    // if (e.target.name === 'image') {
    //   setData({ ...data, image: e.target.files[0] })
    //   return
    // }
    // setData({ ...data, [e.target.name]: e.target.value });
    // console.log(data)
  }


  // Publish a blog
  async function pusblishBlog() {
    const url = 'http://localhost:3000/api/addblog';
    const response = await fetch(url, {
      cache: 'no-cache',
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: formData,
    });

    const jsonresponse = await response.json();
    console.log('responseis', jsonresponse)
  }

  // Uload image function
  async function uploadImage() {
    // const form = await document.getElementsByTagName("form")[0]
    // const ress = await fetch('http://localhost:3000/api/imageupload', {
    //   cache: 'no-cache',
    //   method: 'post',
    //   headers: {
    //     'Content-Type': `multipart/form-data; boundary=${formD._boundary}`,
    //   },
    //   body: formD,
    // })

    const file = document.getElementsByName("image")[0].files[0]
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = async function () {
      const base64Image = reader.result.split(',')[1]; // Extract the Base64 data

      // Send the Base64 image to your Next.js API route
      const response = await fetch('http://localhost:3000/api/imageupload', {
        cache: 'no-cache',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64Image }),
      });

      // Handle the API response
    };
  }

  return (
    <>
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

      <form action="">
        <input
          type="file"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6"
          placeholder='Front Image'
          autoComplete='off'
          required
          name='image'
        // onChange={(e) => {
        //   e.preventDefault()
        //   uploadImage(e.target)
        // }}
        />
        <input type='submit' placeholder='submit' onClick={e => {
          e.preventDefault()
          uploadImage()
        }} />
      </form>
      <JoditEditor
        value={content}
        tabIndex={1}
        onChange={setContent}
      />
      <div dangerouslySetInnerHTML={{ __html: content || '<p>This blog does not have content</p>' }} ></div>
      <button
        onClick={pusblishBlog}
        type="submit"
        className="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Publish</button>
    </>
  );
}
