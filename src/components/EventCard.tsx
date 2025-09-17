import { Calendar, Clock, MapPin, Heart, Ticket, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export interface Event {
  id: string;
  title: string;
  artist?: string;
  venue: string;
  date: string;
  time: string;
  image: string;
  category: string;
  price: {
    min: number;
    max: number;
  };
  ticketsLeft: number;
  isFavorite: boolean;
  description: string;
  location: string;
}

interface EventCardProps {
  event: Event;
  onToggleFavorite: (id: string) => void;
}

export function EventCard({ event, onToggleFavorite }: EventCardProps) {
  const formatPrice = (min: number, max: number) => {
    if (min === 0) return "Free";
    if (min === max) return `$${min}`;
    return `$${min} - $${max}`;
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case "music": return "bg-purple-100 text-purple-800 border-purple-200";
      case "sports": return "bg-green-100 text-green-800 border-green-200";
      case "theater": return "bg-red-100 text-red-800 border-red-200";
      case "festival": return "bg-orange-100 text-orange-800 border-orange-200";
      case "comedy": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <ImageWithFallback
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-3 right-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 ${
            event.isFavorite ? "text-red-500" : "text-white"
          }`}
          onClick={() => onToggleFavorite(event.id)}
        >
          <Heart className={`w-4 h-4 ${event.isFavorite ? "fill-current" : ""}`} />
        </Button>
        <Badge 
          className={`absolute top-3 left-3 ${getCategoryColor(event.category)}`}
          variant="outline"
        >
          {event.category}
        </Badge>
        {event.ticketsLeft < 50 && (
          <Badge className="absolute bottom-3 left-3 bg-red-500 text-white">
            Only {event.ticketsLeft} left!
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg group-hover:text-purple-600 transition-colors line-clamp-1">
              {event.title}
            </h3>
            {event.artist && (
              <p className="text-muted-foreground">{event.artist}</p>
            )}
          </div>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
              <Clock className="w-4 h-4 ml-4" />
              <span>{event.time}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="line-clamp-1">{event.venue}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2">
              <Ticket className="w-4 h-4 text-green-600" />
              <span className="font-semibold text-green-600">
                {formatPrice(event.price.min, event.price.max)}
              </span>
            </div>
            
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Get Tickets
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}