import { useRef, useEffect, useContext } from "react";
import image from "../../assets/offsImg.png";
import { Link } from "react-router-dom";
import { contextApi } from "../../context/context";

function Offs() {
  const { calas } = useContext(contextApi);
  const scrollRef = useRef(null);
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      scrollContainer.scrollBy({ left: -220, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-35 mb-15 relative">
      <div className="absolute right-1/2 top-7 translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#FF5C35] rounded-full z-0"></div>
      <img
        src={image}
        alt="تخفیف ویژه"
        className="absolute top-[-69px] left-1/2 -translate-x-1/2 z-10 "
      />
      <div className="relative container w-full bg-[#FF5C35] rounded-4xl p-5">
        <div className="flex justify-between my-3 mb-5">
          <h3 className="text-white font-bold">تخفیف‌های هیجان‌انگیز امروز</h3>
          <div className="flex items-center">
            <h3>همه</h3>
            <i className="fa-solid fa-angle-left text-black"></i>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="w-full flex gap-5 overflow-auto flex-nowrap items-center scrollbar-hide"
        >
          {calas.map((cala) => (
            <Link
              to={`/${cala.id}`}
              key={cala.id}
              className="min-w-[200px] max-md:min-w-[150px] bg-white p-3 rounded-2xl"
            >
              <img
                className="rounded-2xl"
                src={cala.img}
                alt={`تصویر کالای شماره ${cala.id}`}
              />
              <p className="line-clamp-2 my-4 mb-10">{cala.text}</p>
              <div className="flex items-center justify-between flex-row-reverse">
                <div>
                  <p className="text-2xl">{cala.priceOff}</p>
                  <p className="line-through text-[#868590]">{cala.price}</p>
                </div>
                <span className="p-1.5 rounded-md bg-orange-300 text-orange-600">{cala.off}</span>
              </div>
            </Link>
          ))}
          <div className="flex items-center">
            <p className="text-white">همه</p>
            <i className="fa-solid fa-angle-left mt-0.5 text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offs;
