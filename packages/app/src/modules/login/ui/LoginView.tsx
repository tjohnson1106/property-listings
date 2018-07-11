import * as React from "react";
import PureComponent = React.PureComponent;
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { loginSchema } from "@air-init/common";
import { View, Text, StyleSheet } from "react-native";
import { Card, Button } from "react-native-elements";

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

class LoginView extends PureComponent<
  // tslint:disable-next-line:jsx-no-multiline-js
  FormikProps<FormValues> & Props
> {
  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.root}>
        <Card>
          <Text style={styles.regText}>Login</Text>
          <Field
            name="email"
            placeholder="Email"
            component={InputField as any}
            containerStyle={{ width: "100%" }}
            autoCapitalize="none"
          />
          <Field
            name="password"
            secureTextEntry={true}
            placeholder="Password"
            component={InputField as any}
            containerStyle={{ width: "100%" }}
            autoCapitalize="none"
          />

          <Button
            style={styles.btn}
            title="Submit"
            onPress={handleSubmit as any}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  regText: {
    fontSize: 30,
    marginBottom: 10
  },
  btn: {
    marginTop: 30
  }
});

export default withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(LoginView as any);
