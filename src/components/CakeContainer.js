import React from "react";
import { buyCake } from "./redux";
import { connect } from "react-redux";
const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cake - {props.numOfCake}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCake: state.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
