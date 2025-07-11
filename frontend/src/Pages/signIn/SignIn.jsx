import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { toast } from "react-toastify";
import { validateSignIn } from "./JS/metaData";

function SignIn() {
  const username = useRef("");
  const password = useRef("");
  const checkbox = useRef("");

  return (
    <div className="sign-in-up-outer-div animate-fade-in-down">
      <div className="text-center">
        <h3 className="font-bold text-3xl mb-2">Welcome Back</h3>
        <p className="why-us-p">Sign in to your EmailVerifier account</p>
      </div>

      <div className="mt-5 flex flex-col w-[100%]">
        <label htmlFor="" className="sign-in-label">
          Email Address
        </label>
        <input
          className="username"
          type="text"
          placeholder="Enter your Email"
          ref={username}
        />
        <p className="email-error-message hidden mt-2">Email is required.</p>
        <label htmlFor="" className="sign-in-label">
          Password
        </label>
        <input
          className="password"
          type="password"
          placeholder="Enter your Password"
          ref={password}
        />
        <p className="password-error-message hidden mt-2">
          Password is required.
        </p>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center justify-center gap-2">
            <input
              type="checkbox"
              className="checkbox w-4 h-4 cursor-pointer"
              ref={checkbox}
            />
            <p>Remember Me</p>
          </div>
          <p className="cursor-pointer text-[rgb(75,95,199)] font-bold hover:opacity-70 hover:underline">
            Forget Password?
          </p>
        </div>
        <button
          className="text-white bg-[#24A0ED] hover:opacity-70 my-5"
          onClick={() => {
            if (!validateSignIn(username, password, checkbox)) {
              console.log(checkbox.current.checked);
              toast.error("Please enter valid Credentials.");
              return;
            }
          }}
        >
          Sign In
        </button>
        <div className="flex items-center justify-between gap-1">
          <hr className="w-2 text-gray-300 w-[40%]" />
          <p className="why-us-p">OR</p>
          <hr className="w-2 text-gray-300 w-[40%]" />
        </div>

        <button className="flex items-center justify-center gap-4 border-3 border-gray-300 hover:opacity-70 my-5">
          <FcGoogle />
          Google
        </button>
        <p className="why-us-p text-center">
          Don't have an account?{" "}
          <Link to="/sign-up">
            <span className="cursor-pointer text-[rgb(75,95,199)] font-bold hover:opacity-70 hover:underline">
              Sign Up
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default SignIn;
