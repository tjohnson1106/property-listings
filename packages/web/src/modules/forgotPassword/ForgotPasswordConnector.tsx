import * as React from "react";
import PureComponent = React.PureComponent;
import ForgotPasswordView from "./ui/ForgotPasswordView";
import { ForgotPasswordController } from "@air-init/controller";

export class ForgotPasswordConnector extends PureComponent {
  render() {
    return (
      <ForgotPasswordController>
        {({ submit }) => <ForgotPasswordView submit={submit} />}
      </ForgotPasswordController>
    );
  }
}
