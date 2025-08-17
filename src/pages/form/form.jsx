import logo from "../../assets/basalamLogo.png";
import ReactDOM from "react-dom";
import { useContext, useState } from "react";
import { contextApi } from "../../context/context";

function Form() {
  const { setForm, setIsLogin } = useContext(contextApi);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  function btnHandler(e) {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setError("فیلد ها را پر کنید.");
      return;
    }

    setIsLogin(true);
    setForm(false);
  }
  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 w-screen h-screen backdrop-blur-sm z-40"
        onClick={() => setForm(false)}
      />

      <div className="fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl w-[90%] max-md:w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <img src={logo} alt="لوگوی باسلام" className="w-24 m-auto" />
          <i
            onClick={() => setForm(false)}
            className="fa-solid fa-xmark text-xl cursor-pointer"
          ></i>
        </div>
        <form>
          <h5 className="text-xl font-bold mb-2">عضویت یا ورود</h5>
          <label htmlFor="phone" className="text-sm mb-1 block">شماره تلفن همراه:</label>
          <input
            id="phone"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border rounded p-2 w-full mb-1.5"
            type="text"
          />
          {error && <p className="text-sm text-red-500 mb-3">{error}</p>}
          <span className="text-xs">
            عضویت شما به منزله پذیرش
            <a href="#" className="text-blue-500 underline">
              {" "}مقررات باسلام{" "}
            </a>
          </span>
          <div className="mt-2 mb-3">
            <input type="checkbox" id="accept" />
            <label htmlFor="accept" className="cursor-pointer mr-2 text-sm">
              به این شماره دسترسی ندارم
            </label>
          </div>
          <button
            onClick={btnHandler}
            type="submit"
            className="bg-red-500 w-full text-white py-2 rounded-md cursor-pointer"
          >
            ورود
          </button>
        </form>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Form;
