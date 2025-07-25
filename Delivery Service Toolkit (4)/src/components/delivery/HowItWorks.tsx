import { ShoppingCart, Map, Truck } from "lucide-react";

type StepProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
};

const Step = ({ icon, title, description, number }: StepProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white text-primary border-2 border-primary flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            እንዴት ይሠራል
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            በጥቂት ደቂቃዎች ውስጥ የሚፈልጉትን ያግኙ። በጣም ቀላል እና ፈጣን የዴሊቨሪ አገልግሎት።
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step
            icon={<ShoppingCart className="h-8 w-8 text-white" />}
            title="ምርትዎን ይምረጡ"
            description="ከምግብ፣ ግሮሰሪ፣ መድሀኒት እና ሌሎች ምርቶች ይምረጡ እና ወደ ዘንቢልዎ ያክሉ።"
            number={1}
          />
          <Step
            icon={<Map className="h-8 w-8 text-white" />}
            title="የአድራሻዎን ያስገቡ"
            description="የመኖሪያ አድራሻዎን እና ተጨማሪ መመሪያዎችን ያስገቡ።"
            number={2}
          />
          <Step
            icon={<Truck className="h-8 w-8 text-white" />}
            title="ፈጣን ዴሊቨሪ"
            description="ትዕዛዝዎን በአጭር ጊዜ ውስጥ በፈጣን ዴሊቨሪ አገልግሎታችን ያግኙ።"
            number={3}
          />
        </div>
      </div>
    </section>
  );
}