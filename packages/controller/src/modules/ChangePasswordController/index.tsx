import * as React from "react";
import PureComponent = React.PureComponent;
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables
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
const forgotPasswordChangeMutation = gql`
  mutation ForgotPasswordChangeMutation(
    $newPassword: String!
    $key: String!
  ) {
    forgotPasswordChange(newPassword: $newPassword, key: $key) {
      path
      message
    }
  }
`;

/* ts-error: wants the interface explicitly exported but then throw error in index file */
export const ChangePasswordController = graphql<
  Props,
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables
>(forgotPasswordChangeMutation)(ControllerPC);

//no platform specific code to react or react native
