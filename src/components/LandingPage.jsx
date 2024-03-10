import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {/*<div className='masker'>
                <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-["Founders_Grotesk "] font-medium'>
                    We Create
                </h1>
            </div>
            <div className='masker'>
                <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-["Founders_Grotesk "] font-medium'>
                    Eye Opening
                </h1>
            </div>
            <div className='masker'>
                <h1 className='uppercase text-8xl leading-[5.5vw] tracking-tighter font-["Founders_Grotesk "] font-medium'>
                    Presentations
                </h1>
            </div>*/}

        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <h1 className='uppercase text-[6.5vw] leading-[5.5vw] tracking-tighter font-["Founders_Grotesk "] font-medium'>
                {item}
              </h1>
            </div>
          );
        })}
      </div>
      <div className="border-t-[2px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] rounded-full border-zinc-600 font-light text-white uppercase">
            Start the project
          </div>
          <div className="w-10 h-10 flex tems-center justify-center border-[2px] border-zinc-600 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
