"use client";

import React from "react";
import { Chart } from "react-google-charts";

interface targetProps {
  targetData: { targetTitle: string; actualNo: number; targetNo: number };
}

const Piechart: React.FC<targetProps> = ({ targetData }) => {
  const analyticsData = [
    ["Task", "Sign Ups"],
    ["Target", targetData.targetNo],
    ["Achieved", targetData.actualNo],
  ];

  const analyticsOptions = {
    title: targetData.targetTitle,
  };

  return (
    <>
      <div className="rounded-lg">
        <Chart
          chartType="PieChart"
          data={analyticsData}
          options={analyticsOptions}
          width={"100%"}
          height={"400px"}
        />
      </div>
    </>
  );
};

export default Piechart;
