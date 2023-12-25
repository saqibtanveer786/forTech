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

const ECommerce = ({ data }) => {
  let totalLikes = 0, totalDislikes = 0, totalComments = 0;
  if (data.posts !== undefined && data.posts !== null) {
    data.posts.forEach((item, i) => {
      item.votes.forEach((vote) => {
        if (vote.type === "UP")
          totalLikes++;

        if (vote.type === "DOWN")
          totalDislikes++;
      })
      totalComments += item.comments.length;

    })
  }

  return (
    <>

      <div className="grid grid-cols-1 gap-4 xsm:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 max-w-7xl mx-auto">
        <CardDataStats title="Total Posts" total={data.posts.length} rate="0.43%" levelUp>
          <TfiLayoutListPost
            className="fill-primary"
            size={20}
          />
        </CardDataStats>
        <CardDataStats title="Total Views" total={totalComments} rate="4.35%" levelUp>
          <PiEyeBold
            className="fill-primary"
            size={20}
          />
        </CardDataStats>
        <CardDataStats title="Total Likes" total={totalLikes} rate="2.59%" levelUp>
          <AiOutlineLike
            className="text-primary"
            size={20}
          />
        </CardDataStats>
        <CardDataStats title="Total DisLikes" total={totalDislikes} rate="0.95%" levelDown>
          <AiOutlineDislike
            className="text-primary"
            size={20}
          />
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5 max-w-7xl mx-auto">
        <ChartOne />
        <TableThree />
        <ChatCard comments={data.comments} />
        <div className="col-span-12 xl:col-span-8">
          <TableOne posts={data.posts} />
        </div>
      </div>
    </>
  );
};

export default ECommerce;
