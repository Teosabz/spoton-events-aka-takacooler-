import { useState } from "react";
import { Filter, MapPin, Clock, TrendingUp } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { EventCategories } from "./components/EventCategories";
import { EventCard } from "./components/EventCard";
import { FilterSidebar } from "./components/FilterSidebar";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { dummyEvents, featuredEvents, nearbyEvents, recommendedEvents } from "./data/events";

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [favoriteEvents, setFavoriteEvents] = useState<Set<string>>(
    new Set(dummyEvents.filter(event => event.isFavorite).map(event => event.id))
  );

  const handleToggleFavorite = (eventId: string) => {
    const newFavorites = new Set(favoriteEvents);
    if (newFavorites.has(eventId)) {
      newFavorites.delete(eventId);
    } else {
      newFavorites.add(eventId);
    }
    setFavoriteEvents(newFavorites);
  };

  const filteredEvents = selectedCategory
    ? dummyEvents.filter(event => event.category.toLowerCase() === selectedCategory.toLowerCase())
    : dummyEvents;

  const eventsWithFavoriteStatus = filteredEvents.map(event => ({
    ...event,
    isFavorite: favoriteEvents.has(event.id)
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      <main className="relative">
        <EventCategories 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filter Sidebar */}
            <aside className="lg:w-80">
              <div className="lg:hidden mb-4">
                <Button 
                  variant="outline" 
                  onClick={() => setIsFilterOpen(true)}
                  className="w-full"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
              
              <div className="hidden lg:block">
                <FilterSidebar isOpen={true} onClose={() => {}} />
              </div>
              
              <FilterSidebar 
                isOpen={isFilterOpen} 
                onClose={() => setIsFilterOpen(false)} 
              />
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-12">
              {!selectedCategory && (
                <>
                  {/* Featured Events */}
                  <section>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                        <h2 className="text-2xl font-bold">Featured Events</h2>
                        <Badge variant="secondary">Hot</Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {featuredEvents.map((event) => (
                        <EventCard
                          key={event.id}
                          event={{ ...event, isFavorite: favoriteEvents.has(event.id) }}
                          onToggleFavorite={handleToggleFavorite}
                        />
                      ))}
                    </div>
                  </section>

                  {/* Nearby Events */}
                  <section>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-6 h-6 text-green-600" />
                        <h2 className="text-2xl font-bold">Near You</h2>
                        <Badge variant="outline" className="text-green-600 border-green-600">
                          Within 25 miles
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {nearbyEvents.map((event) => (
                        <EventCard
                          key={event.id}
                          event={{ ...event, isFavorite: favoriteEvents.has(event.id) }}
                          onToggleFavorite={handleToggleFavorite}
                        />
                      ))}
                    </div>
                  </section>

                  {/* Recommended Events */}
                  <section>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-6 h-6 text-blue-600" />
                        <h2 className="text-2xl font-bold">Recommended for You</h2>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          Based on your interests
                        </Badge>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                      {recommendedEvents.map((event) => (
                        <EventCard
                          key={event.id}
                          event={{ ...event, isFavorite: favoriteEvents.has(event.id) }}
                          onToggleFavorite={handleToggleFavorite}
                        />
                      ))}
                    </div>
                  </section>
                </>
              )}

              {/* Category Results */}
              {selectedCategory && (
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold">
                      {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Events
                    </h2>
                    <Badge variant="outline">
                      {eventsWithFavoriteStatus.length} events found
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {eventsWithFavoriteStatus.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Stats Section */}
              {!selectedCategory && (
                <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                  <CardHeader>
                    <CardTitle className="text-center">Why Choose SpotOnEvents?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                      <div>
                        <div className="text-3xl font-bold text-purple-600 mb-2">50,000+</div>
                        <div className="text-muted-foreground">Events Available</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-muted-foreground">Cities Covered</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-green-600 mb-2">2M+</div>
                        <div className="text-muted-foreground">Happy Users</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-16 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-lg">SpotOnEvents</h3>
              </div>
              <p className="text-muted-foreground">
                Your ultimate event discovery platform. Never miss an amazing experience again.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Music & Concerts</li>
                <li>Sports</li>
                <li>Theater & Arts</li>
                <li>Festivals</li>
                <li>Comedy</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Refund Policy</li>
                <li>Seller Support</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SpotOnEvents. All rights reserved. Powered by Ticketmaster API.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}