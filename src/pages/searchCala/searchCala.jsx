import { useContext, useEffect, useState } from "react";
import { contextApi } from "../../context/context";
import { Link, useSearchParams } from "react-router-dom";

function SearchCala() {
  const [searchParams] = useSearchParams();
  const { searchValue, setSearchValue } = useContext(contextApi);
  const query = searchParams.get("q");
  const [cala, setCala] = useState([]);

  useEffect(() => {
    async function fetchResult() {
      const res = await fetch(`https://dummyjson.com/products/search?q=${searchValue}`);
      const data = await res.json();
      const filteredCala = data.products.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setCala(filteredCala);
    }
    setSearchValue(query);
    fetchResult();
  }, [query]);

  return (
    <div className="bg-white pt-1">
      <div className="container">
        <ul className="grid max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 grid-cols-4 gap-4">
          {cala.map((item) => (
            <Link
              to={`/cala/${item.id}`}
              key={item.id}
              className="border border-gray-300 rounded-2xl p-3"
            >
              <img
                className="w-full rounded-2xl"
                src={item.images?.[0]}
                alt={`تصویر محصول ${item.title}`}
              />
              <h2 className="text-xl mb-10 line-clamp-1">{item.title}</h2>
              <h3 className="line-clamp-2 mb-5">{item.description}</h3>
              <div className="flex justify-between text-lg">
                <h3>{item.price}$</h3>
                <div className="flex gap-1.5 mb-5 items-center">
                  <i className="fa-solid fa-star text-yellow-400 text-[16px]"></i>
                  <h3>{item.rating}</h3>
                </div>
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchCala;
