"use client";

import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "./dataset/wether";

const chartSetting = {
  xAxis: [
    {
      label: "Quantidade de vendas",
    },
  ],
  height: 400,
};

export default function HorizontalBars() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Quantidade de vendas por mes
      </h2>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[
          {
            dataKey: "vendas",
            label: "Quantidade de vendas",
            valueFormatter,
            color: "#3b82f6",
          },
        ]}
        layout="horizontal"
        xAxis={[{ label: "Quantidade" }]}
        height={400}
      />
    </div>
  );
}
