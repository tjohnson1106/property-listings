import * as React from "react";
import PureComponent = React.PureComponent;
import {
  RouteProps,
  Route,
  RouteComponentProps,
  Redirect
} from "react-router";
import { graphql, ChildProps } from "react-apollo";
import gql from "graphql-tag";
import { MeQuery } from "../..";

type Props = RouteProps;

class PreAuth extends PureComponent<ChildProps<Props, MeQuery>> {
  renderRoute = (routeProps: RouteComponentProps<{}>) => {
    const { data, component } = this.props;

    if (!data || data.loading) {
      //loading screen

      return null;
    }

    if (!data.me) {
      //user not logged in

      return <Redirect to="/login" />;
    }

    const Component = component as any;

    return <Component {...routeProps} />;
  };

  render() {
    const { data: _, component: __, ...rest } = this.props;
    return <Route {...rest} render={this.renderRoute} />;
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
