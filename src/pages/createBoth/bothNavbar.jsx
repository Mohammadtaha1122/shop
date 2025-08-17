import { useNavigate } from "react-router-dom";

function BothNavbar() {
  const navigate = useNavigate()
  return (
    <div className="bg-white/50 py-4 shadow-sm fixed top-0 left-0 right-0">
      <header className="container flex justify-between items-center">
        <img
          onClick={() => navigate('/')}
          src="https://basalam.com/img/basalam-logotype.svg"
          className="w-[85px] cursor-pointer"
          alt="لوگوی بازار باسلام - بازگشت به صفحه اصلی"
        />
        <div className="flex items-center gap-5">
          <a href="/createBoth" className="py-2.5 px-10 bg-[#1c2575] cursor-pointer rounded-lg text-lg text-white inline-block text-center">
            ایجاد غرفه
          </a>
          <a href="/createLegalBoth" className="flex items-center gap-2 text-[#1c2575] cursor-pointer text-lg">
            <span>ایجاد غرفه حقوقی</span>
            <i className="fa-solid fa-angle-left mt-0.5"></i>
          </a>
        </div>
      </header>
    </div>
  );
}

export default BothNavbar;
