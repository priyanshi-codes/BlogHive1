import React,{useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {Button ,Input , Select} from "../index"
import appwriteService from "../../appwrite/conf"
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux"

function PostForm({post}) {
    const {register , handleSubmit, watch , setValue,control, getValues}= useForm({
        defaultValues: {
            title: post?.title||"",
            slug: post?.slug||"",
            content: post?.content||"",
            status: post?.status||"active",
            featuredImage: post?.featuredImage||"",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector(state=>state.user.userData);

    const submit = async(data)=>{
        if(post){
          const file =  data.images[0]? appwriteService.uploadFile(data.images[0]): null

          if(file){
            appwriteService.deleteFile(post.featuredImage)
          }
          const dbPost = await appwriteService.upadatePost(post.$id,{
            ...data,
            featuredImage: file?file.$id:undefined,
          })

            if(dbPost){
navigate(`/post/${dbPost.$id}`)
            }

            else{
                const file = await appwriteService.uploadFile(data.images[0]);

                if(file){
                     const fileId =file.$id
                     data.featuredImage=fileId
                     await appwriteService.createPost({
                        ...data,
                        userId: userData.$id
                     })
                     if(dbPost){
                        navigate(`/post/${dbPost.$id}`)
                     }
                }
            }

          }
    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value === "string"){
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g,'-')//regex expression
            .replace(/[\s-]+/g,'-')
            .replace(/^-+|-+$/g,'')
        }
        return ""
    })

    React.useEffect(()=>{
        const subscription = watch((value,{name})=>{
            if(name === "title"){
                setValue("slug",slugTransform(value.title), {shouldValidate: true})
            }
        })

        return ()=>{
            subscription.unsubscribe()
        }

    },[watch, slugTransform, setValue])

  return (
    <form onSubmit={handleSubmit(submit)}>
        <div className='flex flex-col gap-4'>
            <Input label="Title" {...register("title", {required:"Title is required"})}/>
            <Input label="Slug" {...register("slug", {required:"Slug is required"})}/>
            <Input label="Content" {...register("content", {required:"Content is required"})}/>
            <Select label="Status" {...register("status")}>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
            </Select>            
            <Input label="Featured Image" type="file" {...register("images")}/>
        </div>
        <Button type="submit">Save</Button>
    </form>
  )
}

export default PostForm
