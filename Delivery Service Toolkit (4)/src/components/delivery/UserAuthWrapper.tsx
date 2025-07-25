import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface UserAuthWrapperProps {
  children: React.ReactNode;
}

export const UserAuthWrapper = ({ children }: UserAuthWrapperProps) => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = localStorage.getItem("mhr_user_auth") === "true";
    
    // If not authenticated, redirect to login page
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  // Check if authenticated before rendering children
  const isAuthenticated = localStorage.getItem("mhr_user_auth") === "true";
  
  // If authenticated, render the children
  // Otherwise, render nothing while redirecting
  return isAuthenticated ? <>{children}</> : null;
};