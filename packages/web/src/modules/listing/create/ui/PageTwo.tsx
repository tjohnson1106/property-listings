import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";

export const PageTwo = () => (
  <React.Fragment>
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="price"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Price"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
    />
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="beds"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Beds"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
    />
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="guests"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Guests"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
    />
  </React.Fragment>
);
