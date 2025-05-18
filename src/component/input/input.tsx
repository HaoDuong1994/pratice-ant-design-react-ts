import { Input } from "antd";
import "../../styles/input/input.css";
interface IPropsClassName {
  className: string;
}
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
const InputForm = ({ className }: IPropsClassName) => {
  return (
    <Input
      className={className}
      variant="outlined"
      placeholder="Enter password"
    />
  );
};
export { InputForm };
export default myInput;
