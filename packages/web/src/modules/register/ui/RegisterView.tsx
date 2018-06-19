import * as React from "react";
import PureComponent = React.PureComponent;
import {Form, Icon, Input, Button} from "antd";
import {withFormik, FormikErrors, FormikProps, Field} from "formik";
import {validUserSchema} from "@air-init/common";
import {InputField} from "../../shared/InputField";

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
          <Field
            name="email"
            prefix={
              (
                <Icon
                  type="user"
                  style={{color: "rgba(0,0,0,.25)"}}
                />
              ) as any
            }
            placeholder="Email"
            component={InputField}
          />

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
