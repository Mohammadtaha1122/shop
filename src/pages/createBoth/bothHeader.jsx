import BothNavbar from "./bothNavbar";
import logo from '../../assets/iranMap.png'

function BothHeaderBottom() {
  return (
    <section>
      <img
        src="https://statics.basalam.com/public-82/admin/yDBE2/05-14/PxCrIbHR6t00uqGQfyKC2Z7PKIHXjDkE9uWFAKHuDzxORRRQyB.jpg"
        className="absolute z-[-1] top-0"
        alt="تصویر پس‌زمینه تبلیغاتی برای فروش در ایران"
      />
      <BothNavbar />
      <div className="container flex justify-between items-center pt-50 pb-20 px-10 flex-row-reverse">
        <img src={logo} alt="نقشه ایران - لوگوی بازار" className="w-[520px]" />
        <div>
          <h1 className="mb-15 text-6xl text-white font-bold">
            به همه ایران بفروش
          </h1>
          <h2 className="mb-15 text-3xl text-white">
            به جمع 200 هزار نفری غرفه‌دارها بیا
          </h2>
          <a href="/createBoth" className="py-2.5 px-14 bg-[#1c2575] cursor-pointer rounded-lg text-lg text-white inline-block text-center">
            ایجاد غرفه
          </a>
        </div>
      </div>
    </section>
  );
}

export default BothHeaderBottom;
