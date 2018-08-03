import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";
import { Form } from "antd";

export const PageTwo = () => (
  <React.Fragment>
    <Form.Item label="Price">
      <Field
        // tslint:disable-next-line:jsx-no-multiline-js
        name="price"
        // tslint:disable-next-line:jsx-no-multiline-js
        placeholder="Price"
        // tslint:disable-next-line:jsx-no-multiline-js
        component={InputField}
      />
    </Form.Item>
    <Form.Item label="Beds">
      <Field
        // tslint:disable-next-line:jsx-no-multiline-js
        name="beds"
        // tslint:disable-next-line:jsx-no-multiline-js
        placeholder="Beds"
        // tslint:disable-next-line:jsx-no-multiline-js
        component={InputField}
      />
    </Form.Item>
    <Form.Item label="Guests">
      <Field
        // tslint:disable-next-line:jsx-no-multiline-js
        name="guests"
        // tslint:disable-next-line:jsx-no-multiline-js
        placeholder="Guests"
        // tslint:disable-next-line:jsx-no-multiline-js
        component={InputField}
      />
    </Form.Item>
  </React.Fragment>
);
