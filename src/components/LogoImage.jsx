const LogoImage = ({ image }) => {
  return (
    <img
      className="w-[88.88px]"
      src={`./images/${image}.svg`}
      alt={`${image}`}
    />
  );
};

export default LogoImage;
