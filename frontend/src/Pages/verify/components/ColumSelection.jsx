import { useState } from "react";
import Papa from "papaparse";
import ColumnModal from "./ColumnModal";

function ColumSelection() {
  const [columns, setColumns] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState("");
  const [columnData, setColumnData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData = results.data;
        const columnNames = Object.keys(parsedData[0]);
        setColumns(columnNames);
        setShowModal(true);
      },
    });
  };

  const extractColumn = (col) => {
    Papa.parse(document.getElementById("csvFile").files[0], {
      header: true,
      complete: (results) => {
        const data = results.data.map((row) => row[col]);
        setColumnData(data);
      },
    });
  };

  const handleModalClose = () => {
    if (selectedColumn) {
      extractColumn(selectedColumn);
      setShowModal(false);
    }
  };

  //API Call will be Here
  const handleSubmit = () => {
    console.log("Selected Column:", selectedColumn);
    console.log("Column Data:", columnData);
  };

  return (
    <>
      <div className="relative">
        <input
          type="file"
          accept=".csv"
          id="csvFile"
          onChange={handleFileUpload}
          className="chooseFile w-full border-2 border-gray-400 p-2 cursor-pointer"
        />

        {selectedColumn && columnData.length > 0 && (
          <button
            onClick={handleSubmit}
            className="bg-[#24A0ED] text-white mt-4 px-4 py-2 w-full rounded-md"
          >
            Verfiy Selected Column
          </button>
        )}
        {showModal && (
          <ColumnModal
            columns={columns}
            selectedColumn={selectedColumn}
            onSelect={setSelectedColumn}
            onClose={handleModalClose}
          />
        )}
      </div>
    </>
  );
}

export default ColumSelection;
