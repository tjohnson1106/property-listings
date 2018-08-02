import * as React from "react";
import PureComponent = React.PureComponent;
import { RouteComponentProps } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import * as Antd from "antd";

import { InputField } from "../../shared/InputField";

const { Form: AntForm, Icon, Button } = Antd;
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

export class CreateListingConnector extends PureComponent<
  RouteComponentProps<{}>
> {
  submit = (values: any) => {
    console.log("values", values);
  };

  render() {
    // const { history } = this.props;
    return (
      <Formik<{}, FormValues>
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
                name="email"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  (
                    <Icon
                      type="user"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  ) as any
                }
                // tslint:disable-nextLinkine-js
                placeholder="Email"
                component={InputField}
                Link
              />
              <Field
                name="password"
                // tslint:disable-next-line:jsx-no-multiline-js
                type="password"
                // tslint:disable-next-line:jsx-no-multiline-js
                prefix={
                  (
                    <Icon
                      type="lock"
                      style={{ color: "rgba(0,0,0,.25)" }}
                    />
                  ) as any
                }
                placeholder="Password"
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
