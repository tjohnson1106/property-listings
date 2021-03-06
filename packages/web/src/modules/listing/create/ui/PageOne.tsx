import * as React from "react";
import { InputField } from "../../../shared/InputField";
import { Field } from "formik";
import { DropZoneField } from "../../../shared/DropZoneField";

export const PageOne = () => (
  <React.Fragment>
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="name"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Name"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
      // tslint:disable-next-line:jsx-no-multiline-js
      label="Name"
    />

    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="category"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Category"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
      // tslint:disable-next-line:jsx-no-multiline-js
      label="Category"
    />

    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="description"
      // tslint:disable-next-line:jsx-no-multiline-js
      placeholder="Description"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={InputField}
      // tslint:disable-next-line:jsx-no-multiline-js
      label="Description"
    />
    <Field
      // tslint:disable-next-line:jsx-no-multiline-js
      name="picture"
      // tslint:disable-next-line:jsx-no-multiline-js
      component={DropZoneField}
    />
  </React.Fragment>
);
