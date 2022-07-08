import { createStore } from "redux";
import counterreducer from "../reducer/counterreducer";

const store = createStore(counterreducer);

export default store;