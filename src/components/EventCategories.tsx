import { Music, Trophy, Theater, Utensils, Mic, Camera, Heart, Gamepad2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  count: number;
  color: string;
  bgColor: string;
}

const categories: Category[] = [
  {
    id: "music",
    name: "Music",
    icon: Music,
    count: 15420,
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    id: "sports",
    name: "Sports",
    icon: Trophy,
    count: 8340,
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    id: "theater",
    name: "Theater",
    icon: Theater,
    count: 3250,
    color: "text-red-600",
    bgColor: "bg-red-100"
  },
  {
    id: "food",
    name: "Food & Drink",
    icon: Utensils,
    count: 5680,
    color: "text-orange-600",
    bgColor: "bg-orange-100"
  },
  {
    id: "comedy",
    name: "Comedy",
    icon: Mic,
    count: 2140,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100"
  },
  {
    id: "arts",
    name: "Arts & Culture",
    icon: Camera,
    count: 4320,
    color: "text-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    id: "family",
    name: "Family",
    icon: Heart,
    count: 6850,
    color: "text-rose-600",
    bgColor: "bg-rose-100"
  },
  {
    id: "gaming",
    name: "Gaming",
    icon: Gamepad2,
    count: 1890,
    color: "text-indigo-600",
    bgColor: "bg-indigo-100"
  }
];

interface EventCategoriesProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string | null) => void;
}

export function EventCategories({ selectedCategory, onCategorySelect }: EventCategoriesProps) {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Browse by Category</h2>
          <Button 
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => onCategorySelect(null)}
          >
            View All
          </Button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <Card 
                key={category.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                  isSelected ? "ring-2 ring-purple-500 bg-purple-50" : ""
                }`}
                onClick={() => onCategorySelect(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="font-medium text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {category.count.toLocaleString()} events
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}