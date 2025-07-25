import { Header } from "@/components/delivery/Header";
import { Hero } from "@/components/delivery/Hero";
import { CategoryCards } from "@/components/delivery/CategoryCards";
import { PopularRestaurants } from "@/components/delivery/PopularRestaurants";
import { HowItWorks } from "@/components/delivery/HowItWorks";
import { Testimonials } from "@/components/delivery/Testimonials";
import { ContactSection } from "@/components/delivery/ContactSection";
import { Footer } from "@/components/delivery/Footer";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">የእኛ አገልግሎቶች</h2>
              <p className="mt-2 text-gray-600">ቀልጣፋ እና አስተማማኝ የዴሊቨሪ አገልግሎቶች ለእርስዎ እነሆ</p>
            </div>
            <CategoryCards />
          </div>
        </div>
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">ታዋቂ ምግብ ቤቶች</h2>
              <p className="mt-2 text-gray-600">ከከተማው ምርጥ ምግብ ቤቶች ይዘዙ</p>
            </div>
            <PopularRestaurants />
          </div>
        </div>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">እንዴት ይሰራል</h2>
              <p className="mt-2 text-gray-600">ቀላል የትዕዛዝ ሂደት በ 3 ቀላል ደረጃዎች</p>
            </div>
            <HowItWorks />
          </div>
        </div>
        <div className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">የደንበኞቻችን ተሞክሮ</h2>
              <p className="mt-2 text-gray-600">እነሱ ስለ አገልግሎታችን ምን እንደሚሉ ይመልከቱ</p>
            </div>
            <Testimonials />
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;