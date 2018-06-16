import * as React from "react";
import PureComponent = React.PureComponent;

import RegisterView from "./ui/RegisterView";

// container -> view
// container -> connector -> view
// controller -> connector -> view

class RegisterConnector extends PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return <RegisterView submit={this.dummySubmit} />;
  }
}

export default RegisterConnector;
