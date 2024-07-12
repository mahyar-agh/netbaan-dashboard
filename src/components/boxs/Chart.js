import { BarChart, Bar, ResponsiveContainer } from "recharts";

function Chart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={data}>
        <Bar dataKey={(v) => v} fill="#478BD1" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
