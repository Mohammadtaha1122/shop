import { useContext } from "react";
import { useParams } from "react-router-dom";
import { contextApi } from "../../context/context";

function Cala() {
  const { calas } = useContext(contextApi);
  const { id } = useParams();
  const calaData = calas.find((cala) => String(cala.id) === id);
  return (
    <div className=" container justify-between flex mt-1">
      <img
        className="w-1/2 rounded-2xl shadow-2xl mt-10 mr-10"
        src={calaData.img}
        alt=""
      />
      <div className="mt-10 w-[550px]">
        <h1 className="text-3xl mb-4"> کالا با شماره:{calaData.id}</h1>
        <h2 className="text-2xl leading-10">{calaData.text}</h2>
        <div dir="ltr" className="flex items-center gap-3">
          <span className="text-xl p-2 bg-orange-300 text-orange-600 rounded-lg">{calaData.off}</span>
          <span className="text-xl">{calaData.price}</span>
          <span className="line-through text-[#b6b6bd]">{calaData.priceOff}</span>
        </div>
        <button className="w-full rounded-xl text-white bg-orange-400 py-4 mt-6 transition ease-in hover:bg-orange-500 cursor-pointer">افزودن به سبد خرید</button>
      </div>
    </div>
  );
}

export default Cala;
