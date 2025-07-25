import { Star, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

type RestaurantCardProps = {
  id: string;
  name: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisine: string;
};

const RestaurantCard = ({ id, name, image, rating, deliveryTime, cuisine }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform group-hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-sm font-medium flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
            {rating}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-2">{cuisine}</p>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            <span>{deliveryTime} ደቂቃ</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export function PopularRestaurants() {
  const restaurants = [
    {
      id: "1",
      name: "አዲስ ቁርስ",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=350&fit=crop",
      rating: 4.8,
      deliveryTime: "25-35",
      cuisine: "ኢትዮጵያዊ ምግብ"
    },
    {
      id: "2",
      name: "ፒዛ ሀውስ",
      image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&h=350&fit=crop",
      rating: 4.5,
      deliveryTime: "20-30",
      cuisine: "ፒዛ እና ፓስታ"
    },
    {
      id: "3",
      name: "ዶሮ ሃውስ",
      image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=350&fit=crop",
      rating: 4.7,
      deliveryTime: "30-40",
      cuisine: "ዶሮ ምግቦች"
    },
    {
      id: "4",
      name: "ሰላም በርገር",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=350&fit=crop",
      rating: 4.6,
      deliveryTime: "15-25",
      cuisine: "በርገሮች"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            ታዋቂ ምግብ ቤቶች
          </h2>
          <Link to="/restaurants">
            <Button variant="ghost" className="text-primary flex items-center">
              ሁሉንም ይመልከቱ <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
}