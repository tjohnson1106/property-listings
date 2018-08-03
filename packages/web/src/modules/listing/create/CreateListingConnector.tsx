import * as React from "react";
import PureComponent = React.PureComponent;
import { RouteComponentProps } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Antd from "antd";

import { PageOne } from "./ui/PageOne";
import { PageTwo } from "./ui/PageTwo";
import { PageThree } from "./ui/PageThree";

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

interface State {
  page: number;
}

// ts-lint:disable-next-line:jsx-key
const pages = [
  <PageOne key="" />,
  <PageTwo key="" />,
  <PageThree key="" />
];

export class CreateListingConnector extends PureComponent<
  RouteComponentProps<{}>,
  State
> {
  state = {
    page: 0
  };

  submit = (values: any) => {
    console.log("values", values);
  };

  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

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
          // tslint:disable-next-line:jsx-no-multiline-jsx
          <Form style={{ display: "flex" }}>
            <div style={{ width: 400, margin: "auto" }}>
              {pages[this.state.page]}

              <FormItem>
                {/* prettier-ignore */}
                <div style={{   display: "flex",   justifyContent: "flex-end" }} >
                  {// tslint:disable-next-line:jsx-no-multiline-js
                  this.state.page === pages.length - 1 ? (
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      create listing
                    </Button>
                  ) : (
                    <Button type="primary" onClick={this.nextPage}>
                      next page
                    </Button>
                  )}
                </div>
              </FormItem>
            </div>
          </Form>
        )}
      </Formik>
    );
  }
}
