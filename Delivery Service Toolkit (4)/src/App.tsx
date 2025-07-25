import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import RestaurantsPage from "@/pages/RestaurantsPage";
import GroceriesPage from "@/pages/GroceriesPage";
import PharmacyPage from "@/pages/PharmacyPage";
import TrackPage from "@/pages/TrackPage";
import NotFoundPage from "@/pages/NotFoundPage";
import AdminDashboardPage from "@/pages/AdminDashboardPage";
import AdminLoginPage from "@/pages/AdminLoginPage";
import UserLoginPage from "@/pages/UserLoginPage";
import UserSignupPage from "@/pages/UserSignupPage";
import UserProfilePage from "@/pages/UserProfilePage";
import { AdminAuthWrapper } from "@/components/admin/AdminAuthWrapper";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

function App() {
  return (
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/groceries" element={<GroceriesPage />} />
          <Route path="/pharmacy" element={<PharmacyPage />} />
          <Route path="/track" element={<TrackPage />} />
          
          {/* User Authentication Routes */}
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/signup" element={<UserSignupPage />} />
          <Route path="/profile" element={<UserProfilePage />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={
            <AdminAuthWrapper>
              <AdminDashboardPage />
            </AdminAuthWrapper>
          } />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;