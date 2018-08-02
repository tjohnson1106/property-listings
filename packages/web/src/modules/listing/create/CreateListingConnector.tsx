import * as React from "react";
import PureComponent = React.PureComponent;
import { RouteComponentProps } from "react-router-dom";
import { Formik } from "formik";

// name: String!

// category: String!

// description: String!

// price: Int!

// latitude: Float!

// longitude: Float!

// beds: Int!

// guests: Int!

// amenities: [String!]!

export class CreateListingConnector extends PureComponent<
  RouteComponentProps<{}>
> {
  render() {
    const { history } = this.props;
    return <Formik />;
  }
}
