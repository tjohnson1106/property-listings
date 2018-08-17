import * as React from "react";
import PureComponent = React.PureComponent;
import ForgotPasswordView from "./ui/ForgotPasswordView";
import { ForgotPasswordController } from "@air-init/controller";
import { RouteComponentProps } from "react-router-dom";

export class ForgotPasswordConnector extends PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/reset-password", {
      message: "Please check your email to resets your account"
    });
  };

  render() {
    return (
      /*prettier-ignore*/
      <ForgotPasswordController>
        {({ submit }) => <ForgotPasswordView onFinish={this.onFinish} submit={submit} />}
      </ForgotPasswordController>
    );
  }
}
