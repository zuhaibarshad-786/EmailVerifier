import { useState } from "react";
import { toast } from "react-toastify";
import Papa from "papaparse";

function CSVEmailVerifier() {
  const [emails, setEmails] = useState([]);
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState(null);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [columns, setColumns] = useState([]);
  const [csvData, setCsvData] = useState([]);

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data;
        const columnNames = Object.keys(data[0]);
        setColumns(columnNames);
        setCsvData(data);
        toast.success("CSV uploaded. Now select a column containing emails.");
      },
      error: () => toast.error("Failed to parse CSV."),
    });
  };

  const handleVerify = async () => {
    if (!selectedColumn) {
      toast.error("Please select a column first.");
      return;
    }

    const extractedEmails = csvData
      .map((row) => row[selectedColumn]?.trim())
      .filter((email) => email?.length > 0);

    if (extractedEmails.length === 0) {
      toast.error("No emails found in selected column.");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/validate-email/bulk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emails: extractedEmails }),
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
    } catch (error) {
      console.error("Bulk verification failed:", error);
      toast.error("Error verifying emails.");
    }
  };

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold mb-2">CSV Email Verification</h3>

      <input
        type="file"
        accept=".csv"
        className="mb-4"
        onChange={handleCSVUpload}
      />

      {columns.length > 0 && (
        <div className="mb-4">
          <label className="mr-2">Select Email Column:</label>
          <select
            className="p-2 border rounded"
            onChange={(e) => setSelectedColumn(e.target.value)}
          >
            <option value="">--Select--</option>
            {columns.map((col, idx) => (
              <option key={idx} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:opacity-80"
        onClick={handleVerify}
      >
        Verify Emails
      </button>

      {summary && (
        <div className="mt-5 text-sm">
          <p><strong>Total Emails:</strong> {summary.total}</p>
          <p><strong>Processing Time (sec):</strong> {summary.time}</p>
          <p><strong>Average Time/Email (sec):</strong> {summary.avg}</p>
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-5 overflow-x-auto">
          <h4 className="text-xl font-semibold mb-3">Verification Results</h4>
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100">
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

export default CSVEmailVerifier;
