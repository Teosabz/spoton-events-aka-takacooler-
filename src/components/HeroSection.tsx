import { Search, MapPin, Calendar, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <span className="text-yellow-300 font-medium">Discover Amazing Events</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Find Your Next
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Unforgettable Experience
            </span>
          </h1>
          
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            From concerts and festivals to sports and theater - discover thousands of events happening near you
          </p>
          
          {/* Search Form */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Search events, artists, venues..."
                      className="pl-10 h-12 bg-white text-gray-900 border-0 focus:ring-2 focus:ring-purple-300"
                    />
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder="Location"
                      className="pl-10 h-12 bg-white text-gray-900 border-0 focus:ring-2 focus:ring-purple-300"
                    />
                  </div>
                </div>
                
                <div>
                  <Select>
                    <SelectTrigger className="h-12 bg-white text-gray-900 border-0 focus:ring-2 focus:ring-purple-300">
                      <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                      <SelectValue placeholder="Any date" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="tomorrow">Tomorrow</SelectItem>
                      <SelectItem value="this-week">This Week</SelectItem>
                      <SelectItem value="this-weekend">This Weekend</SelectItem>
                      <SelectItem value="next-week">Next Week</SelectItem>
                      <SelectItem value="this-month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4 h-12 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-lg"
              >
                Find Events
              </Button>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-purple-200">Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-purple-200">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">2M+</div>
              <div className="text-purple-200">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}