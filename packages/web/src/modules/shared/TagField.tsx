import * as React from "react";
import { FieldProps } from "formik";
import { Form, Select } from "antd";

const FormItem = Form.Item;

// remember to implement label props on pages
export const TagField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode;
    label?: string;
  }
> = ({
  field: { onChange, onBlur: _, ...field },
  form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  label,
  ...props
}) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <FormItem
      help={errorMessage}
      // tslint:disable-next-line:jsx-no-multiline-js
      label={label}
      // tslint:disable-next-line:jsx-no-multiline-js
      validateStatus={errorMessage ? "error" : undefined}
    >
      <Select
        {...field}
        // tslint:disable-next-line:jsx-no-multiline-js
        {...props}
        // tslint:disable-next-line:jsx-no-multiline-js
        mode="tags"
        // tslint:disable-next-line:jsx-no-multiline-js jsx-no-lambda
        onChange={(newValue: any) =>
          setFieldValue(field.name, newValue)
        }
      />
    </FormItem>
  );
};
