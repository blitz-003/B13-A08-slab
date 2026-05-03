import { Button } from "@heroui/react";
import Link from "next/link";
import AnimatedParagraph from "./AnimatedParagraph";
import Typewriter from "./Typewriter"; // this is already client

const Banner = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/duwlyvbo4/image/upload/v1777706970/banner_brjpwe.jpg')] h-[80vh] w-full bg-cover bg-center flex items-center rounded-lg shadow-2xl">
      <div className="w-full h-full bg-black/30 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            <Typewriter
              text="Transform Your Space with Premium Tiles"
              speed={80}
            />
            <br />
            <span className="text-gray-200"></span>
          </h1>

          <AnimatedParagraph delay={3.0}>
            Discover high-quality tiles that transform any space with elegance
            and precision.
          </AnimatedParagraph>

          <div className="flex gap-4">
            <Link href="#">
              <Button className="bg-linear-to-r from-pink-500 via-purple-500 bg-red-500">
                View All Tiles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
