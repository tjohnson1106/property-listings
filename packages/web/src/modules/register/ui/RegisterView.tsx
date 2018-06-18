import * as React from "react";
import PureComponent = React.PureComponent;
import {Form, Icon, Input, Button} from "antd";
import {withFormik, FormikErrors, FormikProps} from "formik";
import * as yup from "yup";

const FormItem = Form.Item;

interface FormValues {
  email: string;
  password: string;
}
/*prettier-ignore*/
interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>; }

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
      /*prettier-ignore*/
      <form style={{display: "flex"}} onSubmit={handleSubmit}>
        <div style={{width: 400, margin: "auto"}}>
          <FormItem help={touched.email && errors.email ? errors.email : ""}>
            <Input
              name="email"
              /*prettier-ignore*/

              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          
          <FormItem /*prettier-ignore*/ help={touched.password && errors.password ? errors.password : ""}>
            <Input
              name="password"
              /*prettier-ignore*/

              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }}/>}
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

const emailNotLongEnough = "email must be at least 3 characters";
const passwordNotLongEnough =
  "password must be at least 3 characters";
const invalidEmail = "email must be a valid email";

const registerPasswordValidation = yup
  .string()
  .min(3, passwordNotLongEnough)
  .max(255);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .min(3, emailNotLongEnough)
    .max(255)
    .email(invalidEmail),
  password: registerPasswordValidation
});

export default withFormik<Props, FormValues>({
  validationSchema,
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
