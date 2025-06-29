
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SortOption } from "../data/collegeData";
import { ArrowUp, ArrowDown } from "lucide-react";

interface CollegeSorterProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
}

const CollegeSorter = ({ sortOption, onSortChange }: CollegeSorterProps) => {
  return (
    <div className="w-full max-w-md">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Sort Colleges By
      </label>
      <Select value={sortOption} onValueChange={onSortChange}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
          <SelectItem value="highest-package" className="hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <ArrowDown className="h-4 w-4 text-blue-600" />
              Highest Package (High to Low)
            </div>
          </SelectItem>
          <SelectItem value="average-package" className="hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <ArrowDown className="h-4 w-4 text-green-600" />
              Average Package (High to Low)
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CollegeSorter;