import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Package, Truck, Users, ShoppingBag, BarChart3, AlertTriangle, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { AdminFooter } from "@/components/admin/AdminFooter";
import { AdminOrders } from "@/components/admin/AdminOrders";
import { AdminDrivers } from "@/components/admin/AdminDrivers";
import { AdminRestaurants } from "@/components/admin/AdminRestaurants";
import { AdminStats } from "@/components/admin/AdminStats";

export default function AdminDashboardPage() {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  const handleRefreshData = () => {
    toast({
      title: "Data refreshed",
      description: "Information updated successfully",
    });
  };

  const handleLogout = () => {
    // Remove admin authentication from localStorage
    localStorage.removeItem("mhr_admin_auth");
    
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
    
    // Navigate back to login page
    navigate("/admin/login");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <AdminHeader />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-gray-500">Welcome to MHR Delivery Management System</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex gap-3">
            <Button onClick={handleRefreshData} variant="outline">
              Refresh Data
            </Button>
            <Button onClick={handleLogout} variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
            <Link to="/">
              <Button variant="default">
                View Website
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">258</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Drivers</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                3 currently delivering
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Registered Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,287</div>
              <p className="text-xs text-muted-foreground">
                +18% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">៛43,651</div>
              <p className="text-xs text-muted-foreground">
                +8.2% from last month
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Alert Card */}
        <Card className="mb-8 border-orange-200 bg-orange-50">
          <CardHeader className="flex flex-row items-center pb-2">
            <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
            <CardTitle className="text-sm font-medium text-orange-700">Attention Required</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-orange-700">
              3 orders require immediate attention. 1 driver reported technical issues.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="text-orange-700 border-orange-300">
              View Details
            </Button>
          </CardFooter>
        </Card>
        
        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <AdminStats />
          </TabsContent>
          
          <TabsContent value="orders" className="space-y-4">
            <AdminOrders />
          </TabsContent>
          
          <TabsContent value="drivers" className="space-y-4">
            <AdminDrivers />
          </TabsContent>
          
          <TabsContent value="restaurants" className="space-y-4">
            <AdminRestaurants />
          </TabsContent>
        </Tabs>
      </main>
      
      <AdminFooter />
    </div>
  );
}