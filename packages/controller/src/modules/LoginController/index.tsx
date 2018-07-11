import * as React from "react";
import PureComponent = React.PureComponent;
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  LoginMutation,
  LoginMutationVariables
} from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";

interface Props {
  onSessionId?: (sessionId: string) => void;
  children: (
    data: {
      submit: (
        values: LoginMutationVariables
      ) => Promise<{
        [key: string]: string;
      } | null>;
    }
  ) => JSX.Element | null;
}

class ControllerPC extends PureComponent<
  ChildMutateProps<Props, LoginMutation, LoginMutationVariables>
> {
  submit = async (values: LoginMutationVariables) => {
    console.log(values);
    const {
      data: {
        login: { errors, sessionId }
      }
    } = await this.props.mutate({
      variables: values
    });
    console.log("response", errors, sessionId);

    if (errors) {
      //show errors
      return normalizeErrors(errors);
    }

    if (sessionId && this.props.onSessionId) {
      this.props.onSessionId(sessionId);
    }

    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}
const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        path
        message
      }
      sessionId
    }
  }
`;

export const LoginController = graphql<
  Props,
  LoginMutation,
  LoginMutationVariables
>(loginMutation)(ControllerPC);

//no platform specific code to react or react native
