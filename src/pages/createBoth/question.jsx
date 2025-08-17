import { useState } from "react";

function Question() {
  const data = [
    {
      id: 1,
      title: "کارمزد در باسلام چند درصده؟",
      text: "کارمزد باسلام از هر سفارش، بسته به دسته‌بندی محصولت بین 2 تا 10 درصده. برای اطلاعات بیشتر،جزییات هر دسته‌بندی رو ببین.",
    },
    {
      id: 2,
      title: "برای ارسال سفارش چه‌کار کنم؟",
      text: "روش‌ها و هزینه ارسال رو خودت تنظیم می‌کنی. وقتی مشتری سفارش ثبت کرد، با همون روشی که قبلا بهش اعلام کردی، براش ارسال می‌کنی. ممکنه از طریق پیک، پست، باربری یا هر روش دیگه‌ای باشه که مناسب محصولات خودته.",
    },
    {
      id: 3,
      title: "هزینه‌های ارسال سفارش با کیه؟",
      text: "هزینه ارسال سفارش به عهده مشتریه و هنگام ثبت سفارش، پرداخت می‌شه. ولی تعیین هزینه و شیوه ارسال به عهده شماست. هر چقدر هزینه‌های بصرفه‌تری بذاری، برای مشتری‌ها جذاب‌تره.",
    },
    {
      id: 4,
      title: "تسویه حساب باسلام با غرفه‌دارها چطوریه؟",
      text: "بعد از اینکه سفارش شما صحیح و سالم به دست مشتری برسه و سفارش با رضایت مشتری به پایان برسه، فرایند تسویه با شما شروع می‌شه که حداکثر 15 روز کاری طول می‌کشه.",
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  const btnHandler = (Id) => {
    setIsOpen((prev) => (prev === Id ? null : Id));
  };

  return (
    <div className="container pt-10 pb-10">
      <h4 className="text-2xl text-center mb-10 font-bold text-[#1c2575]">
        سوال‌های پرتکرار
      </h4>
      <div className="space-y-4">
        {data.map((item) => (
          <div
            onClick={() => btnHandler(item.id)}
            className="cursor-pointer border-b border-gray-200 pb-2 transition-all"
            key={item.id}
          >
            <div className="flex justify-between items-center">
              <p className="text-lg py-4 font-semibold text-[#1c2575]">
                {item.title}
              </p>
              <i
                className={`fa-solid transition-transform duration-300 ${
                  isOpen === item.id ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen === item.id
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="pb-4 text-gray-700">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Question;
