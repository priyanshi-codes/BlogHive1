import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="mb-2 text-center text-3xl font-bold text-gray-700">
          Sign in to your account
        </h2>

        <p className="text-center text-sm text-gray-500 mb-8">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
        {error && <p className="text-red-500 mb-8">{error}</p>}

        <form onSubmit={handleSubmit(login)} className="mt-8">
            <div className="space-y-5">
               <Input
                label = "Email"
                type="email"
                placeholder="Email"
                {...register("email",{
                    reguired:true,
                    validate:{
                        matchPattern:(value)=>{
                            return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Invalid Email"
                        }
                    }
                })}
                />
                <Input
                label = "Password"
                type="password"
                placeholder="Password"
                {...register("password",{
                    required: true
                })}
                />
                <Button type="submit" className="w-full">Sign in to your account</Button>
            </div>

        </form>
      </div>
    </div>
  );
}

export default Login;
