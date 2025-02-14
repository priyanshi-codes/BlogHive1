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
          <Container>
            <div className='w-full flex justify-center'>
            {posts.map((post)=>(<PostCard key={post.$id} {...post}/>))}
            </div>
          </Container>
          
        </div>
      )
}

export default Home
