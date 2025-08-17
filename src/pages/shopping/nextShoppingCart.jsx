import { useContext } from "react";
import { contextApi } from "../../context/context";
import { useNavigate } from "react-router-dom";

function NextShoppingCart() {
  const { setForm, isLogin } = useContext(contextApi);
  const navigate = useNavigate();
  return (
    <div className="container">
      {isLogin ? (
        <div className="h-full flex items-center">
          <div className="container flex justify-center items-center flex-col">
            <img
              className="w-50 mb-10"
              src="https://statics.basalam.com/public-2/admin/67gZL/04-30/zODlVbCzBSQxemJBFTwtA9dPd8txNdMd43cCvnIiTIKbIrZVBc.SVG"
              alt="img"
            />
            <h4 className="text-xl">سبد خرید بعدیت   خالیه</h4>
            <h5 className="text-lg mt-2 text-[#868590]">
              یه چرخی توی بازار بزن، شاید چیزی خواستی.
            </h5>
            <button
              onClick={() => navigate("/")}
              className="p-3 bg-[#ff5c35] rounded-xl text-white mt-4 cursor-pointer hover:bg-orange-700 transition ease-in"
            >
              بازار گردی
            </button>
          </div>
        </div>
      ) : (
        <div className=" flex text-center items-center">
          <div className="w-2/3 mt-4">
            <h3 className="mb-4">
              برای دیدن سبد خرید دوم لطفا وارد حساب کاربری خود شوید
            </h3>
            <button
              onClick={() => setForm(true)}
              className="bg-orange-600 hover:bg-orange-700 cursor-pointer transition-all ease-in text-white p-4  rounded-lg"
            >
              ثبت نام/ورود
            </button>
          </div>
          <div className="w-1/3 mt-4 border border-gray-300 rounded-2xl p-5 ">
            <h3 className="mb-8 text-[#252438] text-xl">سبد خرید بعدی چیه؟</h3>
            <p className="text-[#3d3d4e]">
              اگه چیزی رو می‌خوای بعدا بخری، می‌تونی فعلا این‌جا نگه‌ش داری تا
              هروقت خواستی به سبد خریدت اضافه کنی.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default NextShoppingCart;
