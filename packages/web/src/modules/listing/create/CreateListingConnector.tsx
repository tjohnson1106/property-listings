import * as React from "react";
import PureComponent = React.PureComponent;
import { RouteComponentProps } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Antd from "antd";

import { InputField } from "../../shared/InputField";

const { Form: AntForm, Button } = Antd;
const FormItem = AntForm.Item;

// name: String!

// category: String!

// description: String!

// price: Int!

// latitude: Float!

// longitude: Float!

// beds: Int!

// guests: Int!

// amenities: [String!]!

interface FormValues {
  name: string;
  category: string;
  description: string;
  price: number;
  latitude: number;
  longitude: number;
  beds: number;
  guests: number;
  amenities: string[];
}

const pages = [];

export class CreateListingConnector extends PureComponent<
  RouteComponentProps<{}>
> {
  state = {
    page: 0
  };

  submit = (values: any) => {
    console.log("values", values);
  };

  render() {
    return (
      <Formik<{}, FormValues>
        // tslint:disable-next-line:jsx-no-multiline-js
        initialValues={{
          name: "",
          category: "",
          description: "",
          price: 0,
          latitude: 0,
          longitude: 0,
          beds: 0,
          guests: 0,
          amenities: []
        }}
        onSubmit={this.submit}
      >
        {() => (
          <Form style={{ display: "flex" }}>
            <div style={{ width: 400, margin: "auto" }}>
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

              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  create listing
                </Button>
              </FormItem>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
