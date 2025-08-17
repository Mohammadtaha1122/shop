import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contextApi } from "../../context/context";

function CalaDetail() {
  const { setBuying } = useContext(contextApi);
  const { id } = useParams();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchResult() {
      const res = await fetch("https://dummyjson.com/products/");
      const data = await res.json();
      const found = data.products.find(item => String(item.id) === id);
      setProducts(found);
    }
    fetchResult();
  }, []);

  if (!products) return <p className="text-center mt-10">در حال بارگذاری ...</p>;

  return (
    <div className="container mb-25">
      <div className="container justify-between flex max-md:flex-col mt-1">
        <div>
          <img
            className="w-1/2 max-md:m-auto max-sm:w-full rounded-2xl shadow-2xl mt-10 mr-10"
            src={products.images?.[0]}
            alt={`تصویر محصول ${products.title}`}
          />
        </div>
        <div className="mt-10 w-[550px] max-md:w-auto">
          <h1 className="text-3xl mb-4">کالا با شماره: {products.id}</h1>
          <h2 className="text-2xl leading-10">{products.title}</h2>
          <div dir="ltr" className="flex items-center gap-3">
            <span className="text-xl">{products.price}$</span>
          </div>
          <button
            onClick={() => setBuying(prev => [...prev, products])}
            className="w-full rounded-xl text-white bg-orange-400 py-4 mt-6 transition ease-in hover:bg-orange-500 cursor-pointer"
          >
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalaDetail;
