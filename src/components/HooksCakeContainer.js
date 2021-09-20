import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyIceCream } from "./redux";

const HooksCakeContainer = () => {
  const { numOfCake, numOfIceCream } = useSelector((state) => {
    return {
      numOfCake: state.cake.numOfCake,
      numOfIceCream: state.iceCream.numOfIceCream,
    };
  });
  // const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cake = {numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>BUY CAKE</button>
      <h2>Number of cake = {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>BUY CAKE</button>
    </div>
  );
};

export default HooksCakeContainer;
