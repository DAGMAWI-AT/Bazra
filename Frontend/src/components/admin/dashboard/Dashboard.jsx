import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import CircleBar from "./CircleBar";
const data = [
  {  name: "Month 1",Visited_User: 100,},
  {  name: "Month", Visited_User: 300,},
  { name: "Month", Visited_User: 200,},
  { name: "Month", Visited_User: 278,},
  { name: "Month", Visited_User: 190,},
  {  name: "Month", Visited_User: 230,},
  {  name: "Month",Visited_User: 390, pv: 4300,amt: 2100}
];

function Dashboard() {
  return (
    <div>
      {/* Adding CircleBar component */}
      <div className="text-center mt-5 mb-10">
        <CircleBar percentage={70} /> 
      </div>

      <ResponsiveContainer className="bg-white p-1 pt-2 md:ml-5 md:shadow-lg md:rounded-xl" width="97%" height={300}>
        <LineChart
          data={data}

        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Visited_User" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;
