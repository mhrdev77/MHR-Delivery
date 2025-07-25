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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Search, Filter, MoreHorizontal, PlusCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AdminDrivers() {
  const { toast } = useToast();
  
  // Mock drivers data
  const drivers = [
    { 
      id: "DRV-001", 
      name: "Abebe Kebede", 
      phone: "+251 91 234 5678",
      status: "Active",
      location: "Bole, Addis Ababa",
      vehicle: "Motorcycle",
      rating: 4.8,
      orders: 342,
      joined: "2024-03-15"
    },
    { 
      id: "DRV-002", 
      name: "Mekdes Solomon", 
      phone: "+251 92 345 6789",
      status: "Active",
      location: "Piassa, Addis Ababa",
      vehicle: "Motorcycle",
      rating: 4.9,
      orders: 289,
      joined: "2024-04-02"
    },
    { 
      id: "DRV-003", 
      name: "Dawit Tadesse", 
      phone: "+251 93 456 7890",
      status: "On Delivery",
      location: "Kazanchis, Addis Ababa",
      vehicle: "Motorcycle",
      rating: 4.7,
      orders: 198,
      joined: "2024-05-11"
    },
    { 
      id: "DRV-004", 
      name: "Hanna Gebre", 
      phone: "+251 94 567 8901",
      status: "Offline",
      location: "CMC, Addis Ababa",
      vehicle: "Car",
      rating: 4.6,
      orders: 176,
      joined: "2024-04-25"
    },
    { 
      id: "DRV-005", 
      name: "Solomon Bekele", 
      phone: "+251 95 678 9012",
      status: "On Delivery",
      location: "Mexico, Addis Ababa",
      vehicle: "Motorcycle",
      rating: 4.9,
      orders: 321,
      joined: "2024-03-20"
    },
    { 
      id: "DRV-006", 
      name: "Tigist Hailu", 
      phone: "+251 96 789 0123",
      status: "Active",
      location: "Sarbet, Addis Ababa",
      vehicle: "Motorcycle",
      rating: 4.8,
      orders: 245,
      joined: "2024-05-03"
    },
  ];
  
  const activeDrivers = drivers.filter(driver => driver.status === "Active" || driver.status === "On Delivery");
  
  const handleActionClick = (action: string, driverId: string) => {
    toast({
      title: `${action} Driver ${driverId}`,
      description: `Action ${action.toLowerCase()} has been performed on driver ${driverId}.`,
    });
  };
  
  const handleAddDriver = () => {
    toast({
      title: "Add New Driver",
      description: "New driver registration form would open here.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Drivers</p>
                <p className="text-2xl font-bold">{activeDrivers.length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Currently on Delivery</p>
                <p className="text-2xl font-bold">{drivers.filter(d => d.status === "On Delivery").length}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-blue-500 animate-ping"></div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Driver Rating</p>
                <p className="text-2xl font-bold">4.8/5</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                ★★★★★
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search drivers..." 
            className="pl-8"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Select 
            defaultValue="all"
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Drivers</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="delivery">On Delivery</SelectItem>
              <SelectItem value="offline">Offline</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button onClick={handleAddDriver}>
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Driver
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Driver</TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Vehicle</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {drivers.map((driver) => (
              <TableRow key={driver.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`https://i.pravatar.cc/150?u=${driver.id}`} alt={driver.name} />
                      <AvatarFallback>{driver.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{driver.name}</p>
                      <p className="text-sm text-muted-foreground">{driver.phone}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{driver.id}</TableCell>
                <TableCell>
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    driver.status === "Active" 
                      ? "bg-green-100 text-green-800" 
                      : driver.status === "On Delivery" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-gray-100 text-gray-800"
                  }`}>
                    {driver.status}
                  </div>
                </TableCell>
                <TableCell>{driver.vehicle}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <span className="text-amber-500 mr-1">★</span>
                    {driver.rating}
                  </div>
                </TableCell>
                <TableCell>{driver.orders}</TableCell>
                <TableCell>{driver.joined}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleActionClick("View", driver.id)}>
                        View profile
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleActionClick("Contact", driver.id)}>
                        Contact driver
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleActionClick("Performance", driver.id)}>
                        Performance history
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
          Showing <strong>{drivers.length}</strong> of <strong>{drivers.length}</strong> drivers
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