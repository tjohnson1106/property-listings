import * as React from "react";
import PureComponent = React.PureComponent;
import { RouteComponentProps } from "react-router-dom";

export class TextPage extends PureComponent<RouteComponentProps<{}>> {
  render() {
    const {
      location: { state }
    } = this.props;
    return (
      <div>
        <h2>
          {state && state.message ? state.message : "Hello Text Page"}
        </h2>
      </div>
    );
  }
}
