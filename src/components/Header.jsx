import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <header className="bg-black h-[67.3px] py-[20px] z-30 sticky top-0 ">
      <div className=" container flex justify-between px-[20px]">
        <div className="">
          <img
            className=" w-[149px] object-cover"
            src="./images/solana_logo.svg"
            alt="solana_logo"
          />
        </div>
        <ul className="flex    text-[17.6px] text-solana-100">
          <HeaderButton title="Learn" />
          <HeaderButton title="Build" />
          <HeaderButton title="Solutions" />
          <HeaderButton title="Network" />
          <HeaderButton title="커뮤니티" />
        </ul>
      </div>
    </header>
  );
};

export default Header;
