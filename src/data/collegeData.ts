export interface PlacementData {
  branch: string;
  highestPackage: number;
  averagePackage: number;
  lowestPackage: number;
  placementPercentage: number;
  studentsPlaced: number;
  totalStudents: number;
}

export interface YearlyPlacement {
  year: number;
  placements: PlacementData[];
}

export interface College {
  id: string;
  name: string;
  location: string;
  established: number;
  yearlyPlacements: YearlyPlacement[];
}

export type SortOption = 'highest-package' | 'average-package';

export const collegeData: College[] = [
  {
    id: '1',
    name: 'Indian Institute of Information Technology, Kota',
    location: 'Kota, Rajasthan',
    established: 1961,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 82, averagePackage: 25, lowestPackage: 12, placementPercentage: 95, studentsPlaced: 190, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 65, averagePackage: 22, lowestPackage: 10, placementPercentage: 92, studentsPlaced: 138, totalStudents: 150 },
          { branch: 'ME', highestPackage: 45, averagePackage: 18, lowestPackage: 8, placementPercentage: 88, studentsPlaced: 132, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 78, averagePackage: 23, lowestPackage: 11, placementPercentage: 93, studentsPlaced: 186, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 62, averagePackage: 20, lowestPackage: 9, placementPercentage: 90, studentsPlaced: 135, totalStudents: 150 },
          { branch: 'ME', highestPackage: 42, averagePackage: 16, lowestPackage: 7, placementPercentage: 85, studentsPlaced: 128, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 75, averagePackage: 21, lowestPackage: 10, placementPercentage: 91, studentsPlaced: 182, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 58, averagePackage: 18, lowestPackage: 8, placementPercentage: 87, studentsPlaced: 131, totalStudents: 150 },
          { branch: 'ME', highestPackage: 38, averagePackage: 14, lowestPackage: 6, placementPercentage: 82, studentsPlaced: 123, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Indian Institute of Technology, Bombay',
    location: 'Mumbai',
    established: 1958,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 85, averagePackage: 26, lowestPackage: 13, placementPercentage: 96, studentsPlaced: 192, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 68, averagePackage: 23, lowestPackage: 11, placementPercentage: 94, studentsPlaced: 141, totalStudents: 150 },
          { branch: 'ME', highestPackage: 48, averagePackage: 19, lowestPackage: 9, placementPercentage: 90, studentsPlaced: 135, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 81, averagePackage: 24, lowestPackage: 12, placementPercentage: 94, studentsPlaced: 188, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 64, averagePackage: 21, lowestPackage: 10, placementPercentage: 92, studentsPlaced: 138, totalStudents: 150 },
          { branch: 'ME', highestPackage: 44, averagePackage: 17, lowestPackage: 8, placementPercentage: 87, studentsPlaced: 131, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 77, averagePackage: 22, lowestPackage: 11, placementPercentage: 92, studentsPlaced: 184, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 60, averagePackage: 19, lowestPackage: 9, placementPercentage: 89, studentsPlaced: 134, totalStudents: 150 },
          { branch: 'ME', highestPackage: 40, averagePackage: 15, lowestPackage: 7, placementPercentage: 84, studentsPlaced: 126, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Indian Institute of Technology, Madras',
    location: 'Chennai',
    established: 1959,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 80, averagePackage: 24, lowestPackage: 12, placementPercentage: 94, studentsPlaced: 188, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 63, averagePackage: 21, lowestPackage: 10, placementPercentage: 91, studentsPlaced: 137, totalStudents: 150 },
          { branch: 'ME', highestPackage: 43, averagePackage: 17, lowestPackage: 8, placementPercentage: 86, studentsPlaced: 129, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 76, averagePackage: 22, lowestPackage: 11, placementPercentage: 92, studentsPlaced: 184, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 59, averagePackage: 19, lowestPackage: 9, placementPercentage: 88, studentsPlaced: 132, totalStudents: 150 },
          { branch: 'ME', highestPackage: 39, averagePackage: 15, lowestPackage: 7, placementPercentage: 83, studentsPlaced: 125, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 72, averagePackage: 20, lowestPackage: 10, placementPercentage: 90, studentsPlaced: 180, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 55, averagePackage: 17, lowestPackage: 8, placementPercentage: 85, studentsPlaced: 128, totalStudents: 150 },
          { branch: 'ME', highestPackage: 35, averagePackage: 13, lowestPackage: 6, placementPercentage: 80, studentsPlaced: 120, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Indian Institute of Technology, Kanpur',
    location: 'Kanpur',
    established: 1959,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 78, averagePackage: 23, lowestPackage: 11, placementPercentage: 93, studentsPlaced: 186, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 61, averagePackage: 20, lowestPackage: 9, placementPercentage: 89, studentsPlaced: 134, totalStudents: 150 },
          { branch: 'ME', highestPackage: 41, averagePackage: 16, lowestPackage: 7, placementPercentage: 84, studentsPlaced: 126, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 74, averagePackage: 21, lowestPackage: 10, placementPercentage: 91, studentsPlaced: 182, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 57, averagePackage: 18, lowestPackage: 8, placementPercentage: 86, studentsPlaced: 129, totalStudents: 150 },
          { branch: 'ME', highestPackage: 37, averagePackage: 14, lowestPackage: 6, placementPercentage: 81, studentsPlaced: 122, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 70, averagePackage: 19, lowestPackage: 9, placementPercentage: 89, studentsPlaced: 178, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 53, averagePackage: 16, lowestPackage: 7, placementPercentage: 83, studentsPlaced: 125, totalStudents: 150 },
          { branch: 'ME', highestPackage: 33, averagePackage: 12, lowestPackage: 5, placementPercentage: 78, studentsPlaced: 117, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '5',
    name: 'Indian Institute of Technology, Kharagpur',
    location: 'Kharagpur',
    established: 1951,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 76, averagePackage: 22, lowestPackage: 10, placementPercentage: 92, studentsPlaced: 184, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 59, averagePackage: 19, lowestPackage: 8, placementPercentage: 87, studentsPlaced: 131, totalStudents: 150 },
          { branch: 'ME', highestPackage: 39, averagePackage: 15, lowestPackage: 6, placementPercentage: 82, studentsPlaced: 123, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 72, averagePackage: 20, lowestPackage: 9, placementPercentage: 90, studentsPlaced: 180, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 55, averagePackage: 17, lowestPackage: 7, placementPercentage: 84, studentsPlaced: 126, totalStudents: 150 },
          { branch: 'ME', highestPackage: 35, averagePackage: 13, lowestPackage: 5, placementPercentage: 79, studentsPlaced: 119, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 68, averagePackage: 18, lowestPackage: 8, placementPercentage: 88, studentsPlaced: 176, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 51, averagePackage: 15, lowestPackage: 6, placementPercentage: 81, studentsPlaced: 122, totalStudents: 150 },
          { branch: 'ME', highestPackage: 31, averagePackage: 11, lowestPackage: 4, placementPercentage: 76, studentsPlaced: 114, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '6',
    name: 'Delhi Technological University',
    location: 'New Delhi',
    established: 1941,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 55, averagePackage: 18, lowestPackage: 6, placementPercentage: 85, studentsPlaced: 170, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 42, averagePackage: 15, lowestPackage: 5, placementPercentage: 80, studentsPlaced: 120, totalStudents: 150 },
          { branch: 'ME', highestPackage: 28, averagePackage: 12, lowestPackage: 4, placementPercentage: 75, studentsPlaced: 113, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 52, averagePackage: 16, lowestPackage: 5, placementPercentage: 83, studentsPlaced: 166, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 39, averagePackage: 13, lowestPackage: 4, placementPercentage: 77, studentsPlaced: 116, totalStudents: 150 },
          { branch: 'ME', highestPackage: 25, averagePackage: 10, lowestPackage: 3, placementPercentage: 72, studentsPlaced: 108, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 48, averagePackage: 14, lowestPackage: 4, placementPercentage: 80, studentsPlaced: 160, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 35, averagePackage: 11, lowestPackage: 3, placementPercentage: 74, studentsPlaced: 111, totalStudents: 150 },
          { branch: 'ME', highestPackage: 22, averagePackage: 8, lowestPackage: 2, placementPercentage: 69, studentsPlaced: 104, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '7',
    name: 'Netaji Subhas University of Technology',
    location: 'New Delhi',
    established: 1983,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 48, averagePackage: 15, lowestPackage: 5, placementPercentage: 78, studentsPlaced: 156, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 35, averagePackage: 12, lowestPackage: 4, placementPercentage: 73, studentsPlaced: 110, totalStudents: 150 },
          { branch: 'ME', highestPackage: 24, averagePackage: 9, lowestPackage: 3, placementPercentage: 68, studentsPlaced: 102, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 45, averagePackage: 13, lowestPackage: 4, placementPercentage: 75, studentsPlaced: 150, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 32, averagePackage: 10, lowestPackage: 3, placementPercentage: 70, studentsPlaced: 105, totalStudents: 150 },
          { branch: 'ME', highestPackage: 21, averagePackage: 7, lowestPackage: 2, placementPercentage: 65, studentsPlaced: 98, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 42, averagePackage: 11, lowestPackage: 3, placementPercentage: 72, studentsPlaced: 144, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 29, averagePackage: 8, lowestPackage: 2, placementPercentage: 67, studentsPlaced: 101, totalStudents: 150 },
          { branch: 'ME', highestPackage: 18, averagePackage: 5, lowestPackage: 1, placementPercentage: 62, studentsPlaced: 93, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '8',
    name: 'Birla Institute of Technology and Science, Pilani',
    location: 'Pilani',
    established: 1964,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 65, averagePackage: 20, lowestPackage: 8, placementPercentage: 88, studentsPlaced: 176, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 52, averagePackage: 17, lowestPackage: 6, placementPercentage: 83, studentsPlaced: 125, totalStudents: 150 },
          { branch: 'ME', highestPackage: 35, averagePackage: 13, lowestPackage: 5, placementPercentage: 78, studentsPlaced: 117, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 61, averagePackage: 18, lowestPackage: 7, placementPercentage: 85, studentsPlaced: 170, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 48, averagePackage: 15, lowestPackage: 5, placementPercentage: 80, studentsPlaced: 120, totalStudents: 150 },
          { branch: 'ME', highestPackage: 31, averagePackage: 11, lowestPackage: 4, placementPercentage: 75, studentsPlaced: 113, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 57, averagePackage: 16, lowestPackage: 6, placementPercentage: 82, studentsPlaced: 164, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 44, averagePackage: 13, lowestPackage: 4, placementPercentage: 77, studentsPlaced: 116, totalStudents: 150 },
          { branch: 'ME', highestPackage: 27, averagePackage: 9, lowestPackage: 3, placementPercentage: 72, studentsPlaced: 108, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '9',
    name: 'National Institute of Technology, Trichy',
    location: 'Tiruchirappalli',
    established: 1964,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 62, averagePackage: 19, lowestPackage: 7, placementPercentage: 86, studentsPlaced: 172, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 49, averagePackage: 16, lowestPackage: 5, placementPercentage: 81, studentsPlaced: 122, totalStudents: 150 },
          { branch: 'ME', highestPackage: 32, averagePackage: 12, lowestPackage: 4, placementPercentage: 76, studentsPlaced: 114, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 58, averagePackage: 17, lowestPackage: 6, placementPercentage: 83, studentsPlaced: 166, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 45, averagePackage: 14, lowestPackage: 4, placementPercentage: 78, studentsPlaced: 117, totalStudents: 150 },
          { branch: 'ME', highestPackage: 28, averagePackage: 10, lowestPackage: 3, placementPercentage: 73, studentsPlaced: 110, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 54, averagePackage: 15, lowestPackage: 5, placementPercentage: 80, studentsPlaced: 160, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 41, averagePackage: 12, lowestPackage: 3, placementPercentage: 75, studentsPlaced: 113, totalStudents: 150 },
          { branch: 'ME', highestPackage: 24, averagePackage: 8, lowestPackage: 2, placementPercentage: 70, studentsPlaced: 105, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '10',
    name: 'Vellore Institute of Technology',
    location: 'Vellore',
    established: 1984,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 45, averagePackage: 14, lowestPackage: 4, placementPercentage: 75, studentsPlaced: 150, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 32, averagePackage: 11, lowestPackage: 3, placementPercentage: 70, studentsPlaced: 105, totalStudents: 150 },
          { branch: 'ME', highestPackage: 21, averagePackage: 8, lowestPackage: 2, placementPercentage: 65, studentsPlaced: 98, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 42, averagePackage: 12, lowestPackage: 3, placementPercentage: 72, studentsPlaced: 144, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 29, averagePackage: 9, lowestPackage: 2, placementPercentage: 67, studentsPlaced: 101, totalStudents: 150 },
          { branch: 'ME', highestPackage: 18, averagePackage: 6, lowestPackage: 1, placementPercentage: 62, studentsPlaced: 93, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 38, averagePackage: 10, lowestPackage: 2, placementPercentage: 69, studentsPlaced: 138, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 25, averagePackage: 7, lowestPackage: 1, placementPercentage: 64, studentsPlaced: 96, totalStudents: 150 },
          { branch: 'ME', highestPackage: 15, averagePackage: 4, lowestPackage: 1, placementPercentage: 59, studentsPlaced: 89, totalStudents: 150 }
        ]
      }
    ]
  }
];

export const getAvailableYears = (): number[] => {
  const years = new Set<number>();
  collegeData.forEach(college => {
    college.yearlyPlacements.forEach(yearly => {
      years.add(yearly.year);
    });
  });
  return Array.from(years).sort((a, b) => b - a); // Sort descending (newest first)
};

export const sortColleges = (colleges: College[], sortOption: SortOption, year: number): College[] => {
  return [...colleges].sort((a, b) => {
    const aYearData = a.yearlyPlacements.find(yp => yp.year === year);
    const bYearData = b.yearlyPlacements.find(yp => yp.year === year);
    
    if (!aYearData || !bYearData) return 0;
    
    if (sortOption === 'highest-package') {
      const aHighest = Math.max(...aYearData.placements.map(p => p.highestPackage));
      const bHighest = Math.max(...bYearData.placements.map(p => p.highestPackage));
      return bHighest - aHighest;
    } else {
      const aAverage = aYearData.placements.reduce((sum, p) => sum + p.averagePackage, 0) / aYearData.placements.length;
      const bAverage = bYearData.placements.reduce((sum, p) => sum + p.averagePackage, 0) / bYearData.placements.length;
      return bAverage - aAverage;
    }
  });
};