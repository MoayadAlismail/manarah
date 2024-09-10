import { Meteors } from "@/components/magicui/meteors";
import Marquee from "@/components/magicui/marquee";
import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import ShinyButton from "@/components/magicui/shiny-button";
import WordPullUp from "@/components/magicui/word-pull-up";
import DotPattern from "@/components/magicui/dot-pattern";
import { StarIcon, RocketIcon, LightningBoltIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <Meteors number={50} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center mb-16 relative">
          <DotPattern 
            width={20} 
            height={20} 
            cx={1} 
            cy={1} 
            cr={0.5} 
            className="absolute inset-0 h-full w-full text-gray-200 -z-10"
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <WordPullUp 
            words="مصدرك الأول للدراسة في أفضل الجامعات"
            className="text-5xl font-bold mb-12 relative z-10 leading-tight bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text"
          />
          <ShinyButton text="ابدأ الآن" className="mt-6 relative z-10 text-2xl px-12 py-4" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        <BentoGrid className="max-w-4xl w-full mb-12 px-4">
        <BentoCard
            name="مراجعة مقالات التقديم"
            description="جرب الابتكار في ميزتنا الثالثة."
            Icon={LightningBoltIcon}
            className="col-span-3"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-200 to-rose-200 opacity-70">
                <div className="absolute inset-0 bg-noise opacity-20"></div>
              </div>
            }
            href="#"
            cta="استكشف الآن"
          />
          <BentoCard
            name="دورات تدريبية"
            description="اكتشف إمكانيات مذهلة مع ميزتنا الأولى."
            Icon={StarIcon}
            className="col-span-2"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200 to-indigo-200 opacity-70">
                <div className="absolute inset-0 bg-noise opacity-20"></div>
              </div>
            }
            href="#"
            cta="اعرف المزيد"
            />
          <BentoCard
            name="جلسات استشارية"
            description="استكشف قوة ميزتنا الثانية."
            Icon={RocketIcon}
            className="col-span-1"
            background={
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-green-200 to-teal-200 opacity-70">
                <div className="absolute inset-0 bg-noise opacity-20"></div>
              </div>
            }
            href="#"
            cta="ابدأ الآن"
          />
          </BentoGrid>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        <div className="w-full max-w-4xl mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">آراء طلابنا</h2>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            <div className="overflow-hidden">
              <Marquee className="py-4" pauseOnHover={true} speed={20}>
                <TestimonialRow />
              </Marquee>
              <Marquee className="py-4" pauseOnHover={true} reverse={true} speed={20}>
                <TestimonialRow />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function TestimonialRow() {
  const testimonials = [
    { name: "أحمد", username: "@ahmed", text: "لم أر مثل هذا من قبل. إنه أمر لا يصدق!" },
    { name: "فاطمة", username: "@fatima", text: "لقد فاق كل توقعاتي. عمل رائع!" },
    { name: "محمد", username: "@mohammed", text: "أنا في حيرة من أمري. هذا مذهل. أحبه." },
    // يمكنك إضافة المزيد من الشهادات حسب الحاجة
  ];

  return (
    <div className="flex">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="flex-shrink-0 w-80 mx-8">
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-200 mr-3"></div>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.username}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
