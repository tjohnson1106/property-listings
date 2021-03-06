import * as React from "react";
import PureComponent = React.PureComponent;
import * as Antd from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { Link } from "react-router-dom";

import { loginSchema } from "@air-init/common";
import { InputField } from "../../shared/InputField";
import { NormalizedErrorMap } from "@air-init/controller";

const { Form: AntForm, Icon, Button } = Antd;
const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class LoginView extends PureComponent<
  FormikProps<FormValues> & Props
> {
  render() {
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            // tslint:disable-next-line:jsx-no-multiline-js
            name="email"
            // tslint:disable-next-line:jsx-no-multiline-js
            prefix={
              (
                <Icon
                  type="user"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              ) as any
            }
            // tslint:disable-next-line:jsx-no-multiline-js
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            // tslint:disable-next-line:jsx-no-multiline-js
            type="password"
            // tslint:disable-next-line:jsx-no-multiline-js
            prefix={
              (
                <Icon
                  type="lock"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              ) as any
            }
            placeholder="Password"
            component={InputField}
          />
          <FormItem>
            <Link to="/forgot-password">Forgot Password</Link>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form"
            >
              Login
            </Button>
          </FormItem>
          <FormItem>
            Or <Link to="/register"> register now!</Link>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export default withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(LoginView);
