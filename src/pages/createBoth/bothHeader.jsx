import BothNavbar from "./bothNavbar";
import logo from '../../assets/iranMap.png'

function BothHeaderBottom() {
  return (
    <section>
      <img
        src="https://statics.basalam.com/public-82/admin/yDBE2/05-14/PxCrIbHR6t00uqGQfyKC2Z7PKIHXjDkE9uWFAKHuDzxORRRQyB.jpg"
        className=" absolute z-[-1] top-0"
        alt=""
      />
      <BothNavbar />
      <div className="container flex justify-between items-center pt-50 pb-20 px-10 flex-row-reverse ">
        <img src={logo} alt="" className="w-[520px]" />
        <div className="">
          <h2 className="mb-15 text-6xl text-white font-bold">
            به همه ایران بفروش
          </h2>
          <h3 className="mb-15 text-3xl text-white">
            به جمع 200 هزار نفری غرفه‌دارها بیا
          </h3>
          <button className="py-2.5 px-14 bg-[#1c2575] cursor-pointer rounded-lg text-lg text-white">
            ایجاد غرفه
          </button>
        </div>
      </div>
    </section>
  );
}

export default BothHeaderBottom;
