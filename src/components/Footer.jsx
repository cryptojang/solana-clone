import {
  FaGlobe,
  FaYoutube,
  FaTwitter,
  FaDiscord,
  FaRedditAlien,
  FaGithub,
  FaTelegramPlane,
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black  h-[424.5px] py-20 ">
      <div className=" container flex justify-between ">
        <div>
          <div className="text-lg text-white">Managed By</div>
          <img
            className=" w-[200px] object-cover mt-[6px]  mb-8"
            src="./images/solana_logo.svg"
            alt="solana_logo"
          />
          <div className="flex">
            <div className="bg-solana-100 w-7 h-7 rounded-full flex mr-[10px] mb-5 justify-center items-center hover:bg-white text-lg">
              <FaYoutube />
            </div>
            <div className="bg-solana-100 w-7 h-7 rounded-full flex mr-[10px] mb-5 justify-center items-center hover:bg-white text-lg">
              <FaTwitter />
            </div>
            <div className="bg-solana-100 w-7 h-7 rounded-full flex mr-[10px] mb-5 justify-center items-center hover:bg-white text-lg">
              <FaDiscord />
            </div>
            <div className="bg-solana-100 w-7 h-7 rounded-full flex mr-[10px] mb-5 justify-center items-center hover:bg-white text-lg">
              <FaRedditAlien />
            </div>
            <div className="bg-solana-100 w-7 h-7 rounded-full flex mr-[10px] mb-5 justify-center items-center hover:bg-white text-lg">
              <FaGithub />
            </div>
            <div className="bg-solana-100 w-7 h-7 rounded-full flex mr-[10px] mb-5 justify-center items-center hover:bg-white text-lg">
              <FaTelegramPlane />
            </div>
          </div>
          <div className="text-solana-100">
            © 2023 Solana Foundation. All rights reserved.
          </div>
        </div>
        <div className="flex">
          <ul className="pr-12 pl-5">
            <li className="text-lg text-white">SOLANA</li>
            <li className="text-solana-100 py-[6px]">그랜트</li>
            <li className="text-solana-100 py-[6px]">Break Solana</li>
            <li className="text-solana-100 py-[6px]">Media Kit</li>
            <li className="text-solana-100 py-[6px]">커리어</li>
            <li className="text-solana-100 py-[6px]">면책사항</li>
            <li className="text-solana-100 py-[6px]">Privacy Policy</li>
          </ul>
          <ul className="pr-12 pl-5">
            <li className="text-lg text-white">Get Connected</li>
            <li className="text-solana-100 py-[6px]">Ecosystem</li>
            <li className="text-solana-100 py-[6px]">Blog</li>
            <li className="text-solana-100 py-[6px]">뉴스레터</li>
          </ul>
          <div className="  px-5 text-solana-100 text-lg flex items-center h-8 ">
            <FaGlobe />
            <div className="mx-1">KO</div>
            <FiChevronDown />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
