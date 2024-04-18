import React, { useState } from "react";
import { Form, Input, Tooltip } from "antd";

const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };

  return (
    <Tooltip trigger={["focus"]}>
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={9}
      />
    </Tooltip>
  );
};

function NumInput() {
  const [value, setValue] = useState("");
  return (
    <>
      <Form.Item
        name="tell"
        rules={[
          {
            required: true,
            message: "Iltimos telefon raqam kiriting!",
          },
        ]}
      >
        <NumericInput
          className="user-input"
          placeholder="Kiriting"
          value={value}
          onChange={setValue}
        />
      </Form.Item>
    </>
  );
}

export default NumInput;
