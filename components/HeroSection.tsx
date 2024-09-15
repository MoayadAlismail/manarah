import WordPullUp from "@/components/magicui/word-pull-up";
import ShinyButton from "@/components/magicui/shiny-button";
import DotPattern from "@/components/magicui/dot-pattern";

export default function HeroSection() {
  // TODO: fix: popup animation shows up from left to right
  return (
    <div className="text-center mb-16 relative">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={0.5}
        className="absolute inset-0 h-full w-full text-gray-200 -z-10"
      />
      <WordPullUp
        words="مصدرك الأول للدراسة في أفضل الجامعات"
        className="text-5xl font-bold mb-12 relative z-10 leading-tight bg-gradient-to-r from-black to-gray-700 text-transparent bg-clip-text"
      />
      <ShinyButton
        text="ابدأ الآن"
        className="mt-6 relative z-10 text-2xl px-12 py-4"
      />
    </div>
  );
}
