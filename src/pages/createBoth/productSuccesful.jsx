import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductSuccesful() {
  const images = [
    { id: 1, img: "https://picsum.photos/800/400?random=1" },
    { id: 2, img: "https://picsum.photos/800/400?random=2" },
    { id: 3, img: "https://picsum.photos/800/400?random=3" },
    { id: 4, img: "https://picsum.photos/800/400?random=4" },
  ];
  return (
    <div className="container py-20 items-center flex justify-between">
      <div className="w-[50%]">
        <h5 className="text-2xl mb-7">
          تجربه <span className="text-[#1c2575]">غرفه‌های</span> موفق باسلام
        </h5>
        <p className="mb-7">
          «نصب این برچسب‌ها کار هر کسی نیست ولی با قابلیت گفتگوی باسلام، هیچ
          کاری نشد نداره. مشتری‌هامون رو یه جوری راهنمایی می‌کنیم که خودشون یه
          پا اوستا بشن.»
        </p>
        <div className="flex gap-2 items-center mb-16">
          <i className="fa-solid fa-shop"></i>
          <p className="text-[]">آریو برچسب</p>
        </div>
        <p className="mb-6">همه موفق‌ها یه روزی مثل امروز شما شروع کردند</p>
        <button className="py-2.5 px-14 bg-[#1c2575] cursor-pointer rounded-lg text-lg text-white">
          ایجاد غرفه
        </button>
      </div>
      <div className="w-[600px] h-[400px]">
        <Swiper
          modules={[Navigation,Pagination,Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{delay:6000}}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="rounded-2xl"
        >
          {images.map(image => (
            <SwiperSlide><img key={image.id} src={image.img} alt="" /></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSuccesful;
