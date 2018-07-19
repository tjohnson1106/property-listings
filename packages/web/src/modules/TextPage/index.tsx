import * as React from "react";
import PureComponent = React.PureComponent;

export class TextPage extends PureComponent {
  render() {
    console.log(this.props);
    return <div className="div">Hello Text Page</div>;
  }
}
