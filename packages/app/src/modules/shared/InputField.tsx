import * as React from "react";
import Component = React.Component;
import { FieldProps } from "formik";
import { Input } from "react-native-elements";

//left 07/05 install: rn-elenments beta-5 , remove old types
//onchange text function next

class InputField extends Component<FieldProps<any>> {
  render() {
    const {
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      ...props
    } = this.props;
    {
      const errorMessage = touched[field.name] && errors[field.name];

      return (
        // <FormItem
        //   help={errorMessage}
        //   // tslint:disable-next-line:jsx-no-multiline-js
        //   validateStatus={errorMessage ? "error" : undefined}
        // >
        //   <Input {...field} {...props} />
        // </FormItem>
        <Input />
      );
    }
  }
}

export default InputField;
