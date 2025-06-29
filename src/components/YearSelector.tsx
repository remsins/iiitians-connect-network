
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
  onYearChange: (year: number) => void;
}

const YearSelector = ({ years, selectedYear, onYearChange }: YearSelectorProps) => {
  return (
    <div className="w-full max-w-xs">
      <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
        <Calendar className="h-4 w-4" />
        Select Year
      </label>
      <Select value={selectedYear.toString()} onValueChange={(value) => onYearChange(parseInt(value))}>
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
          {years.map((year) => (
            <SelectItem key={year} value={year.toString()} className="hover:bg-gray-50">
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default YearSelector;