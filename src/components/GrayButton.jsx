const GrayButton = ({ title }) => {
  return (
    <button className="bg-solana-300 py-[9.6px] px-[12.8px] text-white ml-4 rounded-2xl text-[16px] hover:bg-solana-400 active:border ">
      {title}
    </button>
  );
};

export default GrayButton;
