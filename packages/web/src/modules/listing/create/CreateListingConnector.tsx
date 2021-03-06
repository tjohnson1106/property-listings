import * as React from "react";
import PureComponent = React.PureComponent;
import { RouteComponentProps } from "react-router-dom";
import { Formik, Form, FormikActions } from "formik";
import { Form as AntForm, Button } from "antd";
import { ImageFile } from "react-dropzone";

import { PageOne } from "./ui/PageOne";
import { PageTwo } from "./ui/PageTwo";
import { PageThree } from "./ui/PageThree";
import {
  withCreateListing,
  WithCreateListing
} from "@air-init/controller";

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
  picture: ImageFile | null;
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

// ts-lint:disable-next-line:jsx-key NewProps
const pages = [
  <PageOne key="" />,
  <PageTwo key="" />,
  <PageThree key="" />
];

class CreateListingConnectorSubject extends PureComponent<
  RouteComponentProps<{}> & WithCreateListing,
  State
> {
  state = {
    page: 0
  };

  submit = async (
    values: FormValues,
    { setSubmitting }: FormikActions<FormValues>
  ) => {
    await this.props.createListing(values);
    setSubmitting(false);
  };

  nextPage = () => this.setState(state => ({ page: state.page + 1 }));

  render() {
    return (
      <Formik<{}, FormValues>
        // tslint:disable-next-line:jsx-no-multiline-js
        initialValues={{
          picture: null,
          name: "",
          category: "",
          description: "",
          price: 0,
          beds: 0,
          guests: 0,
          latitude: 0,
          longitude: 0,
          amenities: []
        }}
        onSubmit={this.submit}
      >
        {/* tslint:disable-next-line:jsx-no-multiline-js */}
        {({ isSubmitting, values }: any) =>
          console.log(values) || (
            <Form style={{ display: "flex" }}>
              <div style={{ width: 400, margin: "auto" }}>
                {pages[this.state.page]}
                <FormItem>
                  <div
                    // tslint:disable-next-line:jsx-no-multiline-js
                    style={{
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    {/* tslint:disable-next-line:jsx-no-multiline-js   */}
                    {this.state.page === pages.length - 1 ? (
                      <div>
                        <Button
                          type="primary"
                          htmlType="submit"
                          disabled={isSubmitting}
                        >
                          create listing
                        </Button>
                      </div>
                    ) : (
                      <Button type="primary" onClick={this.nextPage}>
                        next page
                      </Button>
                    )}
                  </div>
                </FormItem>
              </div>
            </Form>
          )
        }
      </Formik>
    );
  }
}

export const CreateListingConnector = withCreateListing(
  CreateListingConnectorSubject
);
