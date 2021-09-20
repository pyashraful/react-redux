import React from "react";
import { buyCake, buyIceCream } from "./redux";
import { connect } from "react-redux";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cake {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
      <h2>Number of Cake {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
