"use client";

import React from "react";
import { Chart } from "react-google-charts";

interface barData {
  category: string;
  figure: number;
  bar_color: string;
}

interface signUpDataProps {
  signUpData: {
    title: string;
    barDataArray: barData[];
  };
}

const Barchart: React.FC<signUpDataProps> = ({signUpData}) => {
  const data = [
    [
      "Category",
      "Sign-ups",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Primary", 894, "#b87333", null],
    ["Secondary", 1049, "silver", null],
    ["IGCSE", 193, "gold", null],
  ];
  const options = {
    title: signUpData.title,
    width: 400,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  return (
    <>
      {/* <div className=""> */}

      <div>
        <Chart
          chartType="BarChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Barchart;
