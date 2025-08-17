import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { contextApi } from "../../context/context";

function ShoppingCart() {
  const { buying } = useContext(contextApi);
  const navigate = useNavigate();

  return (
    <div className="bg-white h-screen">
      <div className="w-full min-h-screen bg-white">
        <div className="h-full flex container mt-5 items-center">
          {buying.length > 0 ? (
            <ul className="flex flex-col h-full w-full gap-4">
              {buying.map((item) => (
                <li className="w-full flex gap-8 p-4 py-6 border-2 border-gray-300 rounded-2xl" key={item.id}>
                  <img src={item.images} className="w-[150px] rounded-2xl" alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.price}$</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="container flex justify-center items-center flex-col">
              <img
                className="w-50 mb-10"
                src="https://statics.basalam.com/public-2/admin/67gZL/04-30/zODlVbCzBSQxemJBFTwtA9dPd8txNdMd43cCvnIiTIKbIrZVBc.SVG"
                alt="img"
              />
              <h4 className="text-xl">سبد خریدت خالیه</h4>
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
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
