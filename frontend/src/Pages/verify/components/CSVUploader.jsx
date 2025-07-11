// CSVUploader.jsx
import { useState } from "react";
import Papa from "papaparse";
import { toast } from "react-toastify";

function CSVUploader({ onEmailsParsed }) {
  const [csvData, setCsvData] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        if (results.meta.fields.length === 0) {
          toast.error("CSV file has no headers.");
          return;
        }

        setCsvData(results.data);
        setSelectedColumn(""); // reset column
        toast.success("CSV uploaded! Please select email column.");
      },
    });
  };

  const handleColumnSelect = (e) => {
    const column = e.target.value;
    setSelectedColumn(column);

    const emails = csvData.map((row) => row[column]).filter((val) => !!val);
    onEmailsParsed(emails);
  };

  return (
    <div className="mt-6 border-t pt-4">
      <label className="block font-medium text-gray-700 mb-2">
        Upload CSV File
      </label>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="mb-4 color-sky-blue"
      />

      {csvData.length > 0 && (
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Select Column with Emails:
          </label>
          <select
            onChange={handleColumnSelect}
            className="p-2 border rounded w-full"
          >
            <option value="">-- Select Column --</option>
            {Object.keys(csvData[0]).map((col, idx) => (
              <option key={idx} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}

export default CSVUploader;
