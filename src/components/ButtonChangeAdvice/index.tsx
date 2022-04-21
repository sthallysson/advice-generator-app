import axios from "axios";
import "./styles.scss";

interface ButtonChangeAdviceProps {
  onClick: () => void;
}

export function ButtonChangeAdvice({ onClick }: ButtonChangeAdviceProps) {
  return (
    <button onClick={onClick}>
      <img src="../../public/icon-dice.svg" alt="dice button" />
    </button>
  );
}
