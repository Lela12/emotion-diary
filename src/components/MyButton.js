const MyButton = ({ text, type, onClick }) => {
  // positive, negative가 아닌 값이 들어오면 default가 되게
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      // 문자열로 전달하기 위해서
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

MyButton.defaultProp = {
  type: "default",
};

export default MyButton;
