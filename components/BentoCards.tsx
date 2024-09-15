import { BentoGrid, BentoCard } from "@/components/magicui/bento-grid";
import { StarIcon, RocketIcon, LightningBoltIcon } from "@radix-ui/react-icons";

export default function BentoCards() {
  return (
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
  );
}
