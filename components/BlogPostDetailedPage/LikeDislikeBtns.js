"use client"
import { addVote } from 'lib/serverAction';
import React, { useEffect, useState } from 'react'
// react icons
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

export default function LikeDislikeBtns({userId, postId}) {

  const [voteType, setVoteType] = useState()

  async function handleVote(type) {
      if(voteType === type) return;
      const response = await addVote(userId, postId, type);
      console.log(response)
      setVoteType(()=> response.type)
  }

  useEffect(()=>{
    async function toCall() {
      const url = `http://localhost:3000/api/votes/addvote`
      const response = await fetch(url, {
        method: 'PUT',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId,
            postId,
        })
    })
      const jsonResponse = await response.json();
      setVoteType(()=> jsonResponse.type)
    }
    
    toCall();
  }, [])

  return (
    <div className='container my-4 flex flex-col'>
      <h2 className='text-xl font-light'>How would you thing about this post</h2>
        <div id='btn-container' className='flex justify-start my-4'>
          <button 
          className={`bg-gray-300 text-blue-500 mx-2 p-3 rounded-full ${voteType === 'UP'? 'text-gray-300 bg-blue-500': 'hover:bg-gray-200'}`}
          onClick={()=>handleVote('UP')}          
          >
              <AiOutlineLike size={40} />
          </button>
          <button 
          className={`bg-gray-300 text-blue-500 mx-2 p-3 rounded-full ${voteType === 'DOWN'? 'text-gray-300 bg-blue-500': 'hover:bg-gray-200'}`}
          onClick={()=>handleVote('DOWN')}          
          >
              <AiOutlineDislike size={40} />
          </button>
        </div>
    </div>
  )
}
