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
      // tslint:disable-next-line:jsx-no-multiline-js
      label="Price"
      // tslint:disable-next-line:jsx-no-multiline-js
      useNumberComponent={true}
    />

    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="beds"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Beds"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
      // tslint:disable-next-line:jsx-no-multiline-js
      label="Beds"
      // tslint:disable-next-line:jsx-no-multiline-js
      useNumberComponent={true}
    />

    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="guests"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Guests"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
      // tslint:disable-next-line:jsx-no-multiline-js
      label="Guests"
      // tslint:disable-next-line:jsx-no-multiline-js
      useNumberComponent={true}
    />
  </React.Fragment>
);
