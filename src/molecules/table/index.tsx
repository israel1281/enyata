import React from "react";

interface ITable {
  theadData?: JSX.Element;
  tbodyData?: JSX.Element;
}

export default function Table({ theadData, tbodyData }: ITable) {
  return (
    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-slate-100">{theadData}</thead>
        {tbodyData}
      </table>
    </div>
  );
}
