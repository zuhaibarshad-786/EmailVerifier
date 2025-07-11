import { useRef, useState } from "react";
import { toast } from "react-toastify";
import CSVUploader from "../components/CSVUploader"; // adjust path as needed

function BulKMailVerification() {
  const bulkMails = useRef("");
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false); // Spinner state

  const handleBulkVerify = async (emailsFromCSV = null) => {
    let emailList = [];

    if (emailsFromCSV && emailsFromCSV.length) {
      emailList = emailsFromCSV;
    } else {
      const input = bulkMails.current.value.trim();
      if (!input) {
        toast.error("Please enter emails.");
        return;
      }
      emailList = input
        .split("\n")
        .map((email) => email.trim())
        .filter((email) => email.length > 0);
    }

    try {
      setLoading(true); // Start loading
      setResults([]);
      setSummary(null);

      const response = await fetch(
        "http://127.0.0.1:8000/validate-email/bulk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emails: emailList }),
        }
      );

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
    } finally {
      setLoading(false); // Stop loading
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
        className="mt-4 py-3 px-5 text-white bg-[#24A0ED] hover:opacity-70 rounded disabled:opacity-60"
        onClick={() => handleBulkVerify()}
        disabled={loading}
      >
        {loading ? "Verifying..." : "Verify"}
      </button>

      {/*Add CSVUploader component */}
      <CSVUploader onEmailsParsed={(emails) => handleBulkVerify(emails)} />

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center py-6">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {summary && !loading && (
        <div className="mt-6 text-sm text-gray-700">
          <p>
            <strong>Total Emails:</strong> {summary.total}
          </p>
          <p>
            <strong>Processing Time (sec):</strong> {summary.time}
          </p>
          <p>
            <strong>Average Time/Email (sec):</strong> {summary.avg}
          </p>
        </div>
      )}

      {results.length > 0 && !loading && (
        <div className="mt-8 overflow-x-auto">
          <h4 className="text-2xl font-semibold mb-4 text-[#222]">
            Verification Results:
          </h4>
          <table className="min-w-full text-sm text-left rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <thead className="bg-[#f5f8fa] text-gray-600 uppercase text-xs tracking-wider">
              <tr>
                {[
                  "Email",
                  "Status",
                  "Sub-Status",
                  "Free Email",
                  "Disposable",
                  "Account",
                  "Domain",
                  "Domain Age",
                  "SMTP Provider",
                  "MX Found",
                  "MX Record",
                  "Catch All",
                  "Blacklisted",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-4 py-3 border-b border-gray-200 whitespace-nowrap"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white text-gray-800">
              {results.map((res, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-[#f9fbfd]"
                  } hover:bg-blue-50 transition-colors`}
                >
                  <td className="px-4 py-2 border-b">{res.email}</td>
                  <td className="px-4 py-2 border-b">{res.status}</td>
                  <td className="px-4 py-2 border-b">{res.sub_status}</td>
                  <td className="px-4 py-2 border-b">
                    {res.free_email ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {res.disposable_email ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 border-b">{res.account}</td>
                  <td className="px-4 py-2 border-b">{res.domain}</td>
                  <td className="px-4 py-2 border-b">{res.domain_age_days}</td>
                  <td className="px-4 py-2 border-b">{res.smtp_provider}</td>
                  <td className="px-4 py-2 border-b">
                    {res.mx_found ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 border-b">{res.mx_record}</td>
                  <td className="px-4 py-2 border-b">
                    {res.is_catch_all ? "Yes" : "No"}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {res.blacklisted ? "Yes" : "No"}
                  </td>
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
