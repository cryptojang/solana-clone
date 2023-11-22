const BlackButton = ({ title }) => {
  return (
    <button className="bg-black border transition hover:-translate-y-1 hover:bg-white hover:text-black border-white px-6 py-3 mt-4 mr-2 text-white rounded-full">
      {title}
    </button>
  );
};

export default BlackButton;
