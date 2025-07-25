import { Header } from "@/components/delivery/Header";
import { Footer } from "@/components/delivery/Footer";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function GroceriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-green-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">ግሮሰሪ</h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-green-800">
              የቤትዎን ፍጆታዎች በቀላሉ ይዘዙ እና በፍጥነት ያግኙ።
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-grow relative">
                <Input 
                  placeholder="ምርት ይፈልጉ..." 
                  className="pl-10 h-12"
                />
                <Search className="absolute left-3 top-3.5 text-gray-500 h-5 w-5" />
              </div>
              <Button className="h-12 bg-green-600 hover:bg-green-700">
                ፈልግ
              </Button>
            </div>
          </div>
        </div>

        <div className="py-12 container mx-auto px-4">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">በቅርብ ጊዜ ይመጣል</h2>
            <p className="text-gray-500 mb-8">እባክዎ ይቆዩ! በቅርብ ጊዜ ይህ ገጽ በሙሉ ተግባራዊ ይሆናል።</p>
            <Button onClick={() => window.history.back()}>
              ወደ ዋና ገጽ ተመለስ
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default GroceriesPage;