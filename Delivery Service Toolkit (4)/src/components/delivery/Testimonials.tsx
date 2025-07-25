import { Star } from "lucide-react";

type TestimonialProps = {
  name: string;
  image: string;
  rating: number;
  text: string;
  date: string;
};

const Testimonial = ({ name, image, rating, text, date }: TestimonialProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium">{name}</h4>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? "text-yellow-500 fill-current" : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        <span className="ml-auto text-sm text-gray-500">{date}</span>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

export function Testimonials() {
  const testimonials = [
    {
      name: "አበበ ተሾመ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      text: "በጣም አስደናቂ አገልግሎት! ትዕዛዜ በፍጥነት ደረሰኝ እና ምግቡም ሞቅ ያለ ነበር። አሁን ምግብ ለማዘዝ ይህንን መተግበሪያ እጠቀማለሁ።",
      date: "መስከረም 15, 2025"
    },
    {
      name: "ሰላም መኮንን",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      text: "ከግሮሰሪ ሱቅ ወደ መኖሪያዬ በፍጥነት መገናኘት እና የሚያስፈልገኝን ማግኘት እጅግ በጣም ጠቃሚ ነው። አስተማማኝ እና ቀልጣፋ አገልግሎት።",
      date: "ጥቅምት 3, 2025"
    },
    {
      name: "ዳዊት ታደሰ",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 4,
      text: "መድሃኒት ለማዘዝ በጣም አስተማማኝ መተግበሪያ ነው። ሁልጊዜ በትክክለኛው ጊዜ ይደርሳል። በፍጥነት መድሃኒት ስፈልግ ለእኔ ትልቅ እርዳታ ነው።",
      date: "ጥቅምት 22, 2025"
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ደንበኞቻችን ምን ይላሉ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ደንበኞቻችን ስለ አገልግሎታችን ያላቸውን አስተያየት ይመልከቱ። ሁልጊዜ ከፍተኛ ጥራት ያለው አገልግሎት ለመስጠት እንተጋለን።
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              image={testimonial.image}
              rating={testimonial.rating}
              text={testimonial.text}
              date={testimonial.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}