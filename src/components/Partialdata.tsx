"use client";
import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

export default function DifferentLength() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          color: "#F3E5AB", // vermelho
          valueFormatter: (value) => (value == null ? "NaN" : value.toString()),
        },
        {
          data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
          color: "#3b82f6", // azul
        },
        {
          data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
          color: "#FFFF00", // verde
          valueFormatter: (value) => (value == null ? "?" : value.toString()),
        },
      ]}
      height={350}
    />
  );
}
