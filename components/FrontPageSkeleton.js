import React from 'react'

export default function FrontPageSkeleton() {
    return (
        <>
            {/* top section */}
            <section className='h-96 w-full bg-gray-200'>
            </section>

            {/* featured post */}
            <section >
                <div className="col-span-full h-12 w-20 mb-8 bg-gray-100 ml-24 my-4"></div>
                <div className='mx-2'>

                    <div className="flex flex-col items-center md:flex-row md:items-start border rounded-lg gap-4 h-auto p-4 my-6 w-fit mx-auto relative">


                        <div className="w-[300px] h-[200px] relative bg-gray-100">
                        </div>
                        <div>
                            <div className='w-[300px] lg:w-[450px] h-5 bg-gray-200 mt-3'>
                            </div>
                            <div className='w-[200px] lg:w-[350px] h-5 bg-gray-200 mt-3'>
                            </div>
                        </div>
                    </div>
                </div >
            </section>
        </>
    )
}
