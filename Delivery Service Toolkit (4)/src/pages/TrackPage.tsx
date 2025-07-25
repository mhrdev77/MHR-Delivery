import { Header } from "@/components/delivery/Header";
import { Footer } from "@/components/delivery/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Package, MapPin, Truck, Check } from "lucide-react";

function TrackPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">ትዕዛዝ ክትትል</h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-800">
              የትዕዛዝዎን አሁን ያለበትን ሁኔታ በቀላሉ ይከታተሉ።
            </p>

            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
              <form className="space-y-4">
                <div>
                  <label htmlFor="tracking-id" className="block text-left text-sm font-medium text-gray-700 mb-1">
                    የትዕዛዝ መለያ ቁጥር
                  </label>
                  <Input
                    id="tracking-id"
                    placeholder="የትዕዛዝ መለያ ቁጥርዎን ያስገቡ"
                    className="h-12"
                  />
                </div>
                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700">
                  ትዕዛዝን አሳይ
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="py-12 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold mb-2">የትዕዛዝ ሂደት - ናሙና</h2>
              <p className="text-gray-500 mb-6">ትዕዛዝ #123456</p>

              <div className="relative">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                <div className="relative flex pb-8">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center z-10">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium">ትዕዛዝ ተቀብለናል</h3>
                    <p className="text-gray-500 text-sm">ሐምሌ 16, 2025 - 10:30 ጠዋት</p>
                    <p className="mt-1">ትዕዛዝዎ ተቀብለን ለማዘጋጀት ወደ ሱቁ ልከናል።</p>
                  </div>
                </div>
                
                <div className="relative flex pb-8">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center z-10">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium">ትዕዛዝዎ ተዘጋጅቷል</h3>
                    <p className="text-gray-500 text-sm">ሐምሌ 16, 2025 - 11:15 ጠዋት</p>
                    <p className="mt-1">ትዕዛዝዎ ተዘጋጅቶ ለመላክ ዝግጁ ሆኗል።</p>
                  </div>
                </div>
                
                <div className="relative flex pb-8">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center z-10">
                    <Truck className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium">በመንገድ ላይ ነው</h3>
                    <p className="text-gray-500 text-sm">ሐምሌ 16, 2025 - 11:45 ጠዋት</p>
                    <p className="mt-1">ትዕዛዝዎ አሁን በመንገድ ላይ ነው።</p>
                  </div>
                </div>
                
                <div className="relative flex">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center z-10">
                    <Check className="w-5 h-5 text-gray-500" />
                  </div>
                  <div className="ml-6">
                    <h3 className="font-medium text-gray-500">ደርሷል</h3>
                    <p className="text-gray-400 text-sm">ገና አልተጠናቀቀም</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-500 mb-4">ይህ የናሙና ክትትል ነው። እውነተኛ ትዕዛዝ ለመከታተል እባክዎ የትዕዛዝ መለያ ቁጥርዎን ከላይ ያስገቡ።</p>
              <Button onClick={() => window.history.back()}>
                ወደ ዋና ገጽ ተመለስ
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default TrackPage;