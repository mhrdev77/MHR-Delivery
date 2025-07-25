import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MHR Delivery</h3>
            <p className="text-gray-400 mb-4">
              ፈጣን እና አስተማማኝ የዴሊቨሪ አገልግሎት። ምግብ፣ ግሮሰሪ፣ መድሀኒት እና ሌሎች ምርቶችን በፍጥነት ወደ መኖሪያ ቤትዎ እናደርሳለን።
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path>
                </svg>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-3.5 15h-2v-6h2v6zm-1-6.81c-.66 0-1.19-.53-1.19-1.19s.53-1.19 1.19-1.19 1.19.53 1.19 1.19-.53 1.19-1.19 1.19zm8.5 6.81h-2v-3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3h-2v-6h2v1.1c.52-.7 1.28-1.1 2.12-1.1 1.57 0 2.88 1.31 2.88 3v3z"></path>
                </svg>
              </a>
              <a href="#" className="bg-gray-700 hover:bg-gray-600 rounded-full p-2 transition-colors">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">አገልግሎቶች</h3>
            <ul className="space-y-2">
              <li><Link to="/restaurants" className="text-gray-400 hover:text-white">የምግብ ዴሊቨሪ</Link></li>
              <li><Link to="/groceries" className="text-gray-400 hover:text-white">የግሮሰሪ ዴሊቨሪ</Link></li>
              <li><Link to="/pharmacy" className="text-gray-400 hover:text-white">የፋርማሲ ዴሊቨሪ</Link></li>
              <li><Link to="/track" className="text-gray-400 hover:text-white">የትዕዛዝ ክትትል</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">ድርጅታችን</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">ስለ እኛ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">የስራ ዕድሎች</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">ለድርጅቶች</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">ብሎግ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">ያግኙን</h3>
            <address className="not-italic">
              <p className="text-gray-400 mb-2">logiya 251, PX66+J6M, Ethiopia</p>
              <p className="text-gray-400 mb-2">
                <a href="tel:+251938008866" className="hover:text-white">+251 938 008 866</a>
              </p>
              <p className="text-gray-400 mb-2">
                <a href="mailto:admin@mhrsalt.com" className="hover:text-white">admin@mhrsalt.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} MHR Delivery - logiya 251. ሁሉም መብቶች የተጠበቁ ናቸው።
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-500 hover:text-white text-sm">የግላዊነት ፖሊሲ</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white text-sm">የአገልግሎት ውሎች</a></li>
                <li><a href="#" className="text-gray-500 hover:text-white text-sm">የአጠቃቀም ስምምነት</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}