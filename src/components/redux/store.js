import { createStore } from "redux";
import reducer from "./cake/cakeReducer";

const store = createStore(reducer);

export default store;
