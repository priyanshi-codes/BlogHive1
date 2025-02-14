import React from 'react'
import appwriteService from "../appwrite/conf"
import {Link} from "react-router-dom"

function PostCard({$id , title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full h-full border border-gray-200 rounded-lg overflow-hidden'>
            <div className='w-full h-40 overflow-hidden justify center'>
                <img src={appwriteService.getFile(featuredImage)} alt={title}  className='rounded-xl'/>
            </div>
            <h2 className='p-4 text-lg text-gray-700'>{title}</h2>
        </div>
     </Link>
  )
}

export default PostCard
