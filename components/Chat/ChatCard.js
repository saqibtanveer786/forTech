import Link from "next/link";
import Image from "next/image";

const chatData = [
  {
    avatar: "/images/user/user-01.png",
    name: "Devid Heilo",
    text: "How are you?",
    time: 12,
    textCount: 3,
    dot: 3,
  },
  {
    avatar: "/images/user/user-02.png",
    name: "Henry Fisher",
    text: "Waiting for you!",
    time: 12,
    textCount: 0,
    dot: 1,
  },
  {
    avatar: "/images/user/user-04.png",
    name: "Jhon Doe",
    text: "What's up?",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-05.png",
    name: "Jane Doe",
    text: "Great",
    time: 32,
    textCount: 2,
    dot: 6,
  },
  {
    avatar: "/images/user/user-01.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 0,
    dot: 3,
  },
  {
    avatar: "/images/user/user-03.png",
    name: "Jhon Doe",
    text: "How are you?",
    time: 32,
    textCount: 3,
    dot: 6,
  },
];

const ChatCard = () => {
  let screenWidth;
  if (typeof window !== "undefined") {
    screenWidth = window.innerWidth;
  }
  return (
    <div className={`col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default ${screenWidth >= 1280 && 'col-span-4'}`}>
      <h4 className="mb-6 px-7.5 text-xl font-semibold text-black">
        Chats
      </h4>

      <div>
        {chatData.map((chat, key) => (
          <Link
            href="/"
            className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 "
            key={key}
          >
            <div className="relative h-14 w-14 rounded-full">
              <Image src={chat.avatar} alt="User" width={57} height={56} />
              <span
                className={`absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white ${chat.dot === 6 ? "bg-meta-6" : `bg-meta-${chat.dot}`
                  } `}
              ></span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div>
                <h5 className="font-medium text-black">
                  {chat.name}
                </h5>
                <p>
                  <span className="text-sm text-black">
                    {chat.text}
                  </span>
                  <span className="text-xs"> . {chat.time} min</span>
                </p>
              </div>
              {chat.textCount !== 0 && (
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                  <span className="text-sm font-medium text-white">
                    {" "}
                    {chat.textCount}
                  </span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChatCard;
