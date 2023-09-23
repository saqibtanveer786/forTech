"use client"
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

// Importing the context
import { AlertContext, LoadingContext } from '../lib/context';

// Importing from next
import Image from 'next/image';
import Link from 'next/link';

// Importing react icons
import { MdDeleteOutline } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';

// Import server action
import { deletePost } from '../lib/serverAction';

export default function Post({ blog, session }) {

  const screenWidth = window.innerWidth
  // consuming context
  const { setShowAlert, setAlertMessage, setAlertStatus } = useContext(AlertContext)
  const { setIsLoading } = useContext(LoadingContext)

  const router = useRouter()

  // const immage = Buffer.from(blog.image.data).toString('base64')

  return (
    <>
      <div className='mx-2 relative'>

        <div className={`flex flex-${screenWidth >= 700 ? 'row' : 'col'} items-center border rounded-lg gap-4 h-auto p-4 my-6 w-fit mx-auto relative`}>

          {session && session.user.email === 'adward797@gmail.com' && <div className='absolute bottom-2 right-2'>   {/* update and delete icons */}
            <MdDeleteOutline
              size={25}
              style={{ marginBlock: '5px', cursor: 'pointer' }}
              onClick={async () => {
                setIsLoading(true);
                const response = await deletePost(blog.id)
                if (response.status) {       //Incase of success
                  setIsLoading(false);
                  setShowAlert(true);
                  setAlertStatus("success");
                  setAlertMessage(response.message);
                  router.refresh()
                }
                if (!response.status) {      //Incase of error
                  setIsLoading(false);
                  setShowAlert(true);
                  setAlertStatus("error");
                  setAlertMessage(response.message);
                }
              }}
            />
            <RxUpdate
              size={23}
              style={{ marginBlock: '5px', cursor: 'pointer' }} />
          </div>}

          <div className="w-[300px] h-[200px] relative ">          {/* Image Col */}
            <Image src={blog.image} alt='placeholder image' fill={'cover'} />
          </div>

          <div className='w-[300px] lg:w-[450px]'>        {/* Title Col */}
            <Link href={`/pages/${blog?.id}`}>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 cursor-pointer hover:underline">{blog?.title}</h3>
            </Link>
            {/* <div className="flex gap-2 mb-2 lg:justify-start">
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>
              <div className="text-sm text-gray-600">
                <h4>By Saqib Tanveer</h4>
                <h4>Updated over 2 weeks ago</h4>
              </div>
            </div> */}
            <p className="text-gray-700">{blog?.briefdescription}</p>
          </div>
        </div>
      </div >
    </>
  );
}
