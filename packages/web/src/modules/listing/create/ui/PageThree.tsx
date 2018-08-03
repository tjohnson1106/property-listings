import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";
import { Form } from "antd";

export const PageThree = () => (
  <React.Fragment>
    <Form.Item label="Latitude">
      <Field
        // tslint:disable-next-line:jsx-no-multiline-js
        name="latitude"
        // tslint:disable-next-line:jsx-no-multiline-js
        placeholder="Latitude"
        // tslint:disable-next-line:jsx-no-multiline-js
        component={InputField}
      />
    </Form.Item>

    <Form.Item label="Longitude">
      <Field
        // tslint:disable-next-line:jsx-no-multiline-js
        name="longitude"
        // tslint:disable-next-line:jsx-no-multiline-js
        placeholder="Longitude"
        // tslint:disable-next-line:jsx-no-multiline-js
        component={InputField}
      />
    </Form.Item>
  </React.Fragment>
);
