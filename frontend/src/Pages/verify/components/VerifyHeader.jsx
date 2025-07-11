import { toggleButton } from "../JS/toggleButton";

function VerifyHeader({ setVerifyMail }) {
  return (
    <>
      <h1 className="text-[min(10vw,40px)] font-bold text-center mt-2">
        Email Verification
      </h1>

      <p className="text-2xl text-[rgb(157,165,176)] text-center mx-auto mt-2">
        Verify single emails or upload bulk lists for cleaning
      </p>
      <div className="flex gap-2 p-[2px] bg-[rgb(220,220,220)] mt-10 mb-5 w-[60%] rounded-[8px] max-sm:w-[95%] max-md:w-[95%]">
        <button
          className="verify-button w-[100%] bg-white"
          onClick={() => {
            toggleButton();
            setVerifyMail("singleMail");
          }}
        >
          Single Email
        </button>
        <button
          className="verify-button w-[100%]"
          onClick={() => {
            toggleButton();
            setVerifyMail("bulkMail");
          }}
        >
          Bulk Verification
        </button>
      </div>
    </>
  );
}

export default VerifyHeader;
