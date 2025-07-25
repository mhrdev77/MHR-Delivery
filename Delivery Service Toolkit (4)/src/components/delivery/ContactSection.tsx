import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "መልእክትዎ ተልኳል",
      description: "በቅርብ ጊዜ ውስጥ እናገኝዎታለን",
    });
  };
  
  return (
    <section className="bg-gray-100 py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              ያግኙን
            </h2>
            <p className="text-lg mb-8 text-gray-600">
              ማንኛውም ጥያቄ ካለዎት ወይም ስለ አገልግሎታችን የበለጠ መረጃ ካስፈለግዎ፣ እባክዎን ይጻፉልን። ቡድናችን ለእርስዎ ለመርዳት ዝግጁ ነው።
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">አድራሻችን</h3>
                  <p className="text-gray-600">logiya 251, PX66+J6M, Ethiopia</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">ይደውሉልን</h3>
                  <p className="text-gray-600">+251 938 008 866</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">ኢሜይል</h3>
                  <p className="text-gray-600">admin@mhrsalt.com</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors">
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors">
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path>
                </svg>
              </a>
              <a href="#" className="bg-gray-200 hover:bg-gray-300 rounded-full p-3 transition-colors">
                <svg className="h-5 w-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-3.5 15h-2v-6h2v6zm-1-6.81c-.66 0-1.19-.53-1.19-1.19s.53-1.19 1.19-1.19 1.19.53 1.19 1.19-.53 1.19-1.19 1.19zm8.5 6.81h-2v-3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3h-2v-6h2v1.1c.52-.7 1.28-1.1 2.12-1.1 1.57 0 2.88 1.31 2.88 3v3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:w-5/12 w-full">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-4">መልእክት ይላኩ</h3>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                        ስም
                      </label>
                      <Input id="first-name" placeholder="ስምዎን ያስገቡ" />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                        የአባት ስም
                      </label>
                      <Input id="last-name" placeholder="የአባት ስም ያስገቡ" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      ኢሜይል
                    </label>
                    <Input id="email" type="email" placeholder="ኢሜይል አድራሻዎን ያስገቡ" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      መልእክት
                    </label>
                    <Textarea id="message" placeholder="መልእክትዎን እዚህ ይጻፉ..." className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">መልእክት ይላኩ</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}