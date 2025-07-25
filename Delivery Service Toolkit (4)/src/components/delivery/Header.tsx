import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, User, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<{name: string} | null>(null);
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const isAdminAuthenticated = localStorage.getItem("mhr_admin_auth") === "true";
      const isUserAuthenticated = localStorage.getItem("mhr_user_auth") === "true";
      
      setIsAdmin(isAdminAuthenticated);
      setIsUserLoggedIn(isUserAuthenticated);
      
      // Get current user data
      const userData = localStorage.getItem("mhr_current_user");
      if (userData) {
        setCurrentUser(JSON.parse(userData));
      } else {
        setCurrentUser(null);
      }
    };
    
    checkAuth();
    
    // Add event listener for storage changes (for when logging in/out in another tab)
    window.addEventListener("storage", checkAuth);
    
    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAdminAction = () => {
    if (isAdmin) {
      navigate("/admin");
    } else {
      navigate("/admin/login");
    }
    setIsMenuOpen(false);
  };
  
  const handleUserAction = () => {
    if (isUserLoggedIn) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+251938008866" className="flex items-center text-sm">
              <Phone className="h-4 w-4 mr-1" />
              <span>+251 938 008 866</span>
            </a>
            <a href="mailto:admin@mhrsalt.com" className="flex items-center text-sm">
              <Mail className="h-4 w-4 mr-1" />
              <span>admin@mhrsalt.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleAdminAction}
              className="flex items-center text-sm hover:underline"
            >
              <User className="h-4 w-4 mr-1" />
              {isAdmin ? "Admin Dashboard" : "Admin Login"}
            </button>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">
              MHR Delivery
            </Link>
          </div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-medium text-gray-700 hover:text-primary transition-colors">
                ዋና ገፅ
              </Link>
              <Link to="/restaurants" className="font-medium text-gray-700 hover:text-primary transition-colors">
                ምግቦች
              </Link>
              <Link to="/groceries" className="font-medium text-gray-700 hover:text-primary transition-colors">
                ግሮሰሪ
              </Link>
              <Link to="/pharmacy" className="font-medium text-gray-700 hover:text-primary transition-colors">
                ፋርማሲ
              </Link>
              <Link to="/track" className="font-medium text-gray-700 hover:text-primary transition-colors">
                ክትትል
              </Link>
            </nav>
          )}

          <div className="flex items-center gap-3">
            {/* User Authentication Buttons */}
            {isUserLoggedIn ? (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleUserAction}
                className="flex items-center gap-2"
              >
                <User className="h-4 w-4" />
                {currentUser?.name || "Profile"}
              </Button>
            ) : (
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate("/login")}
                  className="flex items-center gap-1"
                >
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => navigate("/signup")}
                  className="flex items-center gap-1"
                >
                  <UserPlus className="h-4 w-4" />
                  Sign Up
                </Button>
              </div>
            )}
          
            {/* Mobile menu button */}
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <nav className="md:hidden bg-white shadow-lg py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <Link 
                to="/" 
                className="font-medium text-gray-700 hover:text-primary p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ዋና ገፅ
              </Link>
              <Link 
                to="/restaurants" 
                className="font-medium text-gray-700 hover:text-primary p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ምግቦች
              </Link>
              <Link 
                to="/groceries" 
                className="font-medium text-gray-700 hover:text-primary p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ግሮሰሪ
              </Link>
              <Link 
                to="/pharmacy" 
                className="font-medium text-gray-700 hover:text-primary p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ፋርማሲ
              </Link>
              <Link 
                to="/track" 
                className="font-medium text-gray-700 hover:text-primary p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                ክትትል
              </Link>
              {isUserLoggedIn ? (
                <Link
                  to="/profile"
                  className="font-medium text-gray-700 hover:text-primary p-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  My Profile
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="font-medium text-gray-700 hover:text-primary p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="font-medium text-gray-700 hover:text-primary p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
              <button 
                onClick={handleAdminAction}
                className="font-medium text-gray-700 hover:text-primary p-2 text-left"
              >
                {isAdmin ? "Admin Dashboard" : "Admin Login"}
              </button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}