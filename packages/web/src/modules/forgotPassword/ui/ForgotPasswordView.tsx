import * as React from "react";
import PureComponent = React.PureComponent;
import * as Antd from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";

import { InputField } from "../../shared/InputField";
import { NormalizedErrorMap } from "@air-init/controller";

const { Form: AntForm, Icon, Button } = Antd;
const FormItem = AntForm.Item;

interface FormValues {
  email: string;
}

interface Props {
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
}

class ForgotPasswordView extends PureComponent<
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
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form"
            >
              Reset Password
            </Button>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export default withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(ForgotPasswordView);
