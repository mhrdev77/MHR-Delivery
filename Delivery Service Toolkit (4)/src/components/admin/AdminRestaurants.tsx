import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Search, Filter, MoreHorizontal, PlusCircle, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

export function AdminRestaurants() {
  const { toast } = useToast();
  
  // Mock restaurants data
  const restaurants = [
    { 
      id: 1, 
      name: "Habesha Restaurant", 
      image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=400&h=300&fit=crop",
      cuisine: "Ethiopian Traditional",
      address: "Bole Road, Addis Ababa",
      rating: 4.8,
      orders: 1234,
      status: "Open",
      revenue: "៛12,450"
    },
    { 
      id: 2, 
      name: "Addis Cafe", 
      image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=400&h=300&fit=crop",
      cuisine: "Coffee & Pastries",
      address: "Meskel Square, Addis Ababa",
      rating: 4.6,
      orders: 965,
      status: "Open",
      revenue: "៛8,320"
    },
    { 
      id: 3, 
      name: "Merkato Dining", 
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      cuisine: "Mixed International",
      address: "Merkato, Addis Ababa",
      rating: 4.5,
      orders: 721,
      status: "Open",
      revenue: "៛6,740"
    },
    { 
      id: 4, 
      name: "Ethiopian Spice", 
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      cuisine: "Spicy Ethiopian",
      address: "CMC Road, Addis Ababa",
      rating: 4.7,
      orders: 498,
      status: "Closed",
      revenue: "៛4,980"
    },
    { 
      id: 5, 
      name: "Abyssinia Kitchen", 
      image: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=400&h=300&fit=crop",
      cuisine: "Traditional Ethiopian",
      address: "Sarbet, Addis Ababa",
      rating: 4.4,
      orders: 345,
      status: "Open",
      revenue: "៛3,890"
    },
    { 
      id: 6, 
      name: "Lalibela Dining", 
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
      cuisine: "Ethiopian Modern",
      address: "Hayat Area, Addis Ababa",
      rating: 4.2,
      orders: 287,
      status: "Closed",
      revenue: "៛3,250"
    },
  ];
  
  const handleActionClick = (action: string, restaurantName: string) => {
    toast({
      title: `${action} Restaurant`,
      description: `${action} action performed for ${restaurantName}`,
    });
  };
  
  const handleAddRestaurant = () => {
    toast({
      title: "Add New Restaurant",
      description: "New restaurant registration form would open here.",
    });
  };
  
  return (
    <div className="space-y-6">
      {/* Grid view of featured restaurants */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {restaurants.slice(0, 3).map((restaurant) => (
          <Card key={restaurant.id} className="overflow-hidden">
            <div className="h-40 w-full overflow-hidden">
              <img 
                src={restaurant.image} 
                alt={restaurant.name} 
                className="w-full h-full object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  restaurant.status === "Open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}>
                  {restaurant.status}
                </div>
              </div>
              <CardDescription>{restaurant.cuisine}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <div className="flex justify-between text-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" /> 
                  {restaurant.rating}
                </div>
                <div className="text-muted-foreground">{restaurant.orders} orders</div>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => handleActionClick("View", restaurant.name)}
              >
                Manage Restaurant
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Search and filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search restaurants..." 
            className="pl-8"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button onClick={handleAddRestaurant}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Restaurant
          </Button>
        </div>
      </div>
      
      {/* Table view of all restaurants */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Restaurant</TableHead>
              <TableHead>Cuisine</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {restaurants.map((restaurant) => (
              <TableRow key={restaurant.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md overflow-hidden">
                      <img 
                        src={restaurant.image} 
                        alt={restaurant.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{restaurant.name}</p>
                      <p className="text-xs text-muted-foreground">{restaurant.address}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{restaurant.cuisine}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400 mr-1" />
                    {restaurant.rating}
                  </div>
                </TableCell>
                <TableCell>
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    restaurant.status === "Open" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-red-100 text-red-800"
                  }`}>
                    {restaurant.status}
                  </div>
                </TableCell>
                <TableCell>{restaurant.orders}</TableCell>
                <TableCell className="text-right">{restaurant.revenue}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleActionClick("View", restaurant.name)}>
                        View details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleActionClick("Edit", restaurant.name)}>
                        Edit details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleActionClick("Menu", restaurant.name)}>
                        Manage menu
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <strong>{restaurants.length}</strong> of <strong>{restaurants.length}</strong> restaurants
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}