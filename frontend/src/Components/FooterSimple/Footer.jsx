import logo from "../../assets/logo.png";
import { PiCopyrightThin } from "react-icons/pi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" px-10 py-20 bg-[#111827] text-[rgb(172,179,189)]  text-[17px] border-1 w-[100%] ">
      <div className="grid grid-cols-4 gap-15 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1">
        <div className="flex flex-col gap-5">
          <img className="logo" src={logo} alt="" />
          <p>
            Professional email verification service trusted by thousands of
            businesses worldwide.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-6 text-white">Product</h3>
          <Link to="/verify">
            <p className="custom-footer-p">Email Verification</p>
          </Link>
          <Link to="/pricing">
            <p className="custom-footer-p">Pricing</p>
          </Link>
          <p className="custom-footer-p">API Access</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-6 text-white">Company</h3>
          <Link to="/">
            <p className="custom-footer-p">About</p>
          </Link>
          <Link to="/contact">
            <p className="custom-footer-p">Contact</p>
          </Link>
          <p className="custom-footer-p">Blog</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-6 text-white">Legal</h3>
          <p className="custom-footer-p">Privacy Policy</p>
          <p className="custom-footer-p">Terms of Service</p>
          <p className="custom-footer-p">Cookie Policy</p>
        </div>
      </div>

      <div className="text-center flex justify-center items-center gap-2 mt-15 border-t pt-10">
        <PiCopyrightThin />
        <p>2024 Email Verifier. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
