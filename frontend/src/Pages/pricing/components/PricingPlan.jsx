import Plan1 from "./Plan1";
import Plan2 from "./Plan2";
import Plan3 from "./Plan3";

function PricingPlan() {
  return (
    <div className="grid grid-cols-[1fr_1fr_1fr] m-15 gap-10 max-sm:grid-cols-1 max-md:grid-cols-1 max-lg:grid-cols-1 max-sm:grid-mx-5 max-md:mx-5 max-lg:mx-5 animate-fade-in-down">
      <Plan1 />
      <Plan2 />
      <Plan3 />
    </div>
  );
}

export default PricingPlan;
