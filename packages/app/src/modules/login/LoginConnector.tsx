import * as React from "react";
import PureComponent = React.PureComponent;
import LoginView from "./ui/LoginView";
import { LoginController } from "@air-init/controller";

export class LoginConnector extends PureComponent {
  submit = async (values: any) => {
    console.log(values);
    return null;
  };
  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
