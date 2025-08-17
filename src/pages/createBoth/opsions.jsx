function Opsions() {
  const boxLeft = [
    {
      img: "https://statics.basalam.com/public-81/admin/yDBE2/05-11/CPzRlhdaSWaNObEiGXWhSElXTatqp7UCSUgQQGFE56jIPM1w5q.SVG",
      title: "تبلیغ تلویزیونی بدون هزینه",
      p: "همه ایران باسلام رو از تبلیغات تلویزیونی می‌بینن.‌ بدون هزینه، بازدید زیادی داری.",
    },
    {
      img: "https://statics.basalam.com/public-81/admin/yDBE2/05-11/t6LEQaZ5Va1cA8jIwpEFAes2uUXHmhHJ9fRTXDPzhk0EONf9h1.SVG",
      title: "ارتباط مستقیم با مشتری",
      p: "باسلام بین شما و مشتری‌هات دیوار نمي‌کشه. خودت مستقیم با مشتری‌هات صحبت کن.",
    },
    {
      img: "https://statics.basalam.com/public-81/admin/yDBE2/05-11/oChBYEnoMpBqdMEkCqpLTIWfy03IIzarO7hqhJ3ElRDB1Gk5KS.SVG",
      title: "پشتیبانی حرفه‌ای در کنار شما",
      p: "خودت و مشتری‌هات به هر مشکلی خوردید، می‌تونید از پشتیبانی باسلام کمک بگیرید.",
    },
  ];
  const boxRight = [
    {
      img: "https://statics.basalam.com/public-81/admin/yDBE2/05-11/IJ6Axd9MaTNWWvaSqdQyR5zK6wdctx5yNgjUwKpX4vVGqa430n.SVG",
      title: "امکان فروش قسطی و اعتباری",
      p: "یه مسیر امن و حساب‌شده برای فروش قسطی داری و مشتری‌های بیشتری سراغت میان.",
    },
    {
      img: "https://statics.basalam.com/public-81/admin/yDBE2/05-11/yd6JONsXbrQtohHJvC3S7wZId4UPoeOI0snILVmkq5o0In5mtQ.SVG",
      title: "تسویه حساب شفاف با گزارش‌های دقیق",
      p: "بدون نیاز به نرم‌افزار حسابداری، ریز سفارش‌ها، فروش، درآمد و کارمزدت رو ببین.",
    },
    {
      img: "https://statics.basalam.com/public-81/admin/yDBE2/05-11/YXbTCA5nkXuNONOhKqfqHWFRA5OfA0uLovVCf602BaS653TBnm.SVG",
      title: "برخورداری از اعتماد مشتری‌ها",
      p: "به خاطر ضمانت باسلام، مشتری‌ها موقع ثبت سفارش، کل مبلغ رو یکجا پرداخت می‌کنند.",
    },
  ];
  return (
    <div className=" bg-[#eaf3fa] py-10 pb-30">
      <h4 className="text-center text-3xl ">مزایای فروش در باسلام</h4>

      <div className="container px-10 gap-7 flex justify-center items-center py-6">
        <div className="flex flex-col gap-6">
          {boxLeft.map((item ,i) => (
            <div key={i} className="flex border-1 gap-5 bg-white shadow-sm border-gray-300 p-4 rounded-2xl">
              <img src={item.img} alt="" />
              <div>
                <h5 className="text-lg mb-3">{item.title}</h5>
                <p className="text-[#565564]">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img
            className="min-w-[390px] rounded-3xl mt-10"
            src="https://statics.basalam.com/public-81/admin/yDBE2/05-11/ImaCJVLYOonnd2tY9XR2YdGHVrvx0IEkPdP5aZzrqGA4SIyMFr.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6">
          {boxRight.map((item ,i) => (
            <div key={i} className="flex border-1 gap-5 bg-white shadow-sm border-gray-300 p-4 rounded-2xl">
              <img src={item.img} alt="" />
              <div>
                <h5 className="text-lg mb-3">{item.title}</h5>
                <p className="text-[#565564]">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Opsions;
