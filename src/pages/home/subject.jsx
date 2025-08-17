import { useRef } from "react";
function Subject() {
  const items = [
    {
      id: 1,
      icon: "https://flagcdn.com/w40/ir.png",
      title: "قدرت گرفته از خودمان",
    },
    {
      id: 2,
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      title: "طلا",
    },
    {
      id: 3,
      icon: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
      title: "کتاب‌های کنکور",
    },
    {
      id: 4,
      icon: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
      title: "لوازم خانگی",
    },
    {
      id: 5,
      icon: "https://flagcdn.com/w40/ir.png",
      title: "قدرت گرفته از خودمان",
    },
    {
      id: 6,
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      title: "طلا",
    },
    {
      id: 7,
      icon: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
      title: "کتاب‌های کنکور",
    },
    {
      id: 8,
      icon: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
      title: "لوازم خانگی",
    },
    {
      id: 9,
      icon: "https://flagcdn.com/w40/ir.png",
      title: "قدرت گرفته از خودمان",
    },
    {
      id: 10,
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      title: "طلا",
    },
    {
      id: 11,
      icon: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
      title: "کتاب‌های کنکور",
    },
    {
      id: 12,
      icon: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
      title: "لوازم خانگی",
    },
    {
      id: 9,
      icon: "https://flagcdn.com/w40/ir.png",
      title: "قدرت گرفته از خودمان",
    },
    {
      id: 10,
      icon: "https://cdn-icons-png.flaticon.com/512/1828/1828884.png",
      title: "طلا",
    },
    {
      id: 11,
      icon: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
      title: "کتاب‌های کنکور",
    },
    {
      id: 12,
      icon: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
      title: "لوازم خانگی",
    },
    // ...بقیه موردها
  ];

  const scrollRef = useRef();

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200 });
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy({ left: 200 });
  };

  return (
    <div className="my-10">
      <div className="relative overflow-hidden my-10 max-md:px-4 container">
        <button
          onClick={handleScrollLeft}
          className="absolute max-md:hidden right-full top-[96px] -translate-y-1/2 z-10 bg-white rounded p-2 shadow"
        >
          <i className="fa-solid fa-angle-left absolute bg-white text-black rounded-md left-30 bottom-13 flex justify-center pl-6 p-4"></i>
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide px-4"
        >
          {items.map((item ,i) => (
            <div 
              key={i}
              className="flex flex-col items-center min-w-[100px] text-center"
            >
              <img src={item.icon} className="w-10 h-10 mb-2" />
              <p className="text-sm font-semibold whitespace-nowrap">
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={handleScrollRight}
          className="absolute max-md:hidden left-full top-[96px] -translate-y-1/2 z-10 bg-white rounded p-2 shadow"
        >
          <i className="fa-solid fa-angle-right absolute bg-white text-black rounded-md right-30 bottom-13 flex justify-center pl-6 p-4"></i>
        </button>
      </div>
    </div>
  );
}

export default Subject;
