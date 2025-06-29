import React, { useMemo, useState } from 'react';
import Navigation from '@/components/Navigation';
import {
  Calendar,
  GraduationCap,
  Trophy,
  ChevronDown,
  ChevronUp,
  BarChart
} from 'lucide-react';

import { collegeData, sortColleges, SortOption, getAvailableYears } from '@/data/collegeData';
import CollegeSelector from '@/components/CollegeSelector';
import CollegeSorter from '@/components/CollegeSorter';
import YearSelector from '@/components/YearSelector';
import PlacementChart from '@/components/PlacementChart';
import CollegeStats from '@/components/CollegeStats';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Placements = () => {
  const [selectedCollegeId, setSelectedCollegeId] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [sortOption, setSortOption] = useState<SortOption>('highest-package');
  const [showRankings, setShowRankings] = useState<boolean>(false);

  const availableYears = useMemo(() => getAvailableYears(), []);
  const sortedColleges = useMemo(() => sortColleges(collegeData, sortOption, selectedYear), [sortOption, selectedYear]);

  const selectedCollege = useMemo(() => collegeData.find(college => college.id === selectedCollegeId), [selectedCollegeId]);

  const selectedCollegeYearData = useMemo(() => {
    if (!selectedCollege) return null;
    return selectedCollege.yearlyPlacements.find(y => y.year === selectedYear);
  }, [selectedCollege, selectedYear]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Navigation />
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <GraduationCap className="h-10 w-10 text-blue-600" />
            College Placement Analytics
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore placement statistics of IIITs. Compare packages, placement rates, and make informed decisions.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
            <CollegeSelector
              colleges={collegeData}
              selectedCollege={selectedCollegeId}
              onCollegeChange={setSelectedCollegeId}
            />
            <YearSelector
              years={availableYears}
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
            />
            <Button
              variant="outline"
              onClick={() => setShowRankings(!showRankings)}
              className="flex items-center gap-2 px-6"
            >
              <Trophy className="h-4 w-4" />
              {showRankings ? 'Hide' : 'View'} Rankings
              {showRankings ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Rankings */}
        {showRankings && (
          <div className="mb-8">
            <Card className="bg-white shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <CardTitle className="flex items-center gap-2 text-xl text-gray-800">
                    <Trophy className="h-6 w-6 text-yellow-600" />
                    College Rankings - {selectedYear}
                  </CardTitle>
                  <CollegeSorter sortOption={sortOption} onSortChange={setSortOption} />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {sortedColleges.slice(0, 9).map((college, index) => {
                    const yearData = college.yearlyPlacements.find(yp => yp.year === selectedYear);
                    if (!yearData) return null;

                    const stats = {
                      highest: Math.max(...yearData.placements.map(p => p.highestPackage)),
                      average: (yearData.placements.reduce((sum, p) => sum + p.averagePackage, 0) / yearData.placements.length).toFixed(1)
                    };

                    const rankColors = {
                      0: 'from-yellow-100 to-yellow-200 border-yellow-300 text-yellow-800',
                      1: 'from-gray-100 to-gray-200 border-gray-300 text-gray-800',
                      2: 'from-orange-100 to-orange-200 border-orange-300 text-orange-800',
                    };

                    const defaultColor = 'from-blue-50 to-blue-100 border-blue-200 text-blue-800';
                    const colorClass = rankColors[index as keyof typeof rankColors] || defaultColor;

                    return (
                      <div
                        key={college.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 hover:shadow-md bg-gradient-to-r ${colorClass} ${
                          selectedCollegeId === college.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                        }`}
                        onClick={() => setSelectedCollegeId(college.id)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold">#{index + 1}</span>
                            {index < 3 && (
                              <Trophy className={`h-5 w-5 ${
                                index === 0 ? 'text-yellow-500' :
                                index === 1 ? 'text-gray-500' :
                                'text-orange-500'
                              }`} />
                            )}
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-700">
                              ₹{sortOption === 'highest-package' ? stats.highest : stats.average} LPA
                            </div>
                            <div className="text-xs opacity-75">
                              {sortOption === 'highest-package' ? 'Highest' : 'Average'}
                            </div>
                          </div>
                        </div>
                        <h3 className="font-semibold text-sm mb-1 line-clamp-2">{college.name}</h3>
                        <p className="text-xs opacity-75">{college.location}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Selected College Section */}
        {selectedCollege && selectedCollegeYearData ? (
          <div className="space-y-8">
            <CollegeStats college={selectedCollege} selectedYear={selectedYear} />
            <PlacementChart data={selectedCollegeYearData.placements} />
          </div>
        ) : selectedCollege ? (
          <Card className="bg-white shadow-lg border-yellow-200 border-2">
            <CardContent className="text-center py-16">
              <Calendar className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Data Available</h3>
              <p className="text-gray-500">No placement data available for {selectedCollege.name} in {selectedYear}. Please select a different year.</p>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white shadow-lg">
            <CardContent className="text-center py-16">
              <BarChart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Select a College</h3>
              <p className="text-gray-500">Choose a college from the dropdown above to view placement statistics.</p>
            </CardContent>
          </Card>
        )}

        {/* Footer Text */}
        <div className="mt-16 text-center text-gray-500 text-sm">
          <p>Data shown here is sample/demo data. Add real college placement info in <code>collegeData.ts</code>.</p>
        </div>
      </div>
    </div>
  );
};

export default Placements;
