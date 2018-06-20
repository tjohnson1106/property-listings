import * as React from "react";
import PureComponent = React.PureComponent;

import RegisterView from "./ui/RegisterView";

import {RegisterController} from "@air-init/controller";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <React.Fragment>
        <RegisterController />
        <RegisterView submit={this.dummySubmit} />
      </React.Fragment>
    );
  }
}
