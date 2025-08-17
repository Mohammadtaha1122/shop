import { useState } from "react";
import logo from "../assets/basalamLogo.png";
import payBank from "../assets/payBank.png";
import pay from "../assets/pay.png";
import chat from "../assets/chat.png";
import support from "../assets/support.png";

function Footer() {
  const [proimes] = useState([
    {id: 1, logo: payBank, text: "پرداخت امن از درگاه بانکی" },
    {id: 2, logo: pay, text: "تضمین بازگشت وجه توسط باسلام" },
    {id: 3, logo: chat, text: "ارتباط مستقیم با آدم‌ها" },
    {id: 4, logo: support, text: "پشتیبانی آنلاین و تلفنی" },
  ]);
  return (
    <div className="bg-white py-4">
      <div className=" flex max-md:flex-col max-lg:mb-14 justify-between items-center container ">
        <div className="">
          <img src={logo} alt="" />
        </div>
        <div className="grid grid-cols-2 gap-8">
          {proimes.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <img src={item.logo} alt="logo" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="mb-4">ایمیلت رو وارد کن تا از تخفیف‌ها باخبر بشی</p>
          <form className=" flex justify-between">
            <input type="text" className="w-[350px] max-md:w-full border-2 border-gray-600 outline-none rounded-lg ml-4 px-2 py-4" placeholder="ایمیل"/>
            <button className="bg-[#FF5C35] text-white py-4 px-6 rounded-2xl" type="submit">ارسال</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
