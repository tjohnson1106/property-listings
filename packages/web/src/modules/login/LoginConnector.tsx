import * as React from "react";
import PureComponent = React.PureComponent;
import { LoginController } from "@air-init/controller";

import LoginView from "./ui/LoginView";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class LoginConnector extends PureComponent {
  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
