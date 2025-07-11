import { useState } from "react";
import logo from "../../assets/logo.png";
import { VscThreeBars } from "react-icons/vsc";
import Sidebar from "../SidebarSimple/Sidebar";
import { Link } from "react-router-dom";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      {/*Responsive Sidebar Section*/}
      {sidebar ? <Sidebar setSidebar={setSidebar} /> : null}

      {/*Header Section*/}
      <div className="flex justify-between items-center px-10 py-2 border-1 border-gray-200 fixed top-0 z-10 w-[100%] bg-white">
        <div>
          <Link to="/">
            <img className="logo" src={logo} alt="" />
          </Link>
        </div>
        <VscThreeBars
          className="cursor-pointer w-8 h-8 hidden max-sm:block max-md:block max-lg:block"
          onClick={() => setSidebar(true)}
        />

        <div className="flex justify-center items-center gap-10 max-sm:hidden max-md:hidden max-lg:hidden">
          <Link to="/verify">
            <p className="custom-p">Verify</p>
          </Link>
          <Link to="/pricing">
            <p className="custom-p">Pricing</p>
          </Link>
          <Link to="/contact">
            <p className="custom-p">Contact</p>
          </Link>
        </div>
        <div className="flex justify-center items-center gap-10 max-sm:gap-2 max-md:gap-2 max-lg:gap-2 max-sm:hidden max-md:hidden max-lg:hidden">
          <Link to="/sign-in">
            <button className="hover:bg-gray-100">Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className="text-white bg-[#24A0ED] hover:opacity-70 bg-gradient-none">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header;
