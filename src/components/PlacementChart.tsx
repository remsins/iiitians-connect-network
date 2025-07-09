import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { PlacementData } from '../data/collegeData';

interface PlacementChartProps {
  data: PlacementData[];
}

const PlacementChart = ({ data }: PlacementChartProps) => {
  return (
    <div className="w-full bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        Placement Packages by Branch (LPA)
      </h3>

      {/* Increased height to make bars taller */}
      <ResponsiveContainer width="100%" height={450}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
          barCategoryGap={20}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="branch"
            tick={{ fill: '#4B5563', fontSize: 14 }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: '#4B5563', fontSize: 14 }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickLine={false}
            label={{
              value: 'Package (LPA)',
              angle: -90,
              position: 'insideLeft',
              fill: '#4B5563',
              fontSize: 14,
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
              fontSize: '14px',
            }}
            formatter={(value, name) => [`₹${value} LPA`, name]}
          />
          <Legend
            verticalAlign="bottom"
            align="center"
            height={40}
            wrapperStyle={{
              paddingTop: 20,
              fontSize: 14,
            }}
          />
          <Bar
            dataKey="highestPackage"
            name="Highest Package"
            fill="#3B82F6"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="averagePackage"
            name="Average Package"
            fill="#10B981"
            radius={[6, 6, 0, 0]}
          />
          <Bar
            dataKey="lowestPackage"
            name="Lowest Package"
            fill="#F59E0B"
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlacementChart;
