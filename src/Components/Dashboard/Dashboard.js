import React, { useEffect } from "react";
import "./dashboard.css";
import Welcome from "../CommonComponents/Welcome/Welcome";
import ChartCard from "../CommonComponents/ChartCard/ChartCard";
import LineCharts from "../CommonComponents/LineChart/LineCharts";
import Histrogram from "../CommonComponents/Histrogram/Histrogram";
import PieC from "../CommonComponents/Pie/PieC";
export default function Dashboard() {
    const arr = [1, 2, 3];
   
  return (
    <div className="dashboard-container">
      <div className="welcome-info">
        <Welcome />
        <ChartCard />
      </div>

      <div className="line-charts">
        {arr.map((elem) => (
          <LineCharts elem={elem} />
        ))}
      </div>

      <div className="more-charts">
        <Histrogram/>
        <PieC/>
      </div>
    </div>
  );
}
