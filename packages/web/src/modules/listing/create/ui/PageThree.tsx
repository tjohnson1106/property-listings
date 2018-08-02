import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";

export const PageThree = () => (
  <React.Fragment>
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="latitude"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Latitude"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
    />
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="longitude"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Longitude"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
    />
  </React.Fragment>
);
