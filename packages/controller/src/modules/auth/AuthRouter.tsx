import * as React from "react";
import PureComponent = React.PureComponent;
import { RouteProps } from "react-router";
import { graphql, ChildProps } from "react-apollo";
import gql from "graphql-tag";
import { MeQuery } from "../..";

type Props = RouteProps;

export class PreAuth extends PureComponent<ChildProps> {
  render() {
    return {};
  }
}

const meQuery = gql`
  query MeQuery {
    me {
      email
    }
  }
`;

export const AuthRoute = graphql<Props, MeQuery>(meQuery)(PreAuth);
