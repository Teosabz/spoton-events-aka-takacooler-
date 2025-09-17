import { Event } from "../components/EventCard";

export const dummyEvents: Event[] = [
  // Music Events
  {
    id: "1",
    title: "Taylor Swift | The Eras Tour",
    artist: "Taylor Swift",
    venue: "MetLife Stadium",
    date: "March 15, 2024",
    time: "7:30 PM",
    image: "https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc1ODA1NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Music",
    price: { min: 89, max: 350 },
    ticketsLeft: 23,
    isFavorite: true,
    description: "The biggest pop tour of the year featuring all your favorite hits",
    location: "East Rutherford, NJ"
  },
  {
    id: "2",
    title: "Arctic Monkeys World Tour",
    artist: "Arctic Monkeys",
    venue: "Madison Square Garden",
    date: "March 22, 2024",
    time: "8:00 PM",
    image: "https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc1ODA1NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Music",
    price: { min: 75, max: 200 },
    ticketsLeft: 156,
    isFavorite: false,
    description: "British rock legends return with their latest album tour",
    location: "New York, NY"
  },
  {
    id: "3",
    title: "Coachella Valley Music Festival",
    venue: "Empire Polo Club",
    date: "April 12-14, 2024",
    time: "All Day",
    image: "https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc1ODA1NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Festival",
    price: { min: 429, max: 1200 },
    ticketsLeft: 892,
    isFavorite: true,
    description: "The ultimate music and arts festival experience",
    location: "Indio, CA"
  },

  // Sports Events
  {
    id: "4",
    title: "Lakers vs Warriors",
    venue: "Crypto.com Arena",
    date: "March 18, 2024",
    time: "7:30 PM",
    image: "https://images.unsplash.com/photo-1687216769793-833dcfe4e3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhiYXNrZXRiYWxsJTIwc3BvcnRzJTIwYXJlbmF8ZW58MXx8fHwxNzU4MDUyMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Sports",
    price: { min: 125, max: 450 },
    ticketsLeft: 78,
    isFavorite: false,
    description: "Epic NBA showdown between two championship contenders",
    location: "Los Angeles, CA"
  },
  {
    id: "5",
    title: "Yankees vs Red Sox",
    venue: "Yankee Stadium",
    date: "April 5, 2024",
    time: "1:05 PM",
    image: "https://images.unsplash.com/photo-1687216769793-833dcfe4e3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhiYXNrZXRiYWxsJTIwc3BvcnRzJTIwYXJlbmF8ZW58MXx8fHwxNzU4MDUyMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Sports",
    price: { min: 35, max: 180 },
    ticketsLeft: 234,
    isFavorite: true,
    description: "Classic American League rivalry game",
    location: "Bronx, NY"
  },

  // Theater Events
  {
    id: "6",
    title: "Hamilton",
    venue: "Richard Rodgers Theatre",
    date: "March 20, 2024",
    time: "8:00 PM",
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTgwODY1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Theater",
    price: { min: 95, max: 300 },
    ticketsLeft: 12,
    isFavorite: false,
    description: "The revolutionary Broadway musical about Alexander Hamilton",
    location: "New York, NY"
  },
  {
    id: "7",
    title: "The Lion King",
    venue: "Minskoff Theatre",
    date: "March 25, 2024",
    time: "7:30 PM",
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTgwODY1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Theater",
    price: { min: 85, max: 250 },
    ticketsLeft: 67,
    isFavorite: true,
    description: "Disney's award-winning musical brings the Pride Lands to life",
    location: "New York, NY"
  },

  // Food & Festival Events
  {
    id: "8",
    title: "NYC Food & Wine Festival",
    venue: "Pier 94",
    date: "April 1-3, 2024",
    time: "12:00 PM",
    image: "https://images.unsplash.com/photo-1551883709-2516220df0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmVzdGl2YWwlMjBvdXRkb29yfGVufDF8fHx8MTc1ODA3MTUyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Festival",
    price: { min: 65, max: 150 },
    ticketsLeft: 345,
    isFavorite: false,
    description: "Celebrate the best of New York's culinary scene",
    location: "New York, NY"
  },

  // Comedy Events
  {
    id: "9",
    title: "Dave Chappelle Live",
    artist: "Dave Chappelle",
    venue: "Chicago Theatre",
    date: "March 28, 2024",
    time: "8:00 PM",
    image: "https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc1ODA1NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Comedy",
    price: { min: 75, max: 200 },
    ticketsLeft: 89,
    isFavorite: false,
    description: "Comedy legend returns with all new material",
    location: "Chicago, IL"
  },

  // More Music Events
  {
    id: "10",
    title: "Billie Eilish World Tour",
    artist: "Billie Eilish",
    venue: "TD Garden",
    date: "April 8, 2024",
    time: "7:30 PM",
    image: "https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc1ODA1NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Music",
    price: { min: 89, max: 275 },
    ticketsLeft: 178,
    isFavorite: true,
    description: "Grammy-winning artist on her highly anticipated world tour",
    location: "Boston, MA"
  },

  // More Sports
  {
    id: "11",
    title: "UFC 300",
    venue: "T-Mobile Arena",
    date: "April 13, 2024",
    time: "10:00 PM",
    image: "https://images.unsplash.com/photo-1687216769793-833dcfe4e3af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhiYXNrZXRiYWxsJTIwc3BvcnRzJTIwYXJlbmF8ZW58MXx8fHwxNzU4MDUyMTcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Sports",
    price: { min: 250, max: 850 },
    ticketsLeft: 45,
    isFavorite: false,
    description: "Historic UFC milestone event with championship fights",
    location: "Las Vegas, NV"
  },

  // Free Events
  {
    id: "12",
    title: "Central Park Summer Concert",
    artist: "Various Artists",
    venue: "Central Park SummerStage",
    date: "March 30, 2024",
    time: "3:00 PM",
    image: "https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc1ODA1NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Music",
    price: { min: 0, max: 0 },
    ticketsLeft: 2500,
    isFavorite: false,
    description: "Free outdoor concert featuring emerging artists",
    location: "New York, NY"
  },

  // More Theater
  {
    id: "13",
    title: "Chicago",
    venue: "Ambassador Theatre",
    date: "April 10, 2024",
    time: "8:00 PM",
    image: "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBwZXJmb3JtYW5jZXxlbnwxfHx8fDE3NTgwODY1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Theater",
    price: { min: 79, max: 195 },
    ticketsLeft: 123,
    isFavorite: false,
    description: "The longest-running American musical on Broadway",
    location: "New York, NY"
  },

  // More Festivals
  {
    id: "14",
    title: "South by Southwest (SXSW)",
    venue: "Austin Convention Center",
    date: "March 8-17, 2024",
    time: "All Day",
    image: "https://images.unsplash.com/photo-1551883709-2516220df0bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZmVzdGl2YWwlMjBvdXRkb29yfGVufDF8fHx8MTc1ODA3MTUyNXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Festival",
    price: { min: 350, max: 1500 },
    ticketsLeft: 567,
    isFavorite: true,
    description: "Music, film, and interactive media festival",
    location: "Austin, TX"
  },

  // Tech/Gaming
  {
    id: "15",
    title: "PAX East Gaming Convention",
    venue: "Boston Convention Center",
    date: "March 21-24, 2024",
    time: "10:00 AM",
    image: "https://images.unsplash.com/photo-1672841821756-fc04525771c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwY3Jvd2QlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDF8fHx8MTc1ODA1NjY4MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Gaming",
    price: { min: 65, max: 85 },
    ticketsLeft: 234,
    isFavorite: false,
    description: "The ultimate gaming convention experience",
    location: "Boston, MA"
  }
];

export const featuredEvents = dummyEvents.slice(0, 6);
export const nearbyEvents = dummyEvents.slice(6, 12);
export const recommendedEvents = dummyEvents.slice(3, 9);