import * as React from "react";
import PureComponent = React.PureComponent;
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  SendForgotPasswordEmailMutation,
  SendForgotPasswordEmailMutationVariables
} from "../../schemaTypes";

export interface Props {
  children: (
    data: {
      submit: (
        values: SendForgotPasswordEmailMutationVariables
      ) => Promise<null>;
    }
  ) => JSX.Element | null;
}

class ControllerPC extends PureComponent<
  ChildMutateProps<
    Props,
    SendForgotPasswordEmailMutation,
    SendForgotPasswordEmailMutationVariables
  >
> {
  submit = async (
    values: SendForgotPasswordEmailMutationVariables
  ) => {
    console.log(values);
    const response = await this.props.mutate({
      variables: values
    });
    console.log("response", response);

    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}
const forgotPasswordMutation = gql`
  mutation SendForgotPasswordEmailMutation($email: String!) {
    SendForgotPasswordEmail(email: $email)
  }
`;

export const ForgotPasswordController = graphql<
  Props,
  SendForgotPasswordEmailMutation,
  SendForgotPasswordEmailMutationVariables
>(forgotPasswordMutation)(ControllerPC);

//no platform specific code to react or react native
