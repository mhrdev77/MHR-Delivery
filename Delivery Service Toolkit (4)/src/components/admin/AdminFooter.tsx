import { Link } from "react-router-dom";

export function AdminFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} MHR Delivery - logiya 251. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-primary text-sm">
              View Website
            </Link>
            <a href="#" className="text-gray-600 hover:text-primary text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-primary text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 hover:text-primary text-sm">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}