import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              MHR Delivery - ፈጣን እና አስተማማኝ የዴሊቨሪ አገልግሎት
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              ምግብ፣ ግሮሰሪ፣ መድሀኒት እና ሌሎች ምርቶችን በፍጥነት ወደ መኖሪያ ቤትዎ እናደርሳለን።
            </p>
            
            <div className="flex flex-wrap gap-3">
              <Link to="/restaurants">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  አሁን ይዘዙ
                </Button>
              </Link>
              <Link to="/track">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  ትዕዛዝዎን ይከታተሉ
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h2 className="text-xl font-semibold mb-4">የእኛ ዋና የአገልግሎት መስኮች</h2>
              
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="mr-4 bg-white/20 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">የምግብ ዴሊቨሪ</h3>
                    <p className="text-sm text-white/80">ከተመረጡ ምርጥ ምግብ ቤቶች በፍጥነት ይዘዙ</p>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </div>
                
                <div className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="mr-4 bg-white/20 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">የግሮሰሪ ዴሊቨሪ</h3>
                    <p className="text-sm text-white/80">በቀን ውስጥ የሚፈልጓቸውን ግሮሰሪዎች እናቀርባለን</p>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </div>
                
                <div className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <div className="mr-4 bg-white/20 rounded-full p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">የፋርማሲ ዴሊቨሪ</h3>
                    <p className="text-sm text-white/80">አስፈላጊ መድሀኒቶችን በፍጥነት እናመጣለን</p>
                  </div>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}