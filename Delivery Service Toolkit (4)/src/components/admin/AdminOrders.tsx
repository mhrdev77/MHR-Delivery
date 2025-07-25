import { useState } from "react";
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
import { Search, Filter, MoreHorizontal, Download } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

export function AdminOrders() {
  const { toast } = useToast();
  const [filterStatus, setFilterStatus] = useState("all");
  
  // Mock order data
  const orders = [
    { 
      id: "ORD-7289", 
      customer: "Henok Tadesse", 
      date: "2025-07-18 10:23", 
      items: 3,
      restaurant: "Habesha Restaurant",
      status: "Delivered", 
      address: "Bole Road, Addis Ababa",
      amount: "៛329.99",
      payment: "Cash on Delivery"
    },
    { 
      id: "ORD-7288", 
      customer: "Meron Alemu", 
      date: "2025-07-18 10:12", 
      items: 1,
      restaurant: "Addis Cafe",
      status: "In Transit", 
      address: "Meskel Square, Addis Ababa",
      amount: "៛92.50",
      payment: "Credit Card"
    },
    { 
      id: "ORD-7287", 
      customer: "Kidist Bekele", 
      date: "2025-07-18 09:45", 
      items: 4,
      restaurant: "Merkato Dining",
      status: "Preparing", 
      address: "Kazanchis, Addis Ababa",
      amount: "៛182.30",
      payment: "Mobile Payment"
    },
    { 
      id: "ORD-7286", 
      customer: "Abel Tesfaye", 
      date: "2025-07-18 09:12", 
      items: 2,
      restaurant: "Ethiopian Spice",
      status: "Delivered", 
      address: "CMC Road, Addis Ababa",
      amount: "៛76.20",
      payment: "Cash on Delivery"
    },
    { 
      id: "ORD-7285", 
      customer: "Sara Haile", 
      date: "2025-07-18 08:50", 
      items: 3,
      restaurant: "Habesha Restaurant",
      status: "Delivered", 
      address: "Sarbet, Addis Ababa",
      amount: "៛241.75",
      payment: "Credit Card"
    },
    { 
      id: "ORD-7284", 
      customer: "Daniel Girma", 
      date: "2025-07-18 08:30", 
      items: 1,
      restaurant: "Addis Cafe",
      status: "Cancelled", 
      address: "Piassa, Addis Ababa",
      amount: "៛58.25",
      payment: "Mobile Payment"
    },
    { 
      id: "ORD-7283", 
      customer: "Tigist Mengistu", 
      date: "2025-07-18 08:15", 
      items: 2,
      restaurant: "Merkato Dining",
      status: "Delivered", 
      address: "Mexico Square, Addis Ababa",
      amount: "៛124.60",
      payment: "Cash on Delivery"
    },
  ];
  
  // Filter orders based on status
  const filteredOrders = filterStatus === "all" 
    ? orders 
    : orders.filter(order => order.status.toLowerCase() === filterStatus);
  
  const handleStatusChange = (status: string) => {
    const newStatus = status.toLowerCase();
    setFilterStatus(newStatus);
    
    // Show toast notification for filter change
    toast({
      title: "Filter Applied",
      description: `Showing ${newStatus === "all" ? "all orders" : `${newStatus} orders`}`,
    });
  };
  
  const handleActionClick = (action: string, orderId: string) => {
    toast({
      title: `${action} Order ${orderId}`,
      description: `Order ${orderId} has been ${action.toLowerCase()}.`,
    });
  };
  
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search orders..." 
            className="pl-8"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Select 
            defaultValue="all"
            onValueChange={handleStatusChange}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Orders</SelectItem>
              <SelectItem value="preparing">Preparing</SelectItem>
              <SelectItem value="in transit">In Transit</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Restaurant</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.restaurant}</TableCell>
                <TableCell>
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    order.status === "Delivered" 
                      ? "bg-green-100 text-green-800" 
                      : order.status === "In Transit" 
                        ? "bg-blue-100 text-blue-800" 
                        : order.status === "Preparing"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-red-100 text-red-800"
                  }`}>
                    {order.status}
                  </div>
                </TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell className="text-right">{order.amount}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleActionClick("View", order.id)}>
                        View details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleActionClick("Edit", order.id)}>
                        Edit order
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleActionClick("Contact", order.id)}>
                        Contact customer
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
          Showing <strong>{filteredOrders.length}</strong> of <strong>{orders.length}</strong> orders
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