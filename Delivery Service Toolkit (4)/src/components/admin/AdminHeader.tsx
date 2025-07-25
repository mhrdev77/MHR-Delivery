import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X, Home, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export function AdminHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="font-bold text-xl">
              MHR Delivery
            </Link>
            <span className="hidden md:inline-block px-2 py-1 bg-white/20 text-white text-xs rounded">
              Admin Panel
            </span>
          </div>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/admin" className="text-white hover:text-white/80">
                Overview
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-primary-foreground/10 px-2">
                    Management <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem>
                    <Link to="/admin?tab=orders" className="w-full">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/admin?tab=drivers" className="w-full">Drivers</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/admin?tab=restaurants" className="w-full">Restaurants</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="/admin/settings" className="text-white hover:text-white/80">
                Settings
              </Link>
            </nav>
          )}
          
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button size="sm" variant="secondary" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span className="hidden md:inline">Back to Website</span>
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            {isMobile && (
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            )}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <nav className="pt-4 pb-2 space-y-2">
            <Link 
              to="/admin"
              className="block py-2 hover:bg-primary-foreground/10 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </Link>
            <Link 
              to="/admin?tab=orders"
              className="block py-2 hover:bg-primary-foreground/10 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Orders
            </Link>
            <Link 
              to="/admin?tab=drivers"
              className="block py-2 hover:bg-primary-foreground/10 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Drivers
            </Link>
            <Link 
              to="/admin?tab=restaurants"
              className="block py-2 hover:bg-primary-foreground/10 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Restaurants
            </Link>
            <Link 
              to="/admin/settings"
              className="block py-2 hover:bg-primary-foreground/10 px-2 rounded"
              onClick={() => setIsMenuOpen(false)}
            >
              Settings
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}