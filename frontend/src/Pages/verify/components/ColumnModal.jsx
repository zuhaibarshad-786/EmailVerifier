function ColumnModal({ columns, selectedColumn, onSelect, onClose }) {
  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-[8px] shadow-[0px_0px_5px_rgba(0,0,0,0.5)] w-[95%] max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Select a Column
        </h2>
        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
          {columns.map((col) => (
            <label key={col} className="flex items-center gap-2">
              <input
                type="radio"
                name="column"
                value={col}
                checked={selectedColumn === col}
                onChange={() => onSelect(col)}
              />
              <span>{col}</span>
            </label>
          ))}
        </div>
        <button
          onClick={onClose}
          disabled={!selectedColumn}
          className="bg-[#24A0ED] text-white px-4 py-2 rounded-md mt-4 w-full disabled:bg-gray-400"
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
}

export default ColumnModal;
