import * as React from "react";
import PureComponent = React.PureComponent;
import * as Antd from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";

import { InputField } from "../../shared/InputField";
import {
  NormalizedErrorMap,
  ForgotPasswordChangeMutationVariables
} from "@air-init/controller";
import { changePasswordSchema } from "@air-init/common";

const { Form: AntForm, Icon, Button } = Antd;
const FormItem = AntForm.Item;

interface FormValues {
  newPassword: string;
}

interface Props {
  onFinish: () => void;
  token: string;
  submit: (
    values: ForgotPasswordChangeMutationVariables
  ) => Promise<NormalizedErrorMap | null>;
}

class ChangePasswordView extends PureComponent<
  FormikProps<FormValues> & Props
> {
  render() {
    return (
      <Form style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            // tslint:disable-next-line:jsx-no-multiline-js
            name="newpassword"
            // tslint:disable-next-line:jsx-no-multiline-js
            type="password"
            // tslint:disable-next-line:jsx-no-multiline-js
            prefix={
              // tslint:disable-next-line:jsx-no-multiline-js
              (
                <Icon
                  type="user"
                  style={{ color: "rgba(0,0,0,.25)" }}
                />
              ) as any
            }
            // tslint:disable-next-line:jsx-no-multiline-js
            placeholder="New Password"
            component={InputField}
          />
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form"
            >
              Change Password
            </Button>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export default withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,

  mapPropsToValues: () => ({ newPassword: "" }),
  handleSubmit: async ({ newPassword }, { props, setErrors }) => {
    const errors = await props.submit({
      newPassword,
      key: props.token
    });
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
  }
})(ChangePasswordView);
