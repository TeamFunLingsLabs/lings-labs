import React from "react";
import Merch from "./Merch";

class MerchDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMerch();
  }

  render() {
    const { merch, incrementClick, decrementClick } = this.props;
    return (
      <div>
        <ul>
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
        </ul>
      </div>
    );
  }
}

export default MerchDisplay;
