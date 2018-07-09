import * as React from "react";
import Component = React.Component;
import { FieldProps } from "formik";
import { Input } from "react-native-elements";

const errorStyle = {
  color: "red"
};

export class InputField extends Component<FieldProps<any>> {
  onChangeText = (text: string) => {
    const {
      form: { setFieldValue },
      field: { name }
    } = this.props;
    setFieldValue(name, text);
  };

  render() {
    const {
      field, // { name, value, onChange, onBlur }
      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
      ...props
    } = this.props;
    {
      const errorMessage = touched[field.name] && errors[field.name];

      return (
        <Input
          {...props}
          errorStyle={errorStyle}
          errorMessage={errorMessage}
          onChangeText={this.onChangeText}
          value={field.value}
        />
      );
    }
  }
}
