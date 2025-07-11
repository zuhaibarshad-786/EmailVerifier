import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { validateSignUp } from "./JS/metaData";
import { toast } from "react-toastify";

function SignUp() {
  const name = useRef("");
  const email = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const checkbox = useRef("");

  return (
    <div className="sign-in-up-outer-div mb-10 animate-fade-in-down">
      <div className="text-center">
        <h3 className="font-bold text-3xl mb-2">Create Account</h3>
        <p className="why-us-p">
          Join EmailVerifier and start verifying emails today
        </p>
      </div>

      <div className="mt-5 flex flex-col w-[100%]">
        <label htmlFor="" className="sign-in-label">
          Your Name
        </label>
        <input
          className="name"
          type="text"
          placeholder="Enter your Full Name"
          ref={name}
        />
        <p className="name-error-message hidden mt-2">Name is required.</p>
        <label htmlFor="" className="sign-in-label">
          Email Address
        </label>
        <input
          className="email"
          type="text"
          placeholder="Enter your Email"
          ref={email}
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
        <label htmlFor="" className="sign-in-label">
          Confirm Password
        </label>
        <input
          className="confirmPassword"
          type="password"
          placeholder="Re-Enter your Password"
          ref={confirmPassword}
        />
        <p className="error-message hidden mt-2">
          Password and Confirm Password do not match.
        </p>
        <div className="flex items-center justify-left mt-3 gap-2">
          <input
            type="checkbox"
            className="checkbox w-4 h-4 cursor-pointer"
            ref={checkbox}
          />
          <p className=" why-us-p">
            I agree to the{" "}
            <span className="sign-up-span">Terms of Service</span> and{" "}
            <span className="sign-up-span">Privacy Policy</span>
          </p>
        </div>

        <button
          className="text-white bg-[#24A0ED] hover:opacity-70 my-5"
          onClick={() => {
            if (
              !validateSignUp(name, email, password, confirmPassword, checkbox)
            ) {
              toast.error("Please enter complete valid info.");
              return;
            }
          }}
        >
          Create-account
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
          Already have an account?{" "}
          <Link to="/sign-in">
            <span className="sign-up-span font-bold">Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
