"use client";

import React from "react";
import { useState, useMemo } from "react";

import "ag-grid-community/styles/ag-grid.css";
import { AgGridReact } from "ag-grid-react";

import {
  ColDef,
  ICellRendererParams,
  ValueFormatterParams,
} from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";

/* Format Date Cells */
const dateFormatter = (params: ValueFormatterParams): string => {
  return new Date(params.value).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
const UpcomingInvoices = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { school_name: "Tesla", due_date: "20000123T012345.678+0900", amount_due: 64950 },
    { school_name: "Ford", due_date: "20000123T012345.678+0900", amount_due: 33850 },
    { school_name: "Toyota", due_date: "20000123T012345.678+0900", amount_due: 29600 },
  ]);
  // Column Definitions.
  const [colDefs] = useState<ColDef[]>([
    {
      field: "school_name",
      headerName: "School",
      width: 200,
    },
    {
      field: "due_date",
      headerName: "Due Date",
      width: 250,
      valueFormatter: dateFormatter,
      checkboxSelection: true,
    },
    {
      field: "amount_due",
      headerName: "Amount Due",
      width: 225,
    },
    {
      field: "amount",
      headerName: "Amount",
      width: 130,
    },
    // {
    //   field: "statusComplete",
    //   headerName: "Purchase Successful?",
    //   width: 200,
    //   cellRenderer: MissionResultRenderer,
    // },
  ]);

  // Apply settings across all columns
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      filter: true,
      editable: true,
    };
  }, []);
  return (
    <>
      <div
        // className={"ag-theme-quartz font-nunito"}
        style={{ width: "100%", height: "20rem" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          pagination={true}
          rowSelection="multiple"
          rowMultiSelectWithClick={true}
          onSelectionChanged={(event) => console.log(event)}
          // onSelectionChanged={}
          onCellValueChanged={(event) =>
            console.log(`New Cell Value: ${event.value}`)
          }
        />
      </div>
    </>
  );
};

export default UpcomingInvoices;
