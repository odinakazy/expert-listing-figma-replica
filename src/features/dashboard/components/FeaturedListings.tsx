import { Card } from "@/components/ui/card";
import ImageIcon from "@/assets/image1.png";
import SecondImageIcon from "@/assets/imgg.png";

const listings = [
  {
    id: 1,
    image: SecondImageIcon,
    tag: "MOST CLICKED",
    title: "Urban Prime Plaza Premiere",
  },
  {
    id: 2,
    image: SecondImageIcon,
    tag: "MOST WATCHLISTED",
    title: "Urban Prime Plaza Premiere",
  },
  {
    id: 3,
    image: ImageIcon,
    tag: "HOTTEST LISTING",
    title: "Urban Prime Plaza Premiere",
    hasAction: true,
  },
];

export default function FeaturedListings() {
  return (
    <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {listings.map((item) => (
        <Card
          key={item.id}
          className="group relative h-[220px] overflow-hidden rounded-2xl"
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Text content */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
              {item.tag}
            </p>
            <h3 className="mt-1 text-sm font-semibold leading-snug">
              {item.title}
            </h3>
          </div>
        </Card>
      ))}
    </section>
  );
}
