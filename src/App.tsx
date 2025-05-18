import { useState } from "react";
import "./index.css";
import MyButton from "./component/Button/ButtonLogin";
import MyInput from "./component/input/input";
import { Row, Col } from "antd";
import { Form } from "antd";
import { Input } from "antd";
import { InputForm } from "./component/input/input";
import "./styles/input/input.css";
function App() {
  const [form] = Form.useForm();
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
      <Form name="basic" form={form}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "cant not empty",
            },
            { type: "email", message: "Invalid email" },
            { min: 8, message: "more than 8 character" },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "password cant not be empty",
            },
            { min: 8, message: "more than 8 character" },
          ]}>
          <InputForm className="form-input" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
