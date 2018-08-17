import * as React from "react";
import PureComponent = React.PureComponent;
import { RegisterController } from "@air-init/controller";

import RegisterView from "./ui/RegisterView";
import { RouteComponentProps } from "react-router-dom";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/m/confirm-email", {
      message: "Please check your email to confirm your account."
    });
  };

  render() {
    return (
      /*prettier-ignore*/
      <RegisterController>
       {({ submit }) => ( <RegisterView onFinish={this.onFinish} submit={submit} /> )}
      </RegisterController>
    );
  }
}

// tslint:disable-next-line:jsx-no-multiline-js
