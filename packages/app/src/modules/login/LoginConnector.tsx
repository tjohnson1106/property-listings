import * as React from "react";
import PureComponent = React.PureComponent;
import { SecureStore } from "expo";

import LoginView from "./ui/LoginView";
import { LoginController } from "@air-init/controller";
import { SID_KEY } from "../shared/constants";

export class LoginConnector extends PureComponent {
  saveSessionId = (sid: string) => {
    SecureStore.setItemAsync(SID_KEY, sid);
  };

  render() {
    return (
      <LoginController onSessionId={this.saveSessionId}>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
