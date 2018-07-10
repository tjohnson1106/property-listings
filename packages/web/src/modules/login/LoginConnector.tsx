import * as React from "react";
import PureComponent = React.PureComponent;

import LoginView from "./ui/LoginView";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class LoginConnector extends PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);

    return null;
  };
  render() {
    return <LoginView submit={this.dummySubmit} />;
  }
}
