import { useState } from "react";
import "./index.css";
import MyButton from "./component/Button/ButtonLogin";
import MyInput from "./component/input/input";
import { Row, Col } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyInput />
      <Row justify="center">
        <Col span={4}>
          <MyButton />
        </Col>
        <Col span={4}>
          <MyButton />
        </Col>
        <Col span={4}>
          <MyButton />
        </Col>
        <Col span={4}>
          <MyButton />
        </Col>
      </Row>
    </div>
  );
}

export default App;
