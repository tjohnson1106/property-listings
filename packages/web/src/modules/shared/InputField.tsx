import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input, InputNumber } from "antd";

const FormItem = Form.Item;

// remember to implement label props on pages
export const InputField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode;
    label?: string;
    useNumberComponent: boolean;
  }
> = ({
  field: { onChange, ...field },
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  useNumberComponent = false,
  ...props
}) => {
  const errorMessage = touched[field.name] && errors[field.name];

  const Comp = useNumberComponent ? InputNumber : Input;

  return (
    <FormItem
      help={errorMessage}
      // tslint:disable-next-line:jsx-no-multiline-js
      label={label}
      // tslint:disable-next-line:jsx-no-multiline-js
      validateStatus={errorMessage ? "error" : undefined}
    >
      <Comp
        {...field}
        {...props}
        // tslint:disable-next-line:jsx-no-multiline-js
        onChange={
          useNumberComponent
            ? (newValue: any) => setFieldValue(field.name, newValue)
            : onChange
        }
      />
    </FormItem>
  );
};
