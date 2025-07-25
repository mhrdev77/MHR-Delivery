import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AdminAuthWrapperProps {
  children: React.ReactNode;
}

export const AdminAuthWrapper = ({ children }: AdminAuthWrapperProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if the admin is authenticated
    const isAuthenticated = localStorage.getItem("mhr_admin_auth") === "true";
    
    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Check if authenticated before rendering children
  const isAuthenticated = localStorage.getItem("mhr_admin_auth") === "true";
  
  // If authenticated, render the children (admin dashboard)
  // Otherwise, render nothing while redirecting
  return isAuthenticated ? <>{children}</> : null;
};