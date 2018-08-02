import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";

export const PageOne = () => (
  <React.Fragment>
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="name"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Name"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
    />
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="category"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Category"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
    />
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="description"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Description"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
    />
  </React.Fragment>
);
