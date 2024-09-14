import HeroSection from "@/components/HeroSection";
import BentoCards from "@/components/BentoCards";

export default function CourseDetails() {
    // TODO: finish this page
  return (
    <main className="relative min-h-screen overflow-hidden bg-white" style={{ direction: "rtl" }}>
      
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold mb-8">قدرات</h1>
        <p className="text-xl text-center max-w-2xl mb-4">
          هذه دورة قدرات مميزة.
        </p>
        {/* here we can ad comments, reviews, etc. */}
      </section>
    </main>
  );
}
