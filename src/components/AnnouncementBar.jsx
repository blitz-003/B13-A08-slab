import Marquee from "react-fast-marquee";

export default function AnnouncementBar() {
  const items = [
    "New Arrivals: Marble Gloss Tiles",
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community",
  ];

  return (
    <div className="bg-black text-white py-4 text-lg">
      <Marquee pauseOnHover speed={50} gradient={false}>
        {items.map((item, index) => (
          <span key={index} className="mx-32">
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
