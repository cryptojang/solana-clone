const LogoImage = ({ image, size }) => {
  return <img className={size} src={`./images/${image}`} alt={`${image}`} />;
};

export default LogoImage;
