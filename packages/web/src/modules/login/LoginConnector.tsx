import * as React from "react";
import PureComponent = React.PureComponent;
import { LoginController } from "@air-init/controller";

import LoginView from "./ui/LoginView";
import { RouteComponentProps } from "react-router-dom";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class LoginConnector extends PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      /*prettier-ignore*/
      <LoginController>
        {({ submit }) => <LoginView onFinish={this.onFinish} submit={submit} />}
      </LoginController>
    );
  }
}
