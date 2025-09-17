import { CalendarDays, DollarSign, MapPin, Clock, Filter, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Slider } from "./ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:relative lg:inset-auto">
      {/* Overlay for mobile */}
      <div className="fixed inset-0 bg-black/50 lg:hidden" onClick={onClose}></div>
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-background border-r overflow-y-auto lg:relative lg:w-full lg:h-auto">
        <Card className="h-full lg:h-auto border-0 lg:border rounded-none lg:rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="lg:hidden">
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Date Range */}
            <div>
              <h3 className="font-medium mb-3 flex items-center space-x-2">
                <CalendarDays className="w-4 h-4" />
                <span>Date</span>
              </h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-weekend">This Weekend</SelectItem>
                  <SelectItem value="next-week">Next Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="next-month">Next Month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-3 flex items-center space-x-2">
                <DollarSign className="w-4 h-4" />
                <span>Price Range</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="free" />
                  <label htmlFor="free" className="text-sm">Free Events</label>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$0</span>
                    <span>$500+</span>
                  </div>
                  <Slider
                    defaultValue={[0, 500]}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                  <div className="text-center text-sm text-muted-foreground">
                    $0 - $500+
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Distance */}
            <div>
              <h3 className="font-medium mb-3 flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Distance</span>
              </h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Within..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">Within 2 miles</SelectItem>
                  <SelectItem value="5">Within 5 miles</SelectItem>
                  <SelectItem value="10">Within 10 miles</SelectItem>
                  <SelectItem value="25">Within 25 miles</SelectItem>
                  <SelectItem value="50">Within 50 miles</SelectItem>
                  <SelectItem value="100">Within 100 miles</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            {/* Event Time */}
            <div>
              <h3 className="font-medium mb-3 flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Event Time</span>
              </h3>
              <div className="space-y-2">
                {[
                  { id: "morning", label: "Morning (6AM - 12PM)" },
                  { id: "afternoon", label: "Afternoon (12PM - 6PM)" },
                  { id: "evening", label: "Evening (6PM - 12AM)" },
                  { id: "late-night", label: "Late Night (12AM - 6AM)" }
                ].map((time) => (
                  <div key={time.id} className="flex items-center space-x-2">
                    <Checkbox id={time.id} />
                    <label htmlFor={time.id} className="text-sm">{time.label}</label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Venue Type */}
            <div>
              <h3 className="font-medium mb-3">Venue Type</h3>
              <div className="space-y-2">
                {[
                  "Indoor",
                  "Outdoor",
                  "Stadium",
                  "Arena",
                  "Theater",
                  "Club",
                  "Bar",
                  "Park",
                  "Festival Grounds"
                ].map((venue) => (
                  <div key={venue} className="flex items-center space-x-2">
                    <Checkbox id={venue.toLowerCase()} />
                    <label htmlFor={venue.toLowerCase()} className="text-sm">{venue}</label>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-2 pt-4">
              <Button className="w-full">
                Apply Filters
              </Button>
              <Button variant="outline" className="w-full">
                Clear All
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}