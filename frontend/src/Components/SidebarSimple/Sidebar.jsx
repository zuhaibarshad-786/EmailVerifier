import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

function Sidebar({ setSidebar }) {
  return (
    <div className="bg-[#24A0ED] fixed top-0 bottom-0 z-15 right-0 p-5 w-50">
      <RxCrossCircled
        className="text-white text-2xl cursor-pointer"
        onClick={() => setSidebar(false)}
      />
      <div className="mt-5 w-[100%] text-center text-white">
        <Link to="/verify">
          <p className="custom-responsive-p">Verify</p>
        </Link>
        <hr className="py-2" />
        <Link to="/pricing">
          <p className="custom-responsive-p">Pricing</p>
        </Link>
        <hr className="py-2" />
        <Link to="/contact">
          <p className="custom-responsive-p">Contact</p>
        </Link>
        <hr className="py-2" />
        <div className="flex flex-col justify-center items-center mt-5 gap-5">
          <Link to="/sign-in">
            <button className="custom-sidebar-button w-45 bg-white">Sign In</button>
          </Link>
          <Link to="/sign-up">
            <button className="custom-sidebar-button w-45 bg-white">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
