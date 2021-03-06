import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";

export const DropZoneField: React.SFC<FieldProps<any>> = ({
  field: { name },
  form: { setFieldValue },
  ...props
}) => {
  return (
    <Dropzone
      // tslint:disable-next-line:jsx-no-multiline-js
      accept="image/*"
      // tslint:disable-next-line:jsx-no-multiline-js
      multiple={false}
      /*prettier-ignore*/
      // tslint:disable-next-line:jsx-no-lambda
      onDrop={([file]) => { setFieldValue(name, file); }}
      {...props}
    >
      <p>
        Try dropping some files here, or click to select files to
        upload.
      </p>
    </Dropzone>
  );
};
