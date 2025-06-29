import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PlacementData } from '../data/collegeData';

interface PlacementChartProps {
  data: PlacementData[];
}

const PlacementChart = ({ data }: PlacementChartProps) => {
  return (
    <div className="w-full h-96 bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Placement Packages by Branch (LPA)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="branch" 
            stroke="#666"
            fontSize={12}
            fontWeight="500"
          />
          <YAxis 
            stroke="#666"
            fontSize={12}
            label={{ value: 'Package (LPA)', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value, name) => [`₹${value} LPA`, name]}
          />
          <Legend />
          <Bar 
            dataKey="highestPackage" 
            fill="#3b82f6" 
            name="Highest Package"
            radius={[2, 2, 0, 0]}
          />
          <Bar 
            dataKey="averagePackage" 
            fill="#10b981" 
            name="Average Package"
            radius={[2, 2, 0, 0]}
          />
          <Bar 
            dataKey="lowestPackage" 
            fill="#f59e0b" 
            name="Lowest Package"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PlacementChart;