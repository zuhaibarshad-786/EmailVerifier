import { AiOutlineMoneyCollect } from "react-icons/ai";
import { TiTick } from "react-icons/ti";

function Plan3() {
  return (
    <div className="flex flex-col items-center justify-center border-3 border-transparent p-5 shadow-lg rounded-[8px] animate-fade-in-left transition duration-500 hover:scale-105 hover:border-[rgb(75,95,199)]">
      <AiOutlineMoneyCollect className="why-us-card-icon text-[rgb(33,191,104)]" />
      <h3 className="text-3xl font-bold mt-5 mb-3">Enterprise</h3>
      <h3 className="text-3xl font-bold mb-3">
        $99 <span className="why-us-p font-normal">/month</span>
      </h3>
      <p className="why-us-p mb-5">
        For large organizations with high volume needs
      </p>
      <div className="h-70">
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">100,000 verifications per month</p>
        </div>
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Unlimited bulk verification</p>
        </div>{" "}
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Real-time API integration</p>
        </div>{" "}
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Custom validation rules</p>
        </div>{" "}
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Dedicated account manager</p>
        </div>
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">24/7 phone support</p>
        </div>
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">99.9% uptime SLA</p>
        </div>
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Advanced analytics dashboard</p>
        </div>
        <div className="flex items-center gap-2" data-aos="fade-up">
          <TiTick className="text-green-500 text-left" />
          <p className="text-lg">Custom integrations</p>
        </div>
      </div>
      <button className="bg-[#111827] w-[80%] text-white mt-5">
        Contact Sales
      </button>
    </div>
  );
}

export default Plan3;
