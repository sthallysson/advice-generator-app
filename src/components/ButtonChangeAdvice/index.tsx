import "./styles.scss";
import dice from "../../images/icon-dice.svg";

interface ButtonChangeAdviceProps {
  onClick: () => void;
}

export function ButtonChangeAdvice({ onClick }: ButtonChangeAdviceProps) {
  return (
    <button onClick={onClick}>
      <img src={dice} alt="dice button" />
    </button>
  );
}
