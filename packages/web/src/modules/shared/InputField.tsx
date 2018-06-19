import * as React from "react";
import {FieldProps} from "formik";
import {Form, Icon, Input} from "antd";

const FormItem = Form.Item;

{
  /* <div>
<input type="text" {...field} {...props} />
{touched[field.name] &&
  errors[field.name] && <div className="error">{errors[field.name]}</div>}
</div> */
}

const InputField: React.SFC<FieldProps<any> & {}> = ({
  field, // { name, value, onChange, onBlur }
  form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const errorMessage = touched[field.name] && errors[field.name];

  return (
    <FormItem
      help={errorMessage}
      // tslint:disable-next-line:jsx-no-multiline-js
      validateStatus={errorMessage ? "error" : undefined}
    >
      <Input
        // tslint:disable-next-line:jsx-no-multiline-js
        name="email"
        // tslint:disable-next-line:jsx-no-multiline-js
        prefix={
          <Icon type="user" style={{color: "rgba(0,0,0,.25)"}} />
        }
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </FormItem>
  );
};
