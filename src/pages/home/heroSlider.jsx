import cream from "../../assets/cream.png";
import slidBuying from "../../assets/slidBuying.png";
import lifeNotStop from "../../assets/lifeNotStop.png";
import { useEffect, useState } from "react";

function HeroSlider() {
  const slids = [
    { id: 1, img: cream, alt: "کرم مراقبت از پوست" },
    { id: 2, img: slidBuying, alt: "خرید آسان با باسلام" },
    { id: 3, img: lifeNotStop, alt: "زندگی ادامه دارد" },
  ];
  const [slidNumber, setSlideNumber] = useState(0);
  const slid = slids[slidNumber];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideNumber((prev) => (prev + 1) % slids.length);
    }, 10000);

    return () => clearInterval(interval)
  },[slids.length]);

  return (
    <div className="relative z-10 transition max-sm:h-32">
      <img
        className="bg-gradient-to-l z-10 max-md:h-full"
        src={slid.img}
        alt={slid.alt}
      />
      <button
        className="max-md:hidden"
        onClick={() => setSlideNumber((prev) => (prev + 1) % slids.length)}
      >
        <i className="fa-solid fa-angle-right cursor-pointer absolute bg-white text-black rounded-md left-30 bottom-13 flex justify-center pl-6 p-4"></i>
      </button>
      <button
        className="max-md:hidden"
        onClick={() =>
          setSlideNumber((prev) => (prev === 0 ? slids.length - 1 : prev - 1))
        }
      >
        <i className="fa-solid fa-angle-left cursor-pointer absolute bg-white text-black rounded-md left-15 bottom-13 flex justify-center pl-6 p-4"></i>
      </button>
    </div>
  );
}

export default HeroSlider;
