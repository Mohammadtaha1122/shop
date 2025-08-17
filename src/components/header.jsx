import { Link, useNavigate } from "react-router-dom";
import { contextApi } from "../context/context";
import { useContext, useEffect } from "react";
import Form from "../pages/form/form";

function Header() {
  const { isLogin } = useContext(contextApi);
  const { setForm, form, setSearchValue, searchValue } = useContext(contextApi);
  const navigate = useNavigate();
  const enterHandler = (e) => {
    if (e.key === "Enter") {
      if (searchValue.trim() !== "") {
        navigate(`/search?q=${searchValue}`);
      }
    }
  };
  return (
    <div className="bg-white py-3 shadow-sm">
      <header className="container flex justify-between items-center ">
        <div className="flex gap-5">
          <Link
            to={"/"}
            className="max-lg:hidden"
            onClick={() => setSearchValue("")}
          >
            <img
              src="https://basalam.com/img/basalam-logotype.svg"
              className="mt-1 w-[85px]"
              alt="لوگوی باسلام"
            />
          </Link>
          <div className="items-center flex max-lg:hidden">
            <i className="fa-solid fa-bars"></i>
            <span className="mr-2">دسته بندی ها</span>
          </div>
          <div className="max-lg:px-4 max-lg:w-screen ">
            <div className="flex items-center gap-3 px-4 bg-[#F3F3F4] p-3 rounded-2xl">
              <i
                onClick={() => navigate(`/search?q=${searchValue}`)}
                className="fa-solid fa-magnifying-glass cursor-pointer"
              ></i>
              <label htmlFor="header-search" className="sr-only">جست و جو در بازار</label>
              <input
                id="header-search"
                value={searchValue}
                onKeyDown={enterHandler}
                onChange={(e) => setSearchValue(e.target.value)}
                type="text"
                className="w-[550px] max-xl:w-full max-lg:w-full outline-none"
                placeholder="جست و جو در بازار"
              />
              <i className="fa-regular fa-camera"></i>
            </div>
          </div>
        </div>
        <div className="flex gap-5 max-lg:hidden">
          <Link className="flex flex-col items-center gap-2" to={"/chat"}>
            <i className="fa-solid fa-comments"></i>
            <span>گفت و کو ها</span>
          </Link>

          {isLogin ? (
            <div className="flex max-lg:hidden cursor-pointer flex-col items-center justify-center gap-1">
              <i className="fa-regular fa-circle-user text-2xl"></i>
              <div className="flex items-center gap-1">
                <span>حساب کاربری</span>
                <i className="fa-solid fa-chevron-down mt-1.5 text-[12px]"></i>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setForm(true)}
              className=" max-lg:hidden cursor-pointer flex flex-col items-center gap-2"
            >
              <i className="fa-solid fa-user text-lg"></i>
              <div>
                <span>ثبت نام</span>
                <span> | </span>
                <span>وارد شدن</span>
              </div>
            </button>
          )}
          <Link
            to={"/shopping"}
            className="flex max-lg:hidden flex-col items-center gap-2"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>سبد خرید</span>
          </Link>
          <Link
            to={"/createBoth"}
            className="px-2 py-1 flex max-lg:hidden justify-center items-center border-2 rounded-2xl gap-2 border-red-500 "
          >
            <i className="text-red-500 fa-solid fa-shop"></i>
            <span className="text-red-500">ایجاد غرفه</span>
          </Link>
        </div>
        <nav className="lg:hidden border-t border-gray-300 max-md:text-md max-md:font-semibold max-sm:text-sm fixed bottom-0 flex justify-around py-4 text-nowrap left-0 right-0 bg-white z-100">
          <Link
            to={"/"}
            className="flex flex-col items-center gap-2"
            onClick={() => setSearchValue("")}
          >
            <i className="fa-solid fa-house"></i>
            <span>خانه</span>
          </Link>
          <Link className="flex flex-col items-center gap-2" to={"/chat"}>
            <i className="fa-solid fa-comments"></i>
            <span>گفت و کو ها</span>
          </Link>
          <Link
            to={"/shopping"}
            className="flex flex-col items-center gap-2"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span>سبد خرید</span>
          </Link>
          {isLogin ? (
            <div className="flex cursor-pointer flex-col items-center justify-center gap-1">
              <i className="fa-regular fa-circle-user text-2xl"></i>
              <div className="flex items-center gap-1">
                <span>حساب کاربری</span>
                <i className="fa-solid fa-chevron-down mt-1.5 text-[12px]"></i>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setForm(true)}
              className=" cursor-pointer flex flex-col items-center gap-2"
            >
              <i className="fa-solid fa-user text-lg"></i>
              <div>
                <span>حساب کاربری</span>
              </div>
            </button>
          )}
        </nav>
      </header>
      {form && <Form />}
    </div>
  );
}

export default Header;
