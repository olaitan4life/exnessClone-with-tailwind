import React from "react";
import Header from "../Shared/Header";
import card from "../../assets/card.svg";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import pc from "../../assets/PCI-DSS.svg";
import country from "../../assets/c0untry1.webp";
import country2 from "../../assets/country2.webp";
import country3 from "../../assets/country3.webp";
import Card from "../Card";

const Page = () => {
  return (
    <div className="font-roboto sm:w-full md:w-full border">
      <Header />
      <div className="  bg-trade bg-no-repeat  sm-block md-block bg-cover bg-center ... min-h-screen  text-white p-[4rem] sm:p-[1rem] sm:w-full">
        <div className="py-[5rem] px-[5rem] sm:w-full md:w-full ">
          <h1 className="text-6xl  mt-[6rem] font-weight: 700; leading-[5rem] w-[50%]">
            Online trading with better-than-market conditions
          </h1>
          <p className="text-xl w-[35%]">
            Trade across multiple markets with the most stable and reliable
            pricing in the industry.
          </p>
        </div>
        <div className="flex gap-5  px-[5rem]">
          <p className="px-10 py-5 bg-yellow-600 hover:bg-yellow-700 bg-yellow-900 rounded-lg">
            Register
          </p>
          <p className="px-10 py-5 bg-black border-solid border-2  hover:bg-yellow-900 border-yellow-500 ... rounded-lg">
            Try For Free
          </p>
        </div>
      </div>
      <div className="bg-black text-white py-4">
        <div>
          <p className="text-4xl   font-weight: 70; py-[2rem] ml-[10rem] px-[9rem] leading-[5rem] text-center w-[70%]">
            Instant withdrawals, 24/7
          </p>
        </div>
        <div className="text-[1.3rem] ml-[18rem] font-weight: 70;  leading-[2rem] text-center w-[60%]">
          <p>
            Our withdrawals are carried out in seconds with no manual
            processing, including on weekends.
          </p>
        </div>
        <div className="text-[1rem]  text-yellow-400 mt-9 ml-[7rem]  font-weight: 0;  leading-[1rem] text-center w-[90%]">
          <p>
            <a href="">Learn more about deposits & withdrawals at Exness</a>
          </p>
        </div>
        <div className="flex gap-8  leading-5 px-[20rem] h-[3rem] mb-[3rem] mt-[4rem]">
          <img src={card} alt="" />
          <img src={card1} alt="" />
          <img src={card2} alt="" />
          <img src={card3} alt="" />
        </div>
        <div className="flex justify-center w-[57%] px-[2rem] mx-[20rem]  gap-3">
          <img className="mb-[10rem]" src={pc} alt="" />
          <p className="text-stone-600 mb-[3rem]">
            We comply with the Payment Card Industry Data Security Standard (PCI
            DSS) to ensure your security and privacy. We guarantee a protected
            payment experience for you.
            <span className="text-yellow-500 ">
              <a href="#">Lean More</a>
            </span>
          </p>
        </div>
      </div>
      <div className="flex ">
        <div className="w-[50%]  bg-slate-600">
          <p className="text-[2rem] text-center p-[2rem]  text-white">
            Fast & reliable execution
          </p>
          <p className="text-[1rem] text-center p-[2rem]  text-white">
            With free VPS hosting
          </p>
          <p className="text-[1rem] text-center p-[2rem]  text-yellow-500">
            See Vip Details
          </p>
        </div>
        <div className="w-[50%]  bg-slate-700">
          <p className="text-[2rem] text-center p-[2rem]  text-white">
            Transparent price history
          </p>
          <p className="text-[1rem] text-center p-[2rem]  text-white">
            Tick-level data across all instruments
          </p>
          <p className="text-[1rem] text-center p-[2rem]  text-yellow-500">
            See Price History
          </p>
        </div>
      </div>
      {/* <div>
        <Card img={country} text="fsaklksdkal" text1="hfhgfgh" text2="hgjfh" />
        <Card img={country2} text="fsaklksdkal" text1="hfhgfgh" text2="hgjfh" />
        <Card img={country3} text="fsaklksdkal" text1="hfhgfgh" text2="hgjfh" />
      </div> */}
      <div className=" bg-[#f4f5f6]">
        <h1 className="text-center text-[3rem]">
          Access and trade global markets
        </h1>
        <div className="flex gap-5 m-10 leading-8">
          <div className="flex flex-col items-center text-center m-6 w-[30.3%] bg-white drop-shadow-xl p-[1rem] rounded-lg">
            <img className="h-10" src={country} alt="" />
            <p className="text-[1.5rem] font-bold m-4">Currencies</p>
            <p>
              Trade the world’s largest market with spreads starting from 0 pips
            </p>
            <a className="text-blue-500 hover:underline mt-5" href="">
              Learn More
            </a>
          </div>

          <div className=" flex flex-col items-center text-center m-6 w-[30.3%] bg-white drop-shadow-xl p-[1rem] rounded-lg">
            <img className="h-10" src={country2} alt="" />
            <p className="text-[1.5rem] font-bold m-4">Stocks</p>
            <p>
              Trade stocks of the biggest names in the international stock
              market with low transaction costs
            </p>
            <a className="text-blue-500 hover:underline mt-5" href="">
              Learn More
            </a>
          </div>
          <div className="flex flex-col items-center text-center w-[30.3%] m-6 bg-white drop-shadow-xl p-[1rem] rounded-lg">
            <img className="h-10" src={country3} alt="" />
            <p className="text-[1.5rem] font-bold m-4 text-center ">
              Commodities
            </p>
            <p>
              Diversify your portfolio and trade oil, natural gas and metals
            </p>
            <a className="text-blue-500 hover:underline mt-7" href="">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className=" p-20 rounded-6">
        <p className="text-center font-bold h-19 text-[2rem] m-9">
          Accounts to suit your trading strategy
        </p>
        <div className="flex justify-between  ">
          <div className="bg-black text-white m-17 p-[4rem] w-[50%]">
            <p className="font-bold text-[2rem] mb-20">Standard accounts</p>
            <p className="text-[1.5rem] my-[2rem]">Standard</p>
            <p className="text-[1.5rem] m-[0.7rem]">
              Feature-rich, commission-free accounts that suit the needs of
              today’s traders. Sign up and experience the advantages of our most
              popular account.
            </p>
            <button className="border  border-yellow-500 py-3 px-8">
              See Details
            </button>
          </div>
          <div className="bg-[#f4f5f6] text-black m-17 p-[4rem] w-[50%]">
            <p className="font-bold text-[2rem] mb-20">Professional accounts</p>
            <p className="text-[1.5rem] my-[2rem]">Raw Spread Zero Pro</p>
            <p className="text-[1.5rem] m-[0.7rem]">
              Flexible choice between raw spread model, zero spread and zero
              commission. For experienced traders, scalpers and algotraders.
            </p>
            <button className="border-2 border-black-500 py-3 px-8 ml-[20rem]">
              See Details
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between bg-[#f4f5f6] mt-0">
        <div className="w-[50%] mt-[12rem] p-[3rem]">
          <p className="text-bold text-[3rem]  ">
            The numbers that make up Exness
          </p>
          <p className="text-[1rem] mt-4 mb-4">
            From trading volume to number of active clients, we are happy to
            share with you the figures that make us one of the world’s leading
            brokers
          </p>
          <a className="text-blue-500" href="#">
            Learn More
          </a>
        </div>
        <div className="mr-[20rem] mt-[2rem] text-center">
          <span>
            <p className="text-bold  text-[3rem]  mt-[4rem] mb-[2rem]">
              $4.43 trillion
            </p>
            <p className="text-[1.2rem]">Trading volume in September 2023</p>
          </span>
          <span>
            <p className="text-bold  text-[3rem]  mt-[3rem] mb-2">653,593</p>
            <p className="text-[1.2rem]">Active clients in September 2023</p>
          </span>
          <span>
            <p className="text-bold  text-[3rem]  mt-[3rem] mb-2">
              $1.71 billion
            </p>
            <p className="text-[1.2rem]">Client withdrawals in Q3 2023</p>
          </span>
          <span className="">
            <p className="text-bold  text-[3rem]  mt-[3rem] mb-2">
              $140.8 million
            </p>
            <p className="text-[1.2rem]">Partner rewards in Q3 2023</p>
          </span>
        </div>
      </div>
      <div className=" bg-img bg-no-repeat bg-cover bg-center ... min-h-screen  text-white p-[4rem] sm:p-[1rem] sm:w-full">
        <p className="">Ready to get started?</p>
        <p>
          It only takes 3 minutes to get your account set up and ready for
          trading
          <button>Register</button>
        </p>
      </div>
    </div>
  );
};

export default Page;
