import React, {useState, useEffect} from 'react';
import appwriteService from '../appwrite/conf'
import {Container, PostCard} from '../components'

function AllPosts() {
  const [posts, setPosts] = useState([])
  useEffect(()=>{}, [])
  appwriteService.getPosts([]).then((posts)=>setPosts(posts))
  if(posts){
    setPosts(posts.documents)
  }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='w-full flex justify-center'>
        {posts.map((post)=>(<PostCard key={post.$id} {...post}/>))}
        </div>
      </Container>
      
    </div>
  )
}

export default AllPosts
