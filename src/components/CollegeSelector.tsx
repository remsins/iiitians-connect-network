
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { College } from "../data/collegeData";

interface CollegeSelectorProps {
  colleges: College[];
  selectedCollege: string;
  onCollegeChange: (collegeId: string) => void;
}

const CollegeSelector = ({ colleges, selectedCollege, onCollegeChange }: CollegeSelectorProps) => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Select College
      </label>
      <Select value={selectedCollege} onValueChange={onCollegeChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Choose a college..." />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
          {colleges.map((college) => (
            <SelectItem key={college.id} value={college.id} className="hover:bg-gray-50">
              {college.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CollegeSelector;