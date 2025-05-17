import { useState } from "react";
import "./styles/button/button.css";
import "./index.css";
import MyButton from "./component/Button/ButtonLogin";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyButton />
    </div>
  );
}

export default App;
