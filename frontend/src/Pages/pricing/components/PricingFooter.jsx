import { Link } from "react-router-dom";

function PricingFooter() {
  return (
    <div className="mt-15 animate-fade-in-down">
      <h2
        className="text-[40px] font-bold text-[min(10vw,40px)] text-center"
        data-aos="fade-up"
      >
        Still have questions?
      </h2>
      <p className="why-us-p mx-3" data-aos="fade-up">
        Our team is here to help you choose the right plan for your needs.
      </p>

      <div
        className="flex items-center justify-center gap-5 my-5 max-md:flex-col max-md:gap-3"
        data-aos="fade-up"
      >
        <Link to="/contact">
          <button className="bg-gray-100 hover:opacity-70 py-3 px-7">
            Contact Sale
          </button>
        </Link>
        <button className="text-white bg-gradient-to-r from-[rgb(75,95,199)] to-green-200 border-4 border-gradient-to-r from-[rgb(75,95,199)] to-green-200 hover:opacity-70 py-3 px-7">
          Start Free Trial
        </button>
      </div>
    </div>
  );
}
export default PricingFooter;
