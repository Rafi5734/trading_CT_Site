import { useState } from "react";
import BotTable from "./BotTable";
import HigherTable from "./HigherTable";
import LowerTable from "./LowerTable";

const RecentTrade = () => {
  const [selectedTable, setSelectedTable] = useState("bot");

  const renderTable = () => {
    switch (selectedTable) {
      case "bot":
        return (
          <BotTable />
        );
      case "higher":
        return (
          <HigherTable />
        );
      case "lower":
        return (
          <LowerTable />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="main-container mt-8">
        <div className="w-full h-screen rounded -mt-[65px] md:-mt-[5px] lg:-mt-[19px] xl:-mt-[15px] font-montserrat">
          <p className="titleStyle">
            Recent <span>Trade</span>
          </p>

          <div className="mb-3 w-fit bg-primary text-white rounded-lg px-1 pl-2 py-[4px] font-montserrat text-[16px]">
            <label htmlFor="tableSelect">Trade Type: </label>
            <select
              id="tableSelect"
              onChange={(e) => setSelectedTable(e.target.value)}
              value={selectedTable}
              className="px-1 py-1 focus:outline-none rounded-lg text-[14px]"
            >
              <option value="bot">Bot Table</option>
              <option value="higher">Higher Table</option>
              <option value="lower">Lower Table</option>
            </select>
          </div>

          {renderTable()}

        </div>
      </div>
    </div>
  );
};

export default RecentTrade;