import React from "react";
import Merch from "./Merch";
import Basket from "./Basket";

class MerchDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMerch();
  }

  render() {
    const { merch, incrementClick, decrementClick, order } = this.props;
    return (
      <div className="merch">
        <div className="merch__content">
          {Object.keys(merch).map(item => {
            return (
              <Merch
                item={merch[item]}
                key={merch[item].id}
                incrementClick={incrementClick}
                decrementClick={decrementClick}
              />
            );
          })}
        </div>
        <div className="merch__basket">
          {/* <ul>  */}
          <Basket currentOrder={order} merch={merch} />
          {/* </ul> */}
        </div>
      </div>
    );
  }
}

export default MerchDisplay;
