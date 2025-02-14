import React ,{useState} from 'react'
import authService from '../appwrite/auth'
import { Link , useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button , Input , Logo} from './index'
import { useDispatch } from 'react-redux'
import {useForm} from 'react-hook-form'



function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register , handleSubmit} = useForm();
    const[error , setError] = useState(null);

    const create = async(data)=>{
        setError("");
        try {
           const userData=  await authService.createAccount(data)
           if(userData){
            const userData = await authService.getCurrentUser();
            if(userData) dispatch(login(userData));
            navigate("/");
           }
            
        } catch (error) {
            setError(error.message);
            
        }
    }
  return (
    <div className='flex items-center justify-center'>

        <div className={`mx-auto w-full mx-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

        <div className='mb-2 flex justify-center'>

            <span className='inline-block w-full max-w-[100px]'><Logo width="100px" />
            </span>

            </div>

            <h2 className='text-2xl font-semibold text-center'>Sign Up to create an account</h2>
            <p className='text-center text-sm text-gray-500'>Already have an account?
                <Link to="/login" className='text-black underline'> Signin</Link>
                </p>
                {error && <p className='text-red-500'>{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className='space-y-5'>
                        <Input 
                        label= "Full Name"
                        type="text"
                        placeholder="John Doe"
                        {...register("fullName",{
                            required: true,
                        })}
                        />
                        <Input
                        label="Email"
                        type="email"
                        placeholder="R1oZu@example.com"
                        {...register("email",{
                            required: true,
                            matchPattern:(value)=> {
                                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ||        "Invalid Email"
                            }
                        })}
                        />
                        <Input
                        label="Password"
                        type="password"
                        placeholder="********"
                        {...register("password",{
                            required: true
                        })}
                        />
                    </div>
                    <Button type="submit" className='w-full mt-3'>Create Account</Button>
                </form>
        </div>
      
    </div>
  )
}

export default Signup
