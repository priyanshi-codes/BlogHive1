import config from '../conf/config.js'//it 
//contains all the config file like project id , 
//database it etc..
import {Client,ID,Databases, Storage,Query} from 'appwrite';


export class Service{
    client = new Client()
    databases;
    bucket; //or bucket

    constructor(){
        this.client 
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProject);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    //method1 is to create post
    async createPost({title,slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteProject,
                config.appwriteDatabase,
                slug,
                {
                  title,
                  content,
                  featuredImage,
                  status,
                  userId  
                }
            )
            
        } catch (error) {
            throw error
            
        }
    }
  
    //method2 is to updatePost
    async upadatePost(slug, {title,content, featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                config.appwriteProject,
                config.appwriteDatabase,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
            
        } catch (error) {
            throw error
            
        }

    }


    //method3 is to deletePost
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteProject,
                config.appwriteDatabase,
                slug
            )
            return true
            
        } catch (error) {
            throw error
            
        }
    } 

    //method4 is to get post
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteProject,
                config.appwriteDatabase,
                slug
            )
            
        } catch (error) {
            throw error
            
        }
    }

    //method5 is to get all posts
    async getPosts(queries=[Query.equal('status', 'active')]) {
        try {
          return await this.databases.listDocuments(
            config.appwriteProject,
            config.appwriteDatabase,
            queries
          )
            
        } catch (error) {
            throw error
            
        }
    }

    //file upload method/service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file,

            )
            
        } catch (error) {
            throw error
            
        }
    }

    //delete a file 
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId,
            )
            return true
            
        } catch (error) {
            throw error
            
        }
    }

    //file preview 
    //not uses async because its response is too fast no neddded any promise or asunc function
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service();

export default service