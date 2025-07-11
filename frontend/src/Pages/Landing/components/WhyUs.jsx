import { GiElectric } from "react-icons/gi";
import { AiOutlineSafety } from "react-icons/ai";
import { GoPeople } from "react-icons/go";

function WhyUs() {
  return (
    <div className="flex flex-col justify-center items-center my-10" data-aos="fade-up" >
      <h2 className="text-[40px] font-bold text-[min(10vw,40px)] text-center">
        Why Choose Our Email Verifier?
      </h2>
      <p className="text-[20px] mt-5 mb-10 text-[rgb(157,165,176)] text-center">
        Advanced algorithms and real-time verification to ensure your emails
        reach the right inbox.
      </p>

      <div className="grid grid-cols-3 gap-5 mx-10 my-10 max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1" data-aos="fade-up">
        <div className="why-us-card-outer-div">
          <GiElectric className="why-us-card-icon text-[rgb(75,95,199)]" />
          <h3 className="why-us-card-h3">Lightning Fast</h3>
          <p className="why-us-p">
            Verify thousands of emails in seconds with our optimized
            verification engine.
          </p>
        </div>

        <div className="why-us-card-outer-div">
          <AiOutlineSafety className="why-us-card-icon text-[rgb(33,191,104)]" />
          <h3 className="why-us-card-h3">99.5% Accuracy</h3>
          <p className="why-us-p">
            Industry-leading accuracy rates with advanced syntax and domain
            validation.
          </p>
        </div>

        <div className="why-us-card-outer-div">
          <GoPeople className="why-us-card-icon text-[rgb(140,59,195)]" />
          <h3 className="why-us-card-h3">Bulk Processing</h3>
          <p className="why-us-p">
            Upload CSV files and verify up to 100,000 emails at once with
            detailed reports
          </p>
        </div>
      </div>
    </div>
  );
}
export default WhyUs;
