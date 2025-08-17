import { useState } from "react";

function BothAbout() {
  const data = [
    {
      img: "https://statics.basalam.com/public-81/admin/yDBE2/05-11/WS5T24RQty6oDsPf5PYIrI6vrjqf1mYKJfOwmOGJFCp681HWJ6.SVG",
      number: "+20,000,000",
      title: "کاربر ثبت‌نامی",
    },
    {
      img: "https://statics.basalam.com/public-81/admin/yDBE2/05-11/pxBmgNqiWwyjMa5TYNKRAMgAp4KQixUnCX1zUrvgvBfXI1P9Wo.SVG",
      number: "+5,000,000",
      title: "خریدار واقعی",
    },
    {
      img: "https://statics.basalam.com/public-81/admin/yDBE2/05-11/MYssiWHAs2aogR2U2v31xTdiQg3aWtKgY0EfTikw6ustVMIXdf.SVG",
      number: "+200,000",
      title: "غرفه",
    },
  ];
  return (
    <section className="flex flex-col mt-10  py-10 items-center text-center">
      <div className="flex w-[70%]  justify-between gap-10">
        {data.map((item ,i) => (
          <div key={i} className="flex w-full flex-col m-auto items-center gap-3 border-1 border-gray-400 rounded-3xl py-8 justify-center">
            <img className="w-[60px]" src={item.img} alt={item.title} />
            <h3 className="text-3xl">{item.number}</h3>
            <h4 className="text-2xl">{item.title}</h4>
          </div>
        ))}
      </div>
      <h3 className="text-2xl my-7">
        جای خودت رو توی این بازار بزرگ پیدا کن و بدرخش!
      </h3>
      <button className="py-2.5 px-14 bg-[#1c2575] cursor-pointer rounded-lg text-lg text-white">
        ایجاد غرفه
      </button>
    </section>
  );
}

export default BothAbout;
