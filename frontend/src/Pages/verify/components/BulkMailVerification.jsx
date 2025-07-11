import { useRef } from "react";
import { toast } from "react-toastify";
import { checkBulkMail } from "../JS/verifyMetaData";
import ColumSelection from "./ColumSelection";

function BulKMailVerification() {
  const bulkMails = useRef("");
  const csvFile = useRef("");

  return (
    <div className="mb-5 p-5 flex flex-col justify-center w-[60%] mx-auto rounded-[8px] shadow-xl border-1 border-[rgb(157,165,176)] max-sm:w-[95%] max-md:w-[95%] animate-fade-in-down">
      <h3 className="font-[600] text-3xl">Bulk Email Verification</h3>
      <p className="text-[20px] text-[rgb(157,165,176)]">
        Enter multiple email addresses (one per line) or upload a CSV file{" "}
      </p>

      <textarea
        name=""
        id=""
        className="bulkMail w-[100%] mt-3"
        type="text"
        rows={6}
        placeholder="Enter multiple Emails (one per one line)
user1@gmail.com
user2@gmail.com
user3@gmail.com
        "
        data-aos="fade-right"
        ref={bulkMails}
      ></textarea>

      <div
        className="flex gap-5 mt-5 w-[100%] max-sm:flex-col max-md:flex-col"
      >
        <div className="w-[100%]">
          <ColumSelection />
        </div>

        <div className="w-[100%]">
          <button
            className="w-[100%] py-3 text-white bg-[#24A0ED] hover:opacity-70"
            onClick={() => {
              if (!checkBulkMail(bulkMails)) {
                toast.error("First enter emails.");
                return;
              }
            }}
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
}

export default BulKMailVerification;
