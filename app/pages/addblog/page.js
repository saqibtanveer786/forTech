'use client';
import React, { useState, useRef, useMemo } from 'react';

// Importing editor
import JoditEditor from 'jodit-react';

// Importing components
import Alert from '../../../components/Alert'
import Loader from '../../../components/Loader'

// Importing serverActions
import { pusblishBlog } from '../../../lib/serverAction'

export default function Addblog() {
  const [data, setData] = useState();
  const [content, setContent] = useState('');
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertStatus, setAlertStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Function for getting input fields data
  async function getData(e) {
    e.preventDefault();
    // In case of image file
    if (e.target.name === 'image') {
      // Reading file with FileReader()
      const file = document.getElementsByName("image")[0].files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file)
      let base64Image
      reader.onload = async function () {
        base64Image = await reader.result.split(',')[1]; // Extract the Base64 data
        setData({ ...data, image: base64Image })
      }
      return
    }

    // In case of other data
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function resetInputFields() {
    setData({})
    setContent('')
  }

  return (
    <>
      <Alert show={showAlert} message={alertMessage} status={alertStatus} setShow={setShowAlert} />
      <Loader isLoading={isLoading} />
      <section className='w-[90%] mx-auto my-14'>
        <h1 className='text-2xl font-bold'>Add Blog</h1>
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
          type="file"
          id="base-input"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 my-6"
          placeholder='Front Image'
          autoComplete='off'
          required
          name='image'
          onChange={getData}
        />
        <JoditEditor
          value={content}
          tabIndex={1}
          onChange={setContent}
        />
        <button
          onClick={async (e) => {
            e.preventDefault()
            setIsLoading(true)
            const response = await pusblishBlog(data, content)
            if (response.status) {       //Incase of success
              setIsLoading(false);
              setShowAlert(true);
              setAlertStatus("Success");
              setAlertMessage(response.message);
              resetInputFields()
            }
            if (!response.status) {      //Incase of error
              setIsLoading(false);
              setShowAlert(true);
              setAlertStatus("Error");
              setAlertMessage(response.message);
            }
          }}
          type="submit"
          className="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Publish</button>
      </section>
    </>
  );
}
