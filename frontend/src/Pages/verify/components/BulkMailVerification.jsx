import { useRef, useState } from "react";
import { toast } from "react-toastify";

function BulKMailVerification() {
  const bulkMails = useRef("");
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState(null);

  const handleBulkVerify = async () => {
    const input = bulkMails.current.value.trim();

    if (!input) {
      toast.error("Please enter emails.");
      return;
    }

    const emailList = input
      .split("\n")
      .map((email) => email.trim())
      .filter((email) => email.length > 0);

    try {
      const response = await fetch("http://127.0.0.1:8000/validate-email/bulk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emails: emailList }),
      });

      const data = await response.json();

      if (data.results && Array.isArray(data.results)) {
        setResults(data.results);
        setSummary({
          total: data.total_emails,
          time: data.processing_time_seconds,
          avg: data.average_time_per_email,
        });
      } else {
        toast.error("Unexpected response format.");
      }

      bulkMails.current.value = "";
    } catch (error) {
      console.error("Bulk verification failed:", error);
      toast.error("Error verifying emails.");
    }
  };

  return (
    <div className="mb-5 p-5 flex flex-col justify-center w-[60%] mx-auto rounded-[8px] shadow-xl border border-[rgb(157,165,176)] max-sm:w-[95%] max-md:w-[95%] animate-fade-in-down">
      <h3 className="font-[600] text-3xl">Bulk Email Verification</h3>
      <p className="text-[20px] text-[rgb(157,165,176)]">
        Enter multiple email addresses (one per line)
      </p>

      <textarea
        className="bulkMail w-full mt-3 p-2 border rounded"
        rows={6}
        placeholder={`user1@gmail.com\nuser2@gmail.com\nuser3@gmail.com`}
        ref={bulkMails}
      ></textarea>

      <button
        className="mt-4 py-3 px-5 text-white bg-[#24A0ED] hover:opacity-70 rounded"
        onClick={handleBulkVerify}
      >
        Verify
      </button>

      {summary && (
        <div className="mt-6 text-sm text-gray-700">
          <p><strong>Total Emails:</strong> {summary.total}</p>
          <p><strong>Processing Time (sec):</strong> {summary.time}</p>
          <p><strong>Average Time/Email (sec):</strong> {summary.avg}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-8 overflow-x-auto">
          <h4 className="text-xl font-semibold mb-3">Verification Results:</h4>
          <table className="min-w-full border text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Status</th>
                <th className="px-4 py-2 border">Sub-Status</th>
                <th className="px-4 py-2 border">Free Email</th>
                <th className="px-4 py-2 border">Disposable</th>
                <th className="px-4 py-2 border">Account</th>
                <th className="px-4 py-2 border">Domain</th>
                <th className="px-4 py-2 border">Domain Age</th>
                <th className="px-4 py-2 border">SMTP Provider</th>
                <th className="px-4 py-2 border">MX Found</th>
                <th className="px-4 py-2 border">MX Record</th>
                <th className="px-4 py-2 border">Catch All</th>
                <th className="px-4 py-2 border">Blacklisted</th>
              </tr>
            </thead>
            <tbody>
              {results.map((res, index) => (
                <tr key={index} className="bg-white">
                  <td className="px-4 py-2 border">{res.email}</td>
                  <td className="px-4 py-2 border">{res.status}</td>
                  <td className="px-4 py-2 border">{res.sub_status}</td>
                  <td className="px-4 py-2 border">{res.free_email ? "Yes" : "No"}</td>
                  <td className="px-4 py-2 border">{res.disposable_email ? "Yes" : "No"}</td>
                  <td className="px-4 py-2 border">{res.account}</td>
                  <td className="px-4 py-2 border">{res.domain}</td>
                  <td className="px-4 py-2 border">{res.domain_age_days}</td>
                  <td className="px-4 py-2 border">{res.smtp_provider}</td>
                  <td className="px-4 py-2 border">{res.mx_found ? "Yes" : "No"}</td>
                  <td className="px-4 py-2 border">{res.mx_record}</td>
                  <td className="px-4 py-2 border">{res.is_catch_all ? "Yes" : "No"}</td>
                  <td className="px-4 py-2 border">{res.blacklisted ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default BulKMailVerification;
