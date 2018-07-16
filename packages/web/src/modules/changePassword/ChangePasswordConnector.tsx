import * as React from "react";
import PureComponent = React.PureComponent;
import { RouteComponentProps } from "react-router-dom";

import ChangePasswordView from "./ui/ChangePasswordView";

export class ChangePasswordConnector extends PureComponent<
  RouteComponentProps<{
    key: string;
  }>
> {
  submit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    console.log(this.props);
    const {
      match: {
        params: { key }
      }
    } = this.props;
    console.log(key);
    return <ChangePasswordView submit={this.submit} />;
  }
}
