import { useRef, useState } from "react";
import { toast } from "react-toastify";

function SingleMailVerification() {
  const singleMail = useRef("");
  const [result, setResult] = useState(null); // holds API response

  const handleVerify = async () => {
    const email = singleMail.current.value;

    if (!email) {
      toast.error("Please enter an email.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/validate-email/single", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();
      setResult(data); // Store result for table
      toast.success("Email validated successfully!");
    } catch (error) {
      console.error("Error validating email:", error);
      toast.error("Failed to validate email.");
    }
  };

  return (
    <div className="mb-5 p-5 flex flex-col justify-center w-[60%] mx-auto rounded-[8px] shadow-xl border max-sm:w-[95%] max-md:w-[95%] animate-fade-in-down">
      <h3 className="font-[600] text-3xl">Single Email Verification</h3>
      <p className="text-[20px] text-[rgb(157,165,176)] mb-5">
        Enter an email address to verify its validity and deliverability
      </p>
      <div className="flex gap-3 mb-4 w-full max-sm:flex-col max-md:flex-col">
        <input
          className="singleMail w-full border p-2 rounded"
          type="text"
          placeholder="Enter an Email"
          ref={singleMail}
        />
        <button className="text-white bg-[#24A0ED] hover:opacity-70 px-4 py-2 rounded" onClick={handleVerify}>
          Verify
        </button>
      </div>

      {/*Show response in table */}
      {result && (
        <div className="mt-4">
          <h4 className="text-xl font-semibold mb-2">Verification Result:</h4>
          <table className="w-full border border-gray-300 text-left text-sm">
            <tbody>
              {Object.entries(result).map(([key, value]) => (
                <tr key={key} className="border-b border-gray-200">
                  <td className="font-medium p-2 capitalize text-gray-600">{key.replaceAll("_", " ")}</td>
                  <td className="p-2 text-gray-900">{String(value)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SingleMailVerification;
