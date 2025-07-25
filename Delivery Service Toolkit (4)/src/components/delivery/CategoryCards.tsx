import { Utensils, ShoppingBag, Stethoscope, Gift } from "lucide-react";
import { Link } from "react-router-dom";

type CategoryCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  color: string;
};

const CategoryCard = ({ icon, title, description, link, color }: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className={`flex flex-col items-center p-6 rounded-lg shadow-md transition-transform hover:scale-105 ${color}`}
    >
      <div className="mb-4 p-3 bg-white rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-center text-sm">{description}</p>
    </Link>
  );
};

export function CategoryCards() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          የዴሊቨሪ አገልግሎቶቻችን
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            icon={<Utensils className="h-8 w-8 text-primary" />}
            title="ምግብ"
            description="ከተለያዩ ምርጥ ሬስቶራንቶች የሚመርጡትን ምግብ ይዘዙ"
            link="/restaurants"
            color="bg-blue-50 text-blue-900"
          />
          <CategoryCard
            icon={<ShoppingBag className="h-8 w-8 text-primary" />}
            title="ግሮሰሪ"
            description="የቤት ውስጥ ፍጆታዎችን እና ምግቦችን ይዘዙ"
            link="/groceries"
            color="bg-green-50 text-green-900"
          />
          <CategoryCard
            icon={<Stethoscope className="h-8 w-8 text-primary" />}
            title="ፋርማሲ"
            description="መድሀኒቶችን በፍጥነት ይዘዙ እና ያግኙ"
            link="/pharmacy"
            color="bg-red-50 text-red-900"
          />
          <CategoryCard
            icon={<Gift className="h-8 w-8 text-primary" />}
            title="ስጦታዎች"
            description="ለወዳጆችዎ ልዩ ስጦታዎችን ይላኩ"
            link="/gifts"
            color="bg-purple-50 text-purple-900"
          />
        </div>
      </div>
    </section>
  );
}