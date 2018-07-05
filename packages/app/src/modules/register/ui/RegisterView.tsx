import * as React from "react";
import PureComponent = React.PureComponent;
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { validUserSchema } from "@air-init/common";
import { View, Button } from "react-native";

import { InputField } from "../../shared/InputField";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (
    values: FormValues
  ) => Promise<FormikErrors<FormValues> | null>;
}

class RegisterView extends PureComponent<
  // tslint:disable-next-line:jsx-no-multiline-js
  FormikProps<FormValues> & Props
> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={{ width: 400, margin: "auto" }}>
        <Field
          name="email"
          placeholder="Email"
          component={InputField}
        />
        <Field
          name="password"
          type="password"
          placeholder="Password"
          component={InputField}
        />

        <Button title="Submit" onPress={handleSubmit as any} />
      </View>
    );
  }
}

export default withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterView);
