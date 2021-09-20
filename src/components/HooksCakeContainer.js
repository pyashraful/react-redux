import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./redux";

const HooksCakeContainer = () => {
  const numOfCake = useSelector((state) => state.numOfCake);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cake = {numOfCake}</h2>
      <button onClick={() => dispatch(buyCake())}>BUY CAKE</button>
    </div>
  );
};

export default HooksCakeContainer;
