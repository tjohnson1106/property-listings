import * as React from "react";
import PureComponent = React.PureComponent;
import ChangePasswordView from "./ui/ChangePasswordView";

export class ChangePasswordConnector extends PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return <ChangePasswordView submit={this.dummySubmit} />;
  }
}
