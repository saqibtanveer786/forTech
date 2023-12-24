import Image from "next/image";


const TableOne = ({ posts }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 sm:pb-1 h-115 overflow-y-auto">
      <h4 className="mb-6 text-xl font-semibold text-black">
        Top Posts
      </h4>

      <div className="h-16 w-full flex border-b-4">
        <div className="w-[15%] flex items-center justify-center">
          <h2 className="text-xl font-bold text-black">Img</h2>
        </div>
        <div className="w-[30%] flex items-center justify-center">
          <h2 className="text-xl font-bold text-black">Title</h2>
        </div>
        <div className="w-[20%] flex items-center justify-center">
          <h2 className="text-xl font-bold text-black">Likes</h2>
        </div>
        <div className="w-[20%] flex items-center justify-center">
          <h2 className="text-xl font-bold text-black">Dislikes</h2>
        </div>
        <div className="w-[20%] flex items-center justify-center">
          <h2 className="text-xl font-bold text-black">Comments</h2>
        </div>

      </div>

      <div className="flex flex-col">

        {posts.map((post, key) => (
          <div className=" h-16 w-full flex border-b-2" key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:py-4 w-[15%]">
              <div className="flex-shrink-0">
                <Image src={post.image} alt="Brand" width={48} height={48} />
              </div>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:py-4 w-[30%]">
              <p className="text-black">{post.title.substr(0, 10)} ....</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:py-4 w-[20%]">
              <p className="text-meta-3">{post.votes.length}</p>
            </div>

            <div className="items-center justify-center p-2.5 xl:py-4 w-[20%] sm:flex">
              <p className="text-black">{post.votes.length}</p>
            </div>

            <div className="items-center justify-center p-2.5 xl:py-4 w-[20%] sm:flex">
              <p className="text-meta-5">{post.comments.length}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
