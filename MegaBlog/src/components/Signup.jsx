import React, { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState(null);

  const create = async (data) => {
    setError(null); // ✅ Clear errors correctly

    try {
      console.log("Submitting Data:", data); // ✅ Debugging log
      const userData = await authService.createAccount(data);
      console.log("Created User:", userData); // ✅ Check if userData is returned

      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          dispatch(login(currentUser));
          navigate("/");
        }
      }
    } catch (err) {
      console.error("Signup Error:", err); // ✅ Log errors
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100px" />
          </span>
        </div>

        <h2 className="text-2xl font-semibold text-center">
          Sign Up to create an account
        </h2>
        <p className="text-center text-sm text-gray-500">
          Already have an account?
          <Link to="/login" className="text-black underline"> Sign in</Link>
        </p>
        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input 
              label="Full Name"
              type="text"
              placeholder="John Doe"
              {...register("fullName", { required: "Full Name is required" })}
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}

            <Input
              label="Email"
              type="email"
              placeholder="R1oZu@example.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Invalid Email",
                },
              })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <Input
              label="Password"
              type="password"
              placeholder="********"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <Button type="submit" className="w-full mt-3">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
