import { Input } from "antd";
import "../../styles/input/input.css";
const myInput = () => {
  return (
    <Input
      className="my-input"
      style={{ width: 300 }}
      size="large"
      variant="outlined"
      placeholder="hello"
      value="12345"
    />
  );
};
export default myInput;
