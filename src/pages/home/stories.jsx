import axios from "axios";
import { useEffect, useState } from "react";

function Stories() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=6").then((res) => {
      setItems(res.data.products);
    });
  }, []);

  return (
    <div className="flex gap-5 overflow-scroll max-md:px-4 container items-center text-center py-10 ">
      {items.map((item) => (
        <div key={item.id} className="w-[94px]">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-24 max-md:w-20 max-sm:w-18 rounded-full border-2 border-red-500 object-cover"
          />
          <p className="truncate">{item.title}</p>
        </div>
      ))}
      <div className="flex gap-6 flex-col max-md:px-4 mr-5">
        <p className="text-[#3d3d4e] text-nowrap">برای استوری های بیشتر</p>
        <a className="flex text-[#ff5c35] gap-1.5 text-nowrap">
          <p>برو بازار گردی</p>
          <i className="fa-solid fa-angle-left mt-1"></i>
        </a>
      </div>
    </div>
  );
}

export default Stories;
