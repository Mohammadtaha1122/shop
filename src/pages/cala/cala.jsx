import { useContext } from "react";
import { useParams } from "react-router-dom";
import { contextApi } from "../../context/context";

function Cala() {
  const { calas } = useContext(contextApi);
  const { id } = useParams();
  const calaData = calas.find((cala) => String(cala.id) === id);
  return (
    <div className="container gap-4 max-md:flex-col max-md:p-2 max-md:mb-20 justify-between flex mt-1">
      <img
        className="w-1/3 max-md:mx-auto rounded-2xl shadow-xl mt-10 mr-10"
        src={calaData.img}
        alt={`تصویر کالا شماره ${calaData.id}`}
      />
      <div className="mt-10 w-[550px] max-md:w-auto">
        <h1 className="text-3xl mb-4">کالا با شماره: {calaData.id}</h1>
        <h2 className="text-2xl  leading-10">{calaData.text}</h2>
        <div dir="ltr" className="flex justify-between px-4 items-center gap-3">
          <span className="text-xl p-2 bg-orange-300 text-orange-600 rounded-lg">{calaData.off}</span>
          <div className="flex items-center gap-4">
            <span className="text-xl">{calaData.price}</span>
            <span className="line-through text-[#b6b6bd]">{calaData.priceOff}</span>
          </div>
        </div>
        <button className="w-full rounded-xl text-white bg-orange-400 py-4 mt-6 transition ease-in hover:bg-orange-500 cursor-pointer">افزودن به سبد خرید</button>
      </div>
    </div>
  );
}

export default Cala;
