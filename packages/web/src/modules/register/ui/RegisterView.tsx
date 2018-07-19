import * as React from "react";
import PureComponent = React.PureComponent;
import * as Antd from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";
import { Link } from "react-router-dom";

import { validUserSchema } from "@air-init/common";
import { InputField } from "../../shared/InputField";
import { NormalizedErrorMap } from "../../../../../controller/dist/types/NormalizedErrorMap";

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

class RegisterView extends PureComponent<
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
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
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
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <Link to="/login"> login now!</Link>
          </FormItem>
        </div>
      </Form>
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
    } else {
      props.onFinish();
    }
  }
})(RegisterView);
