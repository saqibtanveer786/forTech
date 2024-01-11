import Link from "next/link";
import Image from "next/image";
import { getAuthSession } from "lib/auth";

const ChatCard = async ({ comments, name }) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default xl:col-span-4 xl:max-h-[485px] min-h-[485px] overflow-y-auto">
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black">
        New Comments
      </h4>
      {(comments?.length === 0 || !comments) && (
        <p className="text-3xl text-center pt-[20%]">Nothing!</p>
      )}

      <div>
        {comments &&
          comments.map((comment, key) => (
            <Link
              href="/"
              className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 "
              key={key}
            >
              <div className="relative h-14 w-14 rounded-full overflow-hidden">
                <Image
                  src={comment?.user?.image}
                  alt="User"
                  width={57}
                  height={56}
                />
                {/* <span
                className={`absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white ${chat.dot === 6 ? "bg-meta-6" : `bg-meta-${chat.dot}`
                  } `}
              ></span> */}
              </div>

              <div className="flex flex-1 items-center justify-between">
                <div>
                  <h5 className="font-medium text-black">
                    {comment?.user?.name === name ? "You" : comment?.user?.name}
                  </h5>
                  <p>
                    <span className="text-sm text-black">
                      {comment?.message}
                    </span>
                    {/* <span className="text-xs"> . {chat.time} min</span> */}
                  </p>
                </div>
                {/* {chat.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    {chat.textCount}
                  </span>
                </div>
              )} */}
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChatCard;
