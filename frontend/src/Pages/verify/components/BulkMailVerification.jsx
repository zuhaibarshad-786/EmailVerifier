// BulkMailVerification.jsx
import { useRef, useState } from "react";
import BulkEmailUI from "./BulkEmailUI";
import { toast } from "react-toastify";

function BulkEmailLogic() {
  const bulkMails = useRef("");
  const [results, setResults] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      setResults([]);
      setSummary(null);

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <BulkEmailUI
      bulkMails={bulkMails}
      results={results}
      summary={summary}
      loading={loading}
      handleBulkVerify={handleBulkVerify}
    />
  );
}

export default BulkEmailLogic;
