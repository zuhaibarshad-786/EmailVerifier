import { BsRocketTakeoff } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function LandingHeader() {
  return (
    <>
      {" "}
      <div className="flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-red-100 px-5 py-1 font-bold transition duration-500 hover:opacity-70 mb-5">
        <BsRocketTakeoff />
        <p className="text-[rgb(75,95,199)]">
          Fast & Accurate Email Verification
        </p>
      </div>
      <h1 className="text-[60px] font-bold text-[rgb(75,95,199)] text-center text-[min(10vw,60px)] poppins-extrabold ">
        Verify Emails in Seconds
      </h1>
      <p className="text-2xl w-[55%] text-[rgb(157,165,176)] text-center mt-5">
        Clean your email lists, improve deliverability, and protect your sender
        reputation with our advanced email verification system.
      </p>
      <div className="flex justify-center items-center gap-4 my-10 max-sm:flex-col max-md:flex-col max-lg:flex-col">
        <button className="text-white bg-[#24A0ED] hover:opacity-70 py-3 px-7">
          Start Verifying Free
        </button>
        <Link to="/pricing">
          <button className="hover:bg-gray-100 py-3 px-7">View Pricing</button>
        </Link>
      </div>
    </>
  );
}
export default LandingHeader;
