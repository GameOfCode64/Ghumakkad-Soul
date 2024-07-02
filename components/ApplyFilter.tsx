import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Calendar, Clock, Map, MapPin } from "lucide-react";

const ApplyFilter = () => {
  return (
    <div className="flex flex-col px-4 py-8">
      <h1 className="text-teal-700 text-2xl font-bold">ApplyFilter</h1>
      <div className="flex flex-col space-y-6 mt-8">
        <Select>
          <SelectTrigger className="w-[180px] text-teal-700 focus-visible:ring-teal-700 font-semibold">
            <MapPin /> Location
          </SelectTrigger>
          <SelectContent className="text-teal-700 font-semibold">
            <SelectGroup>
              <SelectItem value="uttarakhand">Uttarakhand</SelectItem>
              <SelectItem value="himachal">Himachal Pradesh</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] text-teal-700 focus-visible:ring-teal-700 font-semibold">
            <Calendar /> Month
          </SelectTrigger>
          <SelectContent className="text-teal-700 font-semibold">
            <SelectGroup>
              <SelectItem value="summer">In Summer</SelectItem>
              <SelectItem value="winter">In Winter</SelectItem>
              <SelectItem value="any">Any Time</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] text-teal-700 focus-visible:ring-teal-700 font-semibold">
            <Map /> Distance
          </SelectTrigger>
          <SelectContent className="text-teal-700 font-semibold">
            <SelectGroup>
              <SelectItem value="less10">less then 10km</SelectItem>
              <SelectItem value="more10">More 10 then km</SelectItem>
              <SelectItem value="more15">More 15 then km</SelectItem>
              <SelectItem value="more20">More 20 then km</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] text-teal-700 focus-visible:ring-teal-700 font-semibold">
            <Clock /> Duration
          </SelectTrigger>
          <SelectContent className="text-teal-700 font-semibold">
            <SelectGroup>
              <SelectItem value="days2">2 Days</SelectItem>
              <SelectItem value="more2">3 to 5 Days</SelectItem>
              <SelectItem value="more5">5 to 8 Days</SelectItem>
              <SelectItem value="more10">More 10 Days</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ApplyFilter;
