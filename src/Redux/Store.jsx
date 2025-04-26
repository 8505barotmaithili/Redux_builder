import { combineReducers, legacy_createStore } from "redux";
import { counterReducer as counter } from "./CounterReducer";
import { themeReducer as theme } from "./ThemeReducer";

const rootReducer = combineReducers({
  counter,
  theme,
});

export const store = legacy_createStore(rootReducer);
