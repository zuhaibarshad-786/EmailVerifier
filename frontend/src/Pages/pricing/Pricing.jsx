import Header from "../../Components/HeaderSimple/Header";
import PricingHeader from "./components/PricingHeader";
import PricingPlan from "./components/PricingPlan";
import FAQ from "./components/FAQ";
import PricingFooter from "./components/PricingFooter.jsx";
import Footer from "../../Components/FooterSimple/Footer";

import { FAQList } from "./JS/pricingMetaData.js";

function Pricing() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center mt-30 mb-20 animate-fade-in-down">
        <PricingHeader />
        <PricingPlan />
        <FAQ FAQList={FAQList} />
        <PricingFooter />
      </div>
      <Footer />
    </>
  );
}
export default Pricing;
