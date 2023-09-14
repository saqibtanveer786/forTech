"use client"
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';

// Importing the context
import { MyContext } from '../lib/MyContext';

// Importing from next
import Image from 'next/image';
import Link from 'next/link';

// Importing react icons
import { MdDeleteOutline } from 'react-icons/md';
import { RxUpdate } from 'react-icons/rx';

// Import server action
import { deletePost } from '../lib/serverAction';

// Importing components
import Loader from './Loader';

export default function Post({ blog }) {
  // const [showAlert, setShowAlert] = useState(false)
  // const [alertMessage, setAlertMessage] = useState('')
  // const [alertStatus, setAlertStatus] = useState('')
  // const [isLoading, setIsLoading] = useState(false)

  // consuming context
  const { showAlert, setShowAlert, alertMessage, setAlertMessage, alertStatus, setAlertStatus, isLoading, setIsLoading } = useContext(MyContext)

  const router = useRouter()

  const immage = Buffer.from(blog.image.data).toString('base64')

  return (
    <>
      <div className='mx-2 relative'>
        <Loader isLoading={isLoading} className={'top-[-135px] left-0 bg-transparent z-40'} />

        <div className="flex flex-col items-center md:flex-row md:items-start border rounded-lg gap-4 h-auto p-4 my-6 w-fit mx-auto relative">

          <div className='absolute bottom-2 right-2'>   {/* update and delete icons */}
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
          </div>

          <div className="w-[300px] h-[200px] relative ">          {/* Image Col */}
            <Image src={`data:image/jpeg;base64,${immage}`} alt='placeholder image' fill={'cover'} />
          </div>

          <div className='w-[300px] lg:w-[450px]'>        {/* Title Col */}
            <Link href={`/pages/${blog.id}`}>
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
