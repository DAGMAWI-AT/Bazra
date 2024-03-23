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
  {
    name: "Month 1",
    Visited_User: 4000,

  },
  {
    name: "Month",
    Visited_User: 3000,

  },
  {
    name: "Month",
    Visited_User: 2000,

  },
  {
    name: "Month",
    Visited_User: 2780,

  },
  {
    name: "Month",
    Visited_User: 1890,
   
  },
  {
    name: "Month",
    Visited_User: 2390,
   
  },
  {
    name: "Month",
    Visited_User: 3490,
    pv: 4300,
    amt: 2100
  }
];

function Dashboard() {
  return (
    <div>

      {/* Adding CircleBar component */}
      <div style={{ textAlign: "center", marginTop: 20 ,marginBottom:30}}>
        <CircleBar percentage={70} /> 
      </div>


      <ResponsiveContainer className="bg-white p-5 ml-5 shadow-lg rounded-xl" width="70%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          {/* <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          /> */}
          <Line type="monotone" dataKey="Visited_User" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;
