import React,{useState, useEffect} from 'react'
import appwriteService from '../appwrite/conf'
import {Container, PostCard} from '../components'

function Home() {
    const[posts, setPosts] = useState([])

    useEffect(()=>{
      appwriteService.getPosts().then((posts)=>{
        if(posts){
          setPosts(posts.documents)
        }
      })
    },[])
    if(posts.length==0){
      return (
        <div className='w-full py-8'>
          <Container>
            <div className='w-full flex justify-center'>
            No posts found
            </div>
          </Container>
          
        </div>
      )
    }
    return (
        <div className='w-full py-8'>
          <Container className='flex flex-col gap-4'>
            {posts.map((post)=>{
              <div key = {post.$id} className = 'p-2 w-1/4'>
                <PostCard {...post}/>
              </div>
            })}
          </Container>
          
        </div>
      )
}

export default Home
