import { TiTick } from "react-icons/ti";
import { FaCrown } from "react-icons/fa";

function Plan2() {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-5 shadow-lg rounded-[8px] border-3 border-[rgb(75,95,199)] animate-fade-in-left transition duration-500 hover:scale-105">
        <p className="relative top-[-42px] text-white font-bold bg-gradient-to-r from-[rgb(75,95,199)] to-green-200 px-5 rounded-full">
          Most pouplar
        </p>
        <FaCrown className="why-us-card-icon text-[rgb(140,59,195)]" />
        <h3 className="text-3xl font-bold mt-5 mb-3">Pro</h3>
        <h3 className="text-3xl font-bold mb-3">
          $29 <span className="why-us-p font-normal">/month</span>
        </h3>
        <p className="why-us-p mb-5">
          Ideal for businesses and marketing teams
        </p>
        <div className="h-69">
          <div className="flex items-center gap-2" data-aos="fade-up">
            <TiTick className="text-green-500 text-left" />
            <p className="text-lg">100,000 verifications per month</p>
          </div>
          <div className="flex items-center gap-2" data-aos="fade-up">
            <TiTick className="text-green-500 text-left" />
            <p className="text-lg">Bulk verification (CSV upload)</p>
          </div>{" "}
          <div className="flex items-center gap-2" data-aos="fade-up">
            <TiTick className="text-green-500 text-left" />
            <p className="text-lg">Advanced validation checks</p>
          </div>{" "}
          <div className="flex items-center gap-2" data-aos="fade-up">
            <TiTick className="text-green-500 text-left" />
            <p className="text-lg">Export results (CSV/Excel)</p>
          </div>{" "}
          <div className="flex items-center gap-2" data-aos="fade-up">
            <TiTick className="text-green-500 text-left" />
            <p className="text-lg">Priority email support</p>
          </div>
          <div className="flex items-center gap-2" data-aos="fade-up">
            <TiTick className="text-green-500 text-left" />
            <p className="text-lg">99.5% accuracy guarantee</p>
          </div>
          <div className="flex items-center gap-2" data-aos="fade-up">
            <TiTick className="text-green-500 text-left" />
            <p className="text-lg">API access (1,000 calls/month)</p>
          </div>
          <div className="flex items-center gap-2" data-aos="fade-up">
            <TiTick className="text-green-500 text-left" />
            <p className="text-lg">Detailed reporting</p>
          </div>
        </div>
        <button className="bg-gradient-to-r from-[rgb(75,95,199)] to-green-200 w-[80%] text-white mt-5">
          Start Pro Trial
        </button>
      </div>
    </>
  );
}
export default Plan2;
