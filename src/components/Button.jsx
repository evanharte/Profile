const Button = ({ text, color, textColor }) => {
  const style = {
    backgroundColor: `${color}`,
    color: `${textColor}`,
    padding: "5px",
    border: "none",
    borderRadius: "8px",
    minWidth: "100px",
    marginLeft: "10px",
    marginRight: "10px",
  };
  return <button style={style}>{text}</button>;
};

export default Button;
