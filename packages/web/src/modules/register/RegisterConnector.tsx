import * as React from "react";
import PureComponent = React.PureComponent;

import {RegisterController} from "@air-init/controller";
import RegisterView from "./ui/RegisterView";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends PureComponent {
  render() {
    return (
      // tslint:disable-next-line:jsx-no-multiline-js
      <RegisterController>
        {({submit}) => (
          // tslint:disable-next-line:jsx-no-multiline-js
          <RegisterView submit={submit} />
        )}
      </RegisterController>
    );
  }
}
