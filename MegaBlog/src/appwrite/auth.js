import config from '../conf/config.js'//it contains all the config file like project id , database it etc..
import {Client,Account,ID} from 'appwrite';


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProject);
        
    this.account = new Account(this.client);
    }


     //method1 is to create account
    async createAccount({name,email, password}){
      try {
        const userAccount= await this.account.create(ID.unique(),email, password,name)
        if (userAccount) {
            //call another method to create user
            return this.login({email, password})   
        } else {
            return userAccount;
            
        }
        
      } catch (error) {
        throw ErrorEvent;
      }  
    }
     
    //method2 is to login
    async login({email, password}){
        try {
            return await this.account.createEmailSession(email, password);
            //createEmailSession is from appwrite documentatiion
    
        } catch (error) {
            throw error    
        }
}

      //method3 is to get current user
      async getCurrentUser(){
        try {
            return await this.account.get();
            //get is from appwrite documentation
            //user logged in 
            
        } catch (error) {
            throw error
            //user not loggedin
            
        }
        return null;
}

    //method4 is to logout
    async logout(){
        try {
            return await this.account.deleteSessions();
            
        } catch (error) {
            throw error 
            
        }
}
}


const authservice = new AuthService()
export default authservice