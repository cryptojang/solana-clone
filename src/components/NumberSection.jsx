import LiveDot from "./LiveDot";

const NumberSection = () => {
  return (
    <section className=" h-[1666.92px] relative">
      <img
        className="absolute top-0 left-0 w-full h-full -z-10 object-cover rotate-180"
        src="./images/glow-lines.webp"
        alt="glow-lines"
      />
      <div className="container py-[125px] ">
        <div className=" h-[653.89px] pb-20 flex">
          <ul className=" w-[600px] h-full px-5 mt-20 text-[42px] text-white flex flex-col text-semibold ">
            <li>Join a community</li>
            <li> of millions.</li>
          </ul>
          <div className=" font-light   w-[600px] h-full px-5 flex flex-col justify-between">
            <ul className="h-[160px] w-[370px]">
              <li className=" text-[110px] text-transparent text-8xl bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-950">
                11.5 M+
              </li>
              <li className="text-[16px] text-[#c4c4c4]">ACTIVE ACCOUNTS</li>
            </ul>
            <ul className="h-[160px] w-[370px]">
              <li className=" text-[110px] text-transparent text-8xl bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">
                21.9 M
              </li>
              <li className="text-[16px] text-[#c4c4c4]">NTS MINTED</li>
            </ul>
            <ul className="h-[160px]">
              <li className=" text-[110px] text-transparent text-8xl bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-700">
                $0.00025
              </li>
              <li className="text-[16px] text-[#c4c4c4]">
                AVERAGE COST PER TRANSACTION
              </li>
            </ul>
          </div>
        </div>
        <div className="  h-[699.03px] pt-16 mt-16 flex">
          <div className=" w-[400px] h-full  ">
            <ul className="text-[42px] text-white flex flex-col text-semibold mb-2 ">
              <li>Made for mass</li>
              <li> adoption</li>
            </ul>
            <div className="flex">
              <LiveDot />
              <div className="text-solana-200">LIVE DATA</div>
            </div>
          </div>
          <div className=" w-[400px] h-full">
            <div className="h-[309.52px] px-5 mb-2">
              <ul className="p-8 h-full">
                <li className="mb-2 pl-[15px] text-[28px] font-semibold text-white border-l-2 border-cyan-300">
                  Fast
                </li>
                <li className="text-solana-200 mb-4">
                  Don’t keep your users waiting. Solana has block times of 400
                  milliseconds — and as hardware gets faster, so will the
                  network.
                </li>
                <div className="mt-8">
                  <li className="flex">
                    <LiveDot />
                    <div className="text-white text-[28px] ">4,764</div>
                  </li>
                  <li className="text-solana-200">TRANSACTIONS PER SECOND</li>
                </div>
              </ul>
            </div>
            <div className="h-[309.52px] px-5 mb-2">
              <ul className="p-8 h-full">
                <li className="mb-2 pl-[15px] text-[28px] font-semibold text-white border-l-2 border-purple-500">
                  확장성
                </li>
                <li className="text-solana-200 mb-4">
                  Get big, quick. Solana is made to handle thousands of
                  transactions per second, and fees for both developers and
                  users remain less than $0.0025.
                </li>
                <div className="mt-8">
                  <li className="flex">
                    <LiveDot />
                    <div className="text-white text-[28px] ">
                      246,525,253,892
                    </div>
                  </li>
                  <li className="text-solana-200">TOTAL TRANSACTIONS</li>
                </div>
              </ul>
            </div>
          </div>
          <div className=" w-[400px] h-full relative">
            <div className=" w-[400px ] h-[389.52px] px-5 mb-2 absolute -top-[82px] left-0">
              <ul className="p-8 h-full">
                <li className="mb-2 pl-[15px] text-[28px] font-semibold text-white border-l-2 border-yellow-300">
                  Decentralized
                </li>
                <li className="text-solana-200 mb-4">
                  The Solana network is validated by thousands of nodes that
                  operate independently of each other, ensuring your data
                  remains secure and censorship resistant.
                </li>
                <div className="mt-8">
                  <li className="flex">
                    <LiveDot />
                    <div className="text-white text-[28px] ">1,941</div>
                  </li>
                  <li className="text-solana-200">VALIDATOR NODES</li>
                </div>
              </ul>
            </div>
            <div className=" w-[400px ] h-[389.52px] px-5 mb-2 absolute -bottom-0 left-0">
              <ul className="p-8 h-full">
                <li className="mb-2 pl-[15px] text-[28px] font-semibold text-white border-l-2 border-emerald-400">
                  Energy Efficient
                </li>
                <li className="text-solana-200 mb-4">
                  Solana’s proof of stake network and other innovations minimize
                  its impact on thes{" "}
                  <span className="text-emerald-400"> environment</span>. Each
                  Solana transaction uses about the same energy as a few Google
                  searches.
                </li>
                <div className="mt-8">
                  <li className="flex">
                    <div className="text-white text-[28px] ">0%</div>
                  </li>
                  <li className="text-solana-200">NET CARBON IMPACT</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberSection;

//class="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
