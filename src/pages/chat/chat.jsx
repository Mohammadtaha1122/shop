import { useState } from "react";
import profile from "../../assets/profile.png";

function Chat() {
  const [text, setText] = useState("");
  // const [chatBox ,setChatBox] = useState()
  function btnHandler() {
    setText("chat basalam");
  }
  function backBtn() {
    setText('');
  }

  return (
    <div className="container mt-1 flex max-md:flex-col bg-white h-screen w-screen">
      <div className="flex flex-col gap-2 p-4 max-md:w-full w-[30%] ">
        <span className="text-xs text-gray-500 self-end">۱۷ خرداد</span>

        <button
          onClick={btnHandler}
          className="bg-white rounded-xl shadow p-3 hover:bg-gray-300 cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <img
              src={profile}
              alt="img"
              className="rounded-full w-[50px] mb-3"
            />
            <span className="text-black  text-xl px-2 py-1 rounded-md">
              باسلام
            </span>
          </div>

          <p className="mt-2 text-sm text-gray-700 leading-6">
            باسلامی عزیز سلام! چند روز گذشته گزارش‌هایی از...
          </p>
        </button>
      </div>
      {text === "" ? (
        <div className="w-[70%] max-md:w-full flex-col flex justify-center items-center">
          <img
            src="https://statics.basalam.com/public/admin/3KVn1/01-17/pUnFcqXFpQvDQHUKFEV80uQiKqlwWgm907fPanEvbIHvlyXfcj.svg"
            className="w-[300px]"
            alt=""
          />
          <span>گفت‌وگو کنید</span>
        </div>
      ) : (
        <div className="flex flex-col w-screen">
          <button className=" cursor-pointer p-3 border-2 rounded-2xl mb-6 mx-auto justify-center" onClick={backBtn}>back</button>
          <p>{text}</p>
          
        </div>
      )}
    </div>
  );
}

export default Chat;
