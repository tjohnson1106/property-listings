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
          // tslint:disable-next-line:jsx-no-multiline-js
          <Card
            key={`${l.id}-card`}
            hoverable={true}
            // tslint:disable-next-line:jsx-no-multiline-js
            style={{ width: 240 }}
            // tslint:disable-next-line:jsx-no-multiline-js
            cover={
              <img
                // tslint:disable-next-line:jsx-no-multiline-js
                alt="example"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta
              title={l.name}
              description="cloudinary collection"
            />
          </Card>
        ))}
      </div>
    );
  }
}

export const FindListingsConnector = withFindListings(
  FindListingsSubject
);
