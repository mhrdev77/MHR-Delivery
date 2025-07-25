import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/delivery/Header";
import { Footer } from "@/components/delivery/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserAuthWrapper } from "@/components/delivery/UserAuthWrapper";
import { LogOut, User, Clock, MapPin, ShoppingBag } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

export default function UserProfilePage() {
  const [user, setUser] = useState<{
    id: string;
    name: string;
    email: string;
  } | null>(null);
  
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Get current user data
    const userData = localStorage.getItem("mhr_current_user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    // Remove user authentication
    localStorage.removeItem("mhr_user_auth");
    localStorage.removeItem("mhr_current_user");
    
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your account",
    });
    
    navigate("/");
  };

  return (
    <UserAuthWrapper>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* User Info Card */}
            <Card className="lg:w-1/3">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-6 rounded-full mb-4">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-2xl">{user?.name}</CardTitle>
                <CardDescription>{user?.email}</CardDescription>
                <Button 
                  variant="destructive" 
                  className="mt-6 w-full"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </Button>
              </CardHeader>
            </Card>
            
            {/* Activity Tabs */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="orders">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="orders">My Orders</TabsTrigger>
                  <TabsTrigger value="addresses">Addresses</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                {/* Orders Tab */}
                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <ShoppingBag className="mr-2 h-5 w-5" />
                        My Orders
                      </CardTitle>
                      <CardDescription>View your order history and status</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <ShoppingBag className="mx-auto h-12 w-12 text-gray-300" />
                        <p className="mt-4 text-gray-500">You haven't placed any orders yet</p>
                        <Button className="mt-4" onClick={() => navigate("/")}>
                          Start Shopping
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Addresses Tab */}
                <TabsContent value="addresses">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="mr-2 h-5 w-5" />
                        Delivery Addresses
                      </CardTitle>
                      <CardDescription>Manage your delivery locations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center py-8">
                        <MapPin className="mx-auto h-12 w-12 text-gray-300" />
                        <p className="mt-4 text-gray-500">No saved addresses found</p>
                        <Button className="mt-4">
                          Add New Address
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Settings Tab */}
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="mr-2 h-5 w-5" />
                        Account Settings
                      </CardTitle>
                      <CardDescription>Manage your account preferences</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium">Account Information</h3>
                        <Separator className="my-2" />
                        <p className="text-sm">Name: {user?.name}</p>
                        <p className="text-sm">Email: {user?.email}</p>
                        <p className="text-sm">Member since: {new Date().toLocaleDateString()}</p>
                      </div>
                      <Button variant="outline" className="w-full">
                        Edit Profile
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </UserAuthWrapper>
  );
}