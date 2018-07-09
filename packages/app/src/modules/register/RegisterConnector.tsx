import * as React from "react";
import PureComponent = React.PureComponent;

import RegisterView from "./ui/RegisterView";
import { RegisterController } from "@air-init/controller";

export class RegisterConnector extends PureComponent {
  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
