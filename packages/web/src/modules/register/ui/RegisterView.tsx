import * as React from "react";
import PureComponent = React.PureComponent;
import { Form, Icon, Input, Button } from "antd";
import { withFormik, FormikErrors, FormikProps } from "formik";

const FormItem = Form.Item;

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
  FormikProps<FormValues> & Props
> {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <FormItem>
            <Input
              name="email"
              /*prettier-ignore*/

              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          </FormItem>
          <FormItem>
            <Input
              name="password"
              /*prettier-ignore*/

              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }}/>}
              type="password"
              placeholder="Password"
            />
          </FormItem>
          <FormItem>
            <a className="login-form-forget" href="">
              Forgot Password
            </a>
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-forget"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="">login now!</a>
          </FormItem>
        </div>
      </div>
    );
  }
}

export default withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterView);

// export const RegisterView = withFormik({
//     mapPropsToValues: () => ({ email: "", password: ""})
// })(C);
