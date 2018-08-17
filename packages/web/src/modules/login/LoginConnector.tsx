import * as React from "react";
import PureComponent = React.PureComponent;
import { LoginController } from "@air-init/controller";

import LoginView from "./ui/LoginView";
import { RouteComponentProps } from "react-router-dom";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class LoginConnector extends PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    const {
      history,
      location: { state }
    } = this.props;

    if (state && state.next) {
      return history.push(state.next);
    }

    this.props.history.push("/");
  };

  render() {
    console.log("this.props", this.props.location.state);

    return (
      /*prettier-ignore*/
      <LoginController>
        {({ submit }) => <LoginView onFinish={this.onFinish} submit={submit} />}
      </LoginController>
    );
  }
}
