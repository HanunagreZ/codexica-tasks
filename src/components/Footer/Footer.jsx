import "./style.css";
import useResize from "../hooks/useResize";

const Footer = () => {
  const { width, height } = useResize();

  return (
    <div className="footer">
      <p>
        Screen width is: {width} px, height is: {height} px
      </p>
    </div>
  );
};

export default Footer;
