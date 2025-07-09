
import { College, YearlyPlacement } from '../data/collegeData';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

interface CollegeStatsProps {
  college: College;
  selectedYear: number;
}

const CollegeStats = ({ college, selectedYear }: CollegeStatsProps) => {
  const yearData = college.yearlyPlacements.find(yp => yp.year === selectedYear);
  
  if (!yearData) {
    return (
      <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
        <CardContent className="p-6">
          <p className="text-red-700">No placement data available for {selectedYear}</p>
        </CardContent>
      </Card>
    );
  }

  const overallPlacementRate = Math.round(
    yearData.placements.reduce((sum, p) => sum + p.placementPercentage, 0) / yearData.placements.length
  );

  return (
    <div className="space-y-6 mt-16">
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl text-blue-800">
            <GraduationCap className="h-6 w-6" />
            {college.name} - {selectedYear}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              {college.location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Est. {college.established}
            </div>
          </div>
        </CardHeader>
      </Card>

      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Placement Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Branch</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700">Placed (%)</th>
                </tr>
              </thead>
              <tbody>
                {yearData.placements.map((placement, index) => (
                  <tr key={placement.branch} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 text-gray-800">
                      {placement.branch === 'CSE' ? 'Computer Science and Engineering' :
                       placement.branch === 'ECE' ? 'Electronics and Communication Engineering' :
                       placement.branch === 'ME' ? 'Mechanical Engineering' :
                       placement.branch}
                    </td>
                    <td className="py-3 px-4 text-right font-medium text-gray-700">
                      {placement.placementPercentage}%
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-gray-300 bg-blue-50">
                  <td className="py-3 px-4 font-semibold text-gray-800">Overall</td>
                  <td className="py-3 px-4 text-right font-semibold text-gray-800">
                    {overallPlacementRate}%
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CollegeStats;