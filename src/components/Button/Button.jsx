import './style.css';

const Button = ({ children, ...props }) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
