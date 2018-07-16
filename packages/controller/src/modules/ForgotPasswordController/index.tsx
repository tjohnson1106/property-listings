import * as React from "react";
import PureComponent = React.PureComponent;
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import {
  RegisterMutation,
  RegisterMutationVariables
} from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizeErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

export interface Props {
  children: (
    data: {
      submit: (
        values: RegisterMutationVariables
      ) => Promise<NormalizedErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class ControllerPC extends PureComponent<
  ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>
> {
  submit = async (values: RegisterMutationVariables) => {
    console.log(values);
    const {
      data: { register }
    } = await this.props.mutate({
      variables: values
    });
    console.log("response", register);

    if (register) {
      return normalizeErrors(register);
    }

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
`

export const RegisterController = graphql<
  Props,
  RegisterMutation,
  RegisterMutationVariables
>(registerMutation)(ControllerPC);

//no platform specific code to react or react native
