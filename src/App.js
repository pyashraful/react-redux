import React from "react";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./components/redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <HooksCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
};

export default App;
