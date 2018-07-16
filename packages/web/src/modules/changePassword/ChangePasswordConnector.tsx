/* tslint:disable */
import * as React from "react";
import PureComponent = React.PureComponent;
import { RouteComponentProps } from "react-router-dom";
import { ChangePasswordController } from "@air-init/controller";

import ChangePasswordView from "./ui/ChangePasswordView";

export class ChangePasswordConnector extends PureComponent<
  RouteComponentProps<{
    key: string;
  }>
> {
  submit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    console.log(this.props);
    const {
      match: {
        params: { key }
      }
    } = this.props;
    console.log(key);
    return (
      <ChangePasswordController
      // tslint:disable-next-line:jsx-no-multiline-js
      >
        {({ submit }) => (
          <ChangePasswordView
            // tslint:disable-next-line:jsx-no-lambdas   // tslint:disable-next-line:jsx-no-multiline-js
            submit={async ({ newPassword }) =>
              submit({ key, newPassword })
            }
          />
        )}
      </ChangePasswordController>
    );
  }
}
