import { createStore, combineReducers } from "redux";
import appReducer from "./app-reducer";
import { initialState } from "./initial-state";
import { reducer as formReducer } from "redux-form";

let reducers =combineReducers({
  app: appReducer,
  form: formReducer
})

const store = createStore(reducers, initialState)

export default store;