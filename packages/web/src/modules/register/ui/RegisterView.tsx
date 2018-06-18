import * as React from "react";
import PureComponent = React.PureComponent;
import {Form, Icon, Input, Button} from "antd";
import {withFormik, FormikErrors, FormikProps} from "formik";
import {validUserSchema} from "@air-init/common";

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
    const {
      values,
      handleChange,
      handleBlur,
      handleSubmit,
      touched,
      errors
    } = this.props;

    return (
      <form style={{display: "flex"}} onSubmit={handleSubmit}>
        <div style={{width: 400, margin: "auto"}}>
          <FormItem
            help={touched.email && errors.email ? errors.email : ""}
            // tslint:disable-next-line:jsx-no-multiline-js
            validateStatus={
              touched.email && errors.email ? "error" : undefined
            }
          >
            <Input
              // tslint:disable-next-line:jsx-no-multiline-js
              name="email"
              // tslint:disable-next-line:jsx-no-multiline-js
              prefix={
                <Icon
                  type="user"
                  style={{color: "rgba(0,0,0,.25)"}}
                />
              }
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>

          <FormItem
            // tslint:disable-next-line:jsx-no-multiline-js
            help={
              touched.password && errors.password
                ? errors.password
                : ""
            }
            // tslint:disable-next-line:jsx-no-multiline-js
            validateStatus={
              touched.password && errors.password
                ? "error"
                : undefined
            }
          >
            <Input
              name="password"
              // tslint:disable-next-line:jsx-no-multiline-js
              prefix={
                <Icon
                  type="lock"
                  style={{color: "rgba(0,0,0,.25)"}}
                />
              }
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
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
            Or <a href=""> login now!</a>
          </FormItem>
        </div>
      </form>
    );
  }
}

export default withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
  mapPropsToValues: () => ({email: "", password: ""}),
  handleSubmit: async (values, {props, setErrors}) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(RegisterView);

// export const RegisterView = withFormik({
//     mapPropsToValues: () => ({ email: "", password: ""})
// })(C);
