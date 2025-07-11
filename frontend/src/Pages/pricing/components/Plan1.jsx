import { GiElectric } from "react-icons/gi";
import { TiTick } from "react-icons/ti";

function Plan1() {
  return (
    <div className="flex flex-col items-center justify-center border-3 border-transparent p-5 shadow-lg rounded-[8px] animate-fade-in-left transition duration-500 hover:scale-105 hover:border-[rgb(75,95,199)]">
      <GiElectric className="why-us-card-icon text-[rgb(75,95,199)]" />
      <h3 className="text-3xl font-bold mt-5 mb-3">Free</h3>
      <h3 className="text-3xl font-bold mb-3">
        $0 <span className="why-us-p font-normal">/forever</span>
      </h3>
      <p className="why-us-p mb-5">
        Perfect for testing and small verification needs
      </p>
      <div className="h-80">
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">100 verifications per month</p>
        </div>
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Single email verification</p>
        </div>{" "}
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Basic validation checks</p>
        </div>{" "}
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Email support</p>
        </div>{" "}
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Standard accuracy</p>
        </div>
      </div>
      <button className="bg-[#111827] w-[80%] text-white mt-5">
        Get Started Free
      </button>
    </div>
  );
}

export default Plan1;
