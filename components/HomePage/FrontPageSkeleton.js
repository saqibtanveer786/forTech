import React from 'react'

export default function FrontPageSkeleton() {
    return (
        <>
            {/* top section */}
            <section className='h-96 w-full bg-gray-200 max-w-7xl mx-auto'>
            </section>

            {/* featured post */}
            <section className='max-w-7xl mx-auto'>
                <div className="col-span-full h-12 w-20 mb-8 bg-gray-100 md:ml-24 my-4"></div>
                <div className='mx-2'>

                    <div className="flex flex-row items-center md:flex-row md:items-start border rounded-lg gap-4 h-auto p-4 my-6 w-fit mx-auto relative">


                        <div className="w-[300px] h-[200px] relative bg-gray-100">
                        </div>
                        <div className='self-start'>
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
