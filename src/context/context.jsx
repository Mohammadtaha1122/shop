import { createContext, useState } from "react";

export const contextApi = createContext();

function ContextProvider({ children }) {
  const [form, setForm] = useState(false);
  const calas = [
    {
      id: 1,
      img: "https://statics.basalam.com/public-81/users/20PL3/05-12/fmucYblYHAsXCueUeGd19Jp03E8ytjynqBpNUTsYIsBa6XVSqi.jpg_256X256X70.jpg",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 1 .",
      price: "9$",
      priceOff: "8$",
      off: "5%",
    },
    {
      id: 2,
      img: "https://statics.basalam.com/public-109/users/qwXgzB/07-26/vF0iADSJKB7GPCh580GcZS7QOjdxg7a9VP7RprklGQskGA8Wy0.jpg_256X256X70.jpg",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 2 .",
      price: "9$",
      priceOff: "8$",
      off: "5%",
    },
    {
      id: 3,
      img: "https://statics.basalam.com/public-66/users/OXQEN/03-02/Se6jZdrykUR9qCkfblUtQgKvX4m4KkWjmEPnJ3MUZmcu0ikDIt.jpg_256X256X70.jpg",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 3 .",
      price: "9$",
      priceOff: "8$",
      off: "5%",
    },
    {
      id: 4,
      img: "https://statics.basalam.com/public-83/users/k45ZXw/05-17/WoEDcergUsrX6Zqhp4hJAtCxkmzGYKsXt2U2CycqpyXAx0CYub.jpg_256X256X70.jpg",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 4 .",
      price: "9$",
      priceOff: "8$",
      off: "5%",
    },
    {
      id: 5,
      img: "https://statics.basalam.com/public-98/users/qXG5zE/06-22/vkOKjnR2uX7ZFF2uy4GgNSINlZ0k8tboShalgDfKNRsNd1eTy9.jpg_256X256X70.jpg",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 5 .",
      price: "9$",
      priceOff: "8$",
      off: "5%",
    },
    {
      id: 6,
      img: "https://statics.basalam.com/public-82/users/noogY/05-15/qKo2ipjaLmpvXPprs2b5Kua4cVfs9SOB81iNkspUyYONlFmKLP.jpg_256X256X70.jpg",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 6 .",
      price: "9$",
      priceOff: "8$",
      off: "5%",
    },
    {
      id: 7,
      img: "https://statics.basalam.com/public-39/users/kxbGe/10-26/wjHYhQHf5WmFCIfezFgr7beuEpVXiYCv6vdhAS5lvsWzIqVr0N.jpg_256X256X70.jpg",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 7 .",
      price: "9$",
      priceOff: "8$",
      off: "5%",
    },
    {
      id: 8,
      img: "https://statics.basalam.com/public-98/users/qXG5zE/06-22/vkOKjnR2uX7ZFF2uy4GgNSINlZ0k8tboShalgDfKNRsNd1eTy9.jpg_256X256X70.jpg",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ 8 .",
      price: "5$",
      priceOff: "3$",
      off: "8%",
    },
  ];
  const [isLogin, setIsLogin] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [buying ,setBuying] = useState([])
  return (
    <contextApi.Provider
      value={{
        form,
        setForm,
        calas,
        isLogin,
        setIsLogin,
        setSearchValue,
        searchValue,
        buying,
        setBuying,
      }}
    >
      {children}
    </contextApi.Provider>
  );
}

export default ContextProvider;
