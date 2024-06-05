import React from "react";

import Breakdowns from "./Breakdowns";

interface breakdownData {
  breakdowntitle: string;
  figure: string;
}

interface CardProps {
  cardData: {
    title: string;
    total: string;
    growth: string;
    breakdown: breakdownData[];
  };
}

const Overviewcard: React.FC<CardProps> = ({ cardData }) => {
  return (
    <>
      {/* Card Details*/}
      <div className="rounded-md border-dashed border-[1px] relative shadow-lg flex-1 bg-slate-100 flex flex-col gap-[2rem] text-black p-[2rem] items-center">
        <p className="font-semibold">{cardData?.title}</p>
        <span className="text-secondary-inverse text-4xl tracking-[-0.115rem] font-bold">
          {cardData?.total}
        </span>
        <div className="flex justify-between gap-[2rem]">
          {cardData?.breakdown?.map((breakdownObject) => (
            <Breakdowns
              key={breakdownObject.breakdowntitle}
              breakdowntitle={breakdownObject.breakdowntitle}
              figure={breakdownObject.figure}
            />
          ))}
        </div>
          <span className="inline-flex items-center absolute bottom-[0rem] left-[2rem]  px-2 py-1 mr-auto font-semibold text-center align-baseline rounded-lg text-base/none text-green bg-green-100 border border-green">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
              ></path>
            </svg>
            {cardData?.growth}
          </span>
        </div>
    </>
  );
};

export default Overviewcard;
