import { TfiEmail } from "react-icons/tfi";

function DemoMails() {
  return (
    <div
      className="shadow-[1px_1px_5px_rgba(0,0,0,0.8)] rounded-[8px] flex flex-col gap-4 my-10 p-5 w-full max-w-2xl mx-auto"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-duration="500"
    >
      <div className="flex items-center gap-3">
        <TfiEmail className="text-[rgb(75,95,199)] text-xl" />
        <p className="text-[rgb(157,165,176)] text-base">
          Email Verification Demo
        </p>
      </div>

      <div className="demo-outer-div border-green-500 bg-green-50">
        <p className="text-sm sm:text-base">user@gmail.com</p>
        <p className="demo bg-green-100 hover:bg-green-500">Valid</p>
      </div>

      <div className="demo-outer-div border-red-500 bg-red-50">
        <p className="text-sm sm:text-base">invalid@gmail.com</p>
        <p className="demo bg-red-100 hover:bg-red-500">Invalid</p>
      </div>

      <div className="demo-outer-div border-orange-500 bg-orange-50">
        <p className="text-sm sm:text-base">risky@gmail.com</p>
        <p className="demo bg-orange-100 hover:bg-orange-500">Risky</p>
      </div>
    </div>
  );
}
export default DemoMails;
