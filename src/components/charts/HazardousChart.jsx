import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

const HazardousChart = ({ data }) => {

  return (
    <div style={{ width: "100%", height: 300 }}>

      <ResponsiveContainer>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar dataKey="value" fill="#ff4d4f" />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
};

export default HazardousChart;