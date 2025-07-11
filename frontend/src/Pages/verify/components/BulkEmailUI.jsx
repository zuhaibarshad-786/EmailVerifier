// BulkEmailUI.jsx
import CSVUploader from "../components/CSVUploader";

function BulkEmailUI({
  bulkMails,
  results,
  summary,
  loading,
  handleBulkVerify,
}) {
  const getSummaryCounts = () => {
    let valid = 0,
      invalid = 0,
      catchAll = 0;
    results.forEach((res) => {
      if (res.status === "valid") valid++;
      if (res.status === "invalid") invalid++;
      if (res.is_catch_all) catchAll++;
    });
    return { valid, invalid, catchAll };
  };

  const { valid, invalid, catchAll } = getSummaryCounts();

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

      <CSVUploader onEmailsParsed={(emails) => handleBulkVerify(emails)} />

      {loading && (
        <div className="flex justify-center items-center py-6">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      )}

      {results.length > 0 && !loading && (
        <>
          {/* Cards */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <div className="flex-1 min-w-[200px] bg-white border border-blue-100 shadow-md rounded-lg p-4 text-center">
              <h4 className="text-lg font-semibold text-blue-600">
                Valid Emails
              </h4>
              <p className="text-2xl font-bold text-blue-800 mt-2">{valid}</p>
            </div>

            <div className="flex-1 min-w-[200px] bg-white border border-red-100 shadow-md rounded-lg p-4 text-center">
              <h4 className="text-lg font-semibold text-red-600">
                Invalid Emails
              </h4>
              <p className="text-2xl font-bold text-red-800 mt-2">{invalid}</p>
            </div>

            <div className="flex-1 min-w-[200px] bg-white border border-yellow-100 shadow-md rounded-lg p-4 text-center">
              <h4 className="text-lg font-semibold text-yellow-600">
                Catch-All
              </h4>
              <p className="text-2xl font-bold text-yellow-700 mt-2">
                {catchAll}
              </p>
            </div>
          </div>
        {/* Summary of totalmails time and avgmails */}
          {summary && (
  <div className="mt-6 w-full bg-[#f4f9ff] border border-[#dbeafe] rounded-lg px-6 py-4 shadow-sm">
    <h4 className="text-lg font-semibold text-[#1e40af] mb-3">Verification Summary</h4>
    <div className="flex flex-wrap justify-between gap-6 text-sm text-gray-700">
      <div className="flex flex-col">
        <span className="font-medium text-gray-500">Total Emails:</span>
        <span className="text-xl font-semibold text-[#0f172a]">{summary.total}</span>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-gray-500">Processing Time:</span>
        <span className="text-xl font-semibold text-[#0f172a]">{summary.time} sec</span>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-gray-500">Avg Time/Email:</span>
        <span className="text-xl font-semibold text-[#0f172a]">{summary.avg} sec</span>
      </div>
    </div>
  </div>
)}
          {/* Table */}
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
                    } hover:bg-blue-50`}
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
                    <td className="px-4 py-2 border-b">
                      {res.domain_age_days}
                    </td>
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
        </>
      )}
    </div>
  );
}
export default BulkEmailUI;
