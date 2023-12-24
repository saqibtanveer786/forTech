import Image from "next/image";

const brandData = [
  {
    logo: "/images/brand/brand-01.svg",
    name: "Google",
    visitors: 3.5,
    revenues: "5,768",
    sales: 590,
    conversion: 4.8,
  },
  {
    logo: "/images/brand/brand-02.svg",
    name: "Twitter",
    visitors: 2.2,
    revenues: "4,635",
    sales: 467,
    conversion: 4.3,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
  {
    logo: "/images/brand/brand-03.svg",
    name: "Github",
    visitors: 2.1,
    revenues: "4,290",
    sales: 420,
    conversion: 3.7,
  },
];

const TableOne = ({ posts }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 sm:pb-1 h-115 overflow-y-auto">
      <h4 className="mb-6 text-xl font-semibold text-black">
        Top Posts
      </h4>

      <div className="flex flex-col">

        {posts.map((post, key) => (
          <div
            // ${key === data.length - 1
            //   ? ""
            //   : "border-b border-stroke"
            //   }
            className={`grid grid-cols-3 sm:grid-cols-5 
              `}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:py-4 w-60">
              <div className="flex-shrink-0">
                <Image src={post.image} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black text-sm sm:block w-fit">
                {post.title.substr(0, 10)} ....
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:py-4">
              <p className="text-black">{post.comments.length}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:py-4">
              <p className="text-meta-3">{post.votes.length}</p>
            </div>

            <div className="items-center justify-center p-2.5 xl:py-4 sm:flex">
              <p className="text-black">{post.createdAt.split('T')[0]}</p>
            </div>

            <div className="items-center justify-center p-2.5 xl:py-4 sm:flex">
              <p className="text-meta-5">{post.updatedAt.split('T')[0]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
