"use client";
import React from "react";
import ChartOne from "../Charts/ChartOne";
import ChatCard from "../Chat/ChatCard";
import TableOne from "../Tables/TableOne";
import CardDataStats from "../CardDataStats";
import TableThree from "../Tables/TableThree";

import { PiEyeBold } from "react-icons/pi"
import { TfiLayoutListPost } from "react-icons/tfi"
import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineDislike } from "react-icons/ai"

const ECommerce = () => {
  return (
    <>

      <div className="grid grid-cols-1 gap-4 xsm:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 max-w-7xl mx-auto">
        <CardDataStats title="Total Posts" total="$3.456K" rate="0.43%" levelUp>
          <TfiLayoutListPost
            className="fill-primary"
            size={20}
          />
        </CardDataStats>
        <CardDataStats title="Total Views" total="$45,2K" rate="4.35%" levelUp>
          <PiEyeBold
            className="fill-primary"
            size={20}
          />
        </CardDataStats>
        <CardDataStats title="Total Likes" total="2.450" rate="2.59%" levelUp>
          <AiOutlineLike
            className="text-primary"
            size={20}
          />
        </CardDataStats>
        <CardDataStats title="Total DisLikes" total="3.456" rate="0.95%" levelDown>
          <AiOutlineDislike
            className="text-primary"
            size={20}
          />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 max-w-7xl mx-auto">
        <ChartOne />
        <TableThree />
        <ChatCard />
        <div className="col-span-12 xl:col-span-8">
          <TableOne />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
