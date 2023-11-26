import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const HeaderButton = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <button onClick={onClickModal} className="ml-8 flex items-center">
        <div className="relative flex items-center">
          <div>{title}</div>
          <div>
            {isOpen && <FiChevronUp />}
            {!isOpen && <FiChevronDown />}
          </div>
          {/* {isOpen && (
            <div className="bg-black text-solana-100 w-[418.91px] h-[332.27px] absolute -left-[179.45px] top-[46px] border border-gray-600 rounded-xl text-white">
              Box
            </div>
          )} */}
        </div>
      </button>
    </>
  );
};

export default HeaderButton;
