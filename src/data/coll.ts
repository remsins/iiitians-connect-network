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
    name: 'International Institute of Information Technology, Hyderabad',
    location: 'Hyderabad, Telangana',
    established: 1998,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 80, averagePackage: 27, lowestPackage: 12, placementPercentage: 96, studentsPlaced: 192, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 68, averagePackage: 23, lowestPackage: 10, placementPercentage: 94, studentsPlaced: 141, totalStudents: 150 },
          { branch: 'CSAI', highestPackage: 85, averagePackage: 30, lowestPackage: 14, placementPercentage: 98, studentsPlaced: 98, totalStudents: 100 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 78, averagePackage: 26, lowestPackage: 11, placementPercentage: 95, studentsPlaced: 190, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 65, averagePackage: 21, lowestPackage: 9, placementPercentage: 91, studentsPlaced: 137, totalStudents: 150 },
          { branch: 'CSAI', highestPackage: 81, averagePackage: 28, lowestPackage: 13, placementPercentage: 97, studentsPlaced: 97, totalStudents: 100 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 75, averagePackage: 24, lowestPackage: 10, placementPercentage: 93, studentsPlaced: 186, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 62, averagePackage: 20, lowestPackage: 8, placementPercentage: 89, studentsPlaced: 134, totalStudents: 150 },
          { branch: 'CSAI', highestPackage: 78, averagePackage: 26, lowestPackage: 12, placementPercentage: 96, studentsPlaced: 96, totalStudents: 100 }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'International Institute of Information Technology, Bangalore',
    location: 'Bangalore, Karnataka',
    established: 1999,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 82, averagePackage: 26, lowestPackage: 13, placementPercentage: 94, studentsPlaced: 188, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 64, averagePackage: 22, lowestPackage: 11, placementPercentage: 90, studentsPlaced: 135, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 78, averagePackage: 24, lowestPackage: 12, placementPercentage: 92, studentsPlaced: 184, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 60, averagePackage: 20, lowestPackage: 9, placementPercentage: 88, studentsPlaced: 132, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 75, averagePackage: 22, lowestPackage: 11, placementPercentage: 90, studentsPlaced: 180, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 58, averagePackage: 19, lowestPackage: 8, placementPercentage: 85, studentsPlaced: 128, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '3',
    name: 'Indraprastha Institute of Information Technology, Delhi',
    location: 'New Delhi',
    established: 2008,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 76, averagePackage: 25, lowestPackage: 12, placementPercentage: 92, studentsPlaced: 184, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 61, averagePackage: 21, lowestPackage: 10, placementPercentage: 89, studentsPlaced: 134, totalStudents: 150 }
        ]
      },
      {
        year: 2023,
        placements: [
          { branch: 'CSE', highestPackage: 72, averagePackage: 23, lowestPackage: 11, placementPercentage: 90, studentsPlaced: 180, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 58, averagePackage: 19, lowestPackage: 9, placementPercentage: 85, studentsPlaced: 128, totalStudents: 150 }
        ]
      },
      {
        year: 2022,
        placements: [
          { branch: 'CSE', highestPackage: 68, averagePackage: 21, lowestPackage: 10, placementPercentage: 88, studentsPlaced: 176, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 54, averagePackage: 17, lowestPackage: 8, placementPercentage: 83, studentsPlaced: 124, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Indian Institute of Information Technology, Design and Manufacturing, Jabalpur',
    location: 'Jabalpur, Madhya Pradesh',
    established: 2005,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 45, averagePackage: 14, lowestPackage: 6, placementPercentage: 85, studentsPlaced: 170, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 38, averagePackage: 13, lowestPackage: 5, placementPercentage: 82, studentsPlaced: 123, totalStudents: 150 },
          { branch: 'ME', highestPackage: 30, averagePackage: 10, lowestPackage: 4, placementPercentage: 78, studentsPlaced: 117, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '5',
    name: 'Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior',
    location: 'Gwalior, Madhya Pradesh',
    established: 1997,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 48, averagePackage: 16, lowestPackage: 7, placementPercentage: 87, studentsPlaced: 174, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 40, averagePackage: 14, lowestPackage: 6, placementPercentage: 84, studentsPlaced: 126, totalStudents: 150 },
          { branch: 'IT', highestPackage: 42, averagePackage: 15, lowestPackage: 6, placementPercentage: 85, studentsPlaced: 128, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '6',
    name: 'Indian Institute of Information Technology, Allahabad',
    location: 'Prayagraj, Uttar Pradesh',
    established: 1999,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 50, averagePackage: 18, lowestPackage: 8, placementPercentage: 89, studentsPlaced: 178, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 43, averagePackage: 15, lowestPackage: 7, placementPercentage: 86, studentsPlaced: 129, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '7',
    name: 'Indian Institute of Information Technology, Lucknow',
    location: 'Lucknow, Uttar Pradesh',
    established: 2015,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 46, averagePackage: 15, lowestPackage: 6, placementPercentage: 85, studentsPlaced: 170, totalStudents: 200 },
          { branch: 'IT', highestPackage: 42, averagePackage: 14, lowestPackage: 5, placementPercentage: 83, studentsPlaced: 124, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '8',
    name: 'Indian Institute of Information Technology, Surat',
    location: 'Surat, Gujarat',
    established: 2017,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 44, averagePackage: 13, lowestPackage: 5, placementPercentage: 82, studentsPlaced: 164, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 38, averagePackage: 12, lowestPackage: 4, placementPercentage: 80, studentsPlaced: 120, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '9',
    name: 'Indian Institute of Information Technology, Tiruchirappalli',
    location: 'Tiruchirappalli, Tamil Nadu',
    established: 2013,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 42, averagePackage: 13, lowestPackage: 5, placementPercentage: 81, studentsPlaced: 162, totalStudents: 200 },
          { branch: 'ECE', highestPackage: 36, averagePackage: 11, lowestPackage: 4, placementPercentage: 79, studentsPlaced: 119, totalStudents: 150 }
        ]
      }
    ]
  },
  {
    id: '10',
    name: 'Indian Institute of Information Technology, Raichur',
    location: 'Raichur, Karnataka',
    established: 2019,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 40, averagePackage: 12, lowestPackage: 4, placementPercentage: 78, studentsPlaced: 156, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '11',
    name: 'Indian Institute of Information Technology, Sonepat',
    location: 'Sonepat, Haryana',
    established: 2014,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 41, averagePackage: 12, lowestPackage: 5, placementPercentage: 80, studentsPlaced: 160, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '12',
    name: 'Indian Institute of Information Technology, Manipur',
    location: 'Imphal, Manipur',
    established: 2015,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 39, averagePackage: 11, lowestPackage: 4, placementPercentage: 76, studentsPlaced: 152, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '13',
    name: 'Indian Institute of Information Technology, Agartala',
    location: 'Agartala, Tripura',
    established: 2018,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 38, averagePackage: 10, lowestPackage: 4, placementPercentage: 75, studentsPlaced: 150, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '14',
    name: 'Indian Institute of Information Technology, Bhagalpur',
    location: 'Bhagalpur, Bihar',
    established: 2017,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 36, averagePackage: 10, lowestPackage: 3, placementPercentage: 74, studentsPlaced: 148, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '15',
    name: 'Indian Institute of Information Technology, Pune',
    location: 'Pune, Maharashtra',
    established: 2016,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 43, averagePackage: 14, lowestPackage: 5, placementPercentage: 82, studentsPlaced: 164, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '16',
    name: 'Indian Institute of Information Technology, Guwahati',
    location: 'Guwahati, Assam',
    established: 2013,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 45, averagePackage: 15, lowestPackage: 6, placementPercentage: 85, studentsPlaced: 170, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '17',
    name: 'Indian Institute of Information Technology, Bhopal',
    location: 'Bhopal, Madhya Pradesh',
    established: 2017,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 40, averagePackage: 13, lowestPackage: 5, placementPercentage: 80, studentsPlaced: 160, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '18',
    name: 'Indian Institute of Information Technology, Vadodara',
    location: 'Vadodara, Gujarat',
    established: 2013,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 42, averagePackage: 14, lowestPackage: 5, placementPercentage: 82, studentsPlaced: 164, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '19',
    name: 'Indian Institute of Information Technology, Nagpur',
    location: 'Nagpur, Maharashtra',
    established: 2016,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 41, averagePackage: 13, lowestPackage: 5, placementPercentage: 81, studentsPlaced: 162, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '20',
    name: 'Indian Institute of Information Technology, Dharwad',
    location: 'Dharwad, Karnataka',
    established: 2015,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 40, averagePackage: 12, lowestPackage: 5, placementPercentage: 80, studentsPlaced: 160, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '21',
    name: 'Indian Institute of Information Technology, Kota',
    location: 'Kota, Rajasthan',
    established: 2013,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 39, averagePackage: 11, lowestPackage: 4, placementPercentage: 78, studentsPlaced: 156, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '22',
    name: 'Indian Institute of Information Technology, Sri City',
    location: 'Sri City, Andhra Pradesh',
    established: 2013,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 42, averagePackage: 13, lowestPackage: 5, placementPercentage: 82, studentsPlaced: 164, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '23',
    name: 'Indian Institute of Information Technology, Una',
    location: 'Una, Himachal Pradesh',
    established: 2014,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 38, averagePackage: 11, lowestPackage: 4, placementPercentage: 77, studentsPlaced: 154, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '24',
    name: 'Indian Institute of Information Technology, Ranchi',
    location: 'Ranchi, Jharkhand',
    established: 2016,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 37, averagePackage: 10, lowestPackage: 4, placementPercentage: 76, studentsPlaced: 152, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '25',
    name: 'Indian Institute of Information Technology, Kalyani',
    location: 'Kalyani, West Bengal',
    established: 2014,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 36, averagePackage: 10, lowestPackage: 3, placementPercentage: 75, studentsPlaced: 150, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '26',
    name: 'Indian Institute of Information Technology, Design and Manufacturing, Kurnool',
    location: 'Kurnool, Andhra Pradesh',
    established: 2015,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 35, averagePackage: 10, lowestPackage: 3, placementPercentage: 74, studentsPlaced: 148, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '27',
    name: 'Indian Institute of Information Technology, Kottayam',
    location: 'Kottayam, Kerala',
    established: 2015,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 34, averagePackage: 9, lowestPackage: 3, placementPercentage: 73, studentsPlaced: 146, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '28',
    name: 'Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram',
    location: 'Chennai, Tamil Nadu',
    established: 2007,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 43, averagePackage: 14, lowestPackage: 5, placementPercentage: 83, studentsPlaced: 166, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '29',
    name: 'Indian Institute of Information Technology, Naya Raipur',
    location: 'Naya Raipur, Chhattisgarh',
    established: 2015,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 40, averagePackage: 12, lowestPackage: 5, placementPercentage: 80, studentsPlaced: 160, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '30',
    name: 'International Institute of Information Technology, Bhubaneswar',
    location: 'Bhubaneswar, Odisha',
    established: 2006,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 44, averagePackage: 15, lowestPackage: 6, placementPercentage: 84, studentsPlaced: 168, totalStudents: 200 }
        ]
      }
    ]
  },
  {
    id: '31',
    name: 'Indian Institute of Information Technology, Vadodara - International Campus Diu (ICD)',
    location: 'Diu, Union Territory of Daman and Diu',
    established: 2020,
    yearlyPlacements: [
      {
        year: 2024,
        placements: [
          { branch: 'CSE', highestPackage: 32, averagePackage: 8, lowestPackage: 3, placementPercentage: 70, studentsPlaced: 140, totalStudents: 200 }
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