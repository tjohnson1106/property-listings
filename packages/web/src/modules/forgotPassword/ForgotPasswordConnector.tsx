import * as React from "react";
import PureComponent = React.PureComponent;
import ForgotPasswordView from "./ui/ForgotPasswordView";

export class ForgotPasswordConnector extends PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);

    return null;
  };

  render() {
    return <ForgotPasswordView submit={this.dummySubmit} />;
  }
}
