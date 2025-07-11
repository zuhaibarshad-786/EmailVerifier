import { IoDiamondSharp } from "react-icons/io5";

function PricingHeader() {
  return (
    <>
      <div className="flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-red-100 px-5 py-1 font-bold transition duration-500 hover:opacity-70 mb-5">
        <IoDiamondSharp />
        <p className="text-[rgb(75,95,199)]">Simple, Transparent Pricing</p>
      </div>
      <h1 className="text-[60px] font-bold text-[rgb(75,95,199)] text-center text-[min(10vw,60px)]">
        Choose Your Plan
      </h1>
      <p className="text-2xl w-[55%] text-[rgb(157,165,176)] text-center mt-5">
        Start free and scale as you grow. All plans include our core
        verification features with 99%+ accuracy.
      </p>
    </>
  );
}

export default PricingHeader;
