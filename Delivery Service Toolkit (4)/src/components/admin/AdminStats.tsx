import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { ArrowUpRight, ArrowDownRight, Download, Clock } from "lucide-react";

export function AdminStats() {
  // Mock data for demonstration
  const recentDeliveries = [
    { id: "ORD-7289", customer: "Henok Tadesse", status: "Delivered", time: "10:23 AM", amount: "329.99" },
    { id: "ORD-7288", customer: "Meron Alemu", status: "In Transit", time: "10:12 AM", amount: "92.50" },
    { id: "ORD-7287", customer: "Kidist Bekele", status: "Preparing", time: "9:45 AM", amount: "182.30" },
    { id: "ORD-7286", customer: "Abel Tesfaye", status: "Delivered", time: "9:12 AM", amount: "76.20" },
    { id: "ORD-7285", customer: "Sara Haile", status: "Delivered", time: "8:50 AM", amount: "241.75" },
  ];

  return (
    <div className="space-y-8">
      {/* Revenue Chart Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Daily sales revenue and order volume</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Clock className="mr-1 h-4 w-4" /> Last 7 Days
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Placeholder for chart */}
          <div className="h-[300px] w-full rounded-lg bg-slate-100 flex items-center justify-center">
            <p className="text-muted-foreground">Revenue Chart Visualization</p>
          </div>
          
          {/* KPIs below chart */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500">Today's Revenue</div>
              <div className="text-2xl font-bold mt-1">៛5,423</div>
              <div className="flex items-center mt-1 text-green-600 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" /> +12% from yesterday
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500">Total Orders</div>
              <div className="text-2xl font-bold mt-1">47</div>
              <div className="flex items-center mt-1 text-green-600 text-sm">
                <ArrowUpRight className="h-4 w-4 mr-1" /> +8% from yesterday
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm font-medium text-gray-500">Average Order Value</div>
              <div className="text-2xl font-bold mt-1">៛115.4</div>
              <div className="flex items-center mt-1 text-red-600 text-sm">
                <ArrowDownRight className="h-4 w-4 mr-1" /> -3% from yesterday
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Recent Orders Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Today's Deliveries</CardTitle>
              <CardDescription>Recent delivery activity</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Time</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentDeliveries.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      order.status === "Delivered" 
                        ? "bg-green-100 text-green-800" 
                        : order.status === "In Transit" 
                          ? "bg-blue-100 text-blue-800" 
                          : "bg-amber-100 text-amber-800"
                    }`}>
                      {order.status}
                    </div>
                  </TableCell>
                  <TableCell>{order.time}</TableCell>
                  <TableCell className="text-right">៛{order.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {/* Performance Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Delivery Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Average Delivery Time</span>
                  <span className="text-sm font-medium">28 min</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">On-time Delivery Rate</span>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Customer Satisfaction</span>
                  <span className="text-sm font-medium">4.8/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "96%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Top Restaurants</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Habesha Restaurant</span>
                  <span className="text-sm font-medium">៛12,450</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Addis Cafe</span>
                  <span className="text-sm font-medium">៛8,320</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "67%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Merkato Dining</span>
                  <span className="text-sm font-medium">៛6,740</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "54%" }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Ethiopian Spice</span>
                  <span className="text-sm font-medium">៛4,980</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}