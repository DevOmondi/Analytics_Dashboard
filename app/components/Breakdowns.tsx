import React from "react";


interface breakdownProps {
  breakdowntitle: string;
  figure: string;
}

const Breakdowns: React.FC<breakdownProps> = ({ breakdowntitle, figure }) => {
  return (
    <>
      <div className="flex flex-col">
        <p>{breakdowntitle}</p>
        <span className="text-secondary-inverse text-xl tracking-[-0.115rem] font-bold">
          {figure}
        </span>
      </div>
    </>
  );
};

export default Breakdowns;
