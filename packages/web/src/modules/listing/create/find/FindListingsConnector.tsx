import * as React from "react";
import PureComponent = React.PureComponent;
import { Card } from "antd";
import {
  withFindListings,
  WithFindListings
} from "@air-init/controller";

const { Meta } = Card;

class FindListingsSubject extends PureComponent<WithFindListings> {
  render() {
    const { listings, loading } = this.props;
    return (
      <div>
        {loading && <div>...loading</div>}

        {listings.map(l => (
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="example"
                src="http://res.cloudinary.com/bracket-factory/image/upload/v1532452457/saga/wide.jpg"
              />
            }
          >
            <Meta />
          </Card>
        ))}
      </div>
    );
  }
}

export const FindListingsConnector = withFindListings(
  FindListingsSubject
);
