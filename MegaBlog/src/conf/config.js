const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProject:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteKey:String(import.meta.env.VITE_APPWRITE_KEY_ID)   ,
    appwriteDatabase:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollection:String(import.meta.env.VITE_APPWRITE_COLLECTION_DATABASE_ID),
    appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),

}

export default conf
