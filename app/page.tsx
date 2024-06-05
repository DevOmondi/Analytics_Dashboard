import Sidebar from "./ui/Sidebar";
import Header from "./ui/Header";
import Overviewcard from "./components/Overviewcard";
import Piechart from "./components/Piechart";
import Barchart from "./components/Barchart";
import IncomingInvoices from "./components/Upcoming_Invoices";

import data from "../data.json";

export default function Home() {
  return (
    <main className="bg-[#ffffff] min-h-full relative">
      <Header />
      {/* Overview section */}
      <div>
        <h1 className="text-black ml-[18rem] mt-[2rem] text-2xl font-bold">
          Overview
        </h1>
        <div className="ml-[18rem] my-[2rem] w-[80%] ">
         <div className="flex flex-col lg:flex-row gap-[1rem] text-center justify-between">
         {data?.overview.map((cardData) => (
            <Overviewcard key={cardData.title} cardData={cardData} />
          ))}
         </div>
        </div>
      </div>
      {/* Targets section */}
      <div className=" mt-[2rem] ml-[18rem] bg-slate-100 py-[2rem] w-[80%] rounded-lg shadow-lg">
        <h1 className="text-black text-2xl mb-[2rem] font-bold ">Targets</h1>
        <div className="flex flex-col lg:flex-row px-[2rem] text-center justify-between ">
          {data?.targets.map((targetData) => (
            <Piechart key={targetData.targetTitle} targetData={targetData} />
          ))}
        </div>
      </div>
      {/* Sign ups section */}
      <div className="mt-[2rem] ml-[18rem] bg-slate-100 py-[2rem] w-[80%] rounded-lg shadow-lg">
        <h1 className="text-black text-2xl mb-[2rem] font-bold ">Sign-ups</h1>
        <div className="flex flex-col lg:flex-row px-[2rem] text-center justify-between ">
          {data?.sign_ups.map((signUpData) => (
            <Barchart key={signUpData.title} signUpData={signUpData} />
          ))}
        </div>
      </div>
      {/* <IncomingInvoices/> */}
      <Sidebar />
    </main>
  );
}
