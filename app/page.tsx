import { Meteors } from "@/components/magicui/meteors";
import Marquee from "@/components/magicui/marquee";
import HeroSection from "@/components/HeroSection";
import BentoCards from "@/components/BentoCards";
import TestimonialRow from "@/components/TestimonialRow";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <Meteors number={50} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <HeroSection />
        <BentoCards />

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
