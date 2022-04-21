import axios from "axios";
import { useEffect, useState } from "react";
import { ButtonChangeAdvice } from "./components/ButtonChangeAdvice";
import "./styles/app.scss";
import divider from "./images/pattern-divider-desktop.svg";

function App() {
  const [id, setId] = useState(0);
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setId(response.data.slip.id);
      setAdvice(response.data.slip.advice);
    });
  }, []);

  async function reload() {
    await axios.get("https://api.adviceslip.com/advice").then((response) => {
      setId(response.data.slip.id);
      setAdvice(response.data.slip.advice);
    });
  }

  return (
    <main>
      <p>ADVICE #{id}</p>
      <q>{advice}</q>
      <img src={divider} alt="divisor" />
      <ButtonChangeAdvice onClick={reload} />
    </main>
  );
}

export default App;
