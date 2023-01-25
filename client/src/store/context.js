import { useReducer, useState, createContext } from "react";

const initialState = { test: 0 };

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_TEST":
      return {
        ...state,
        test: action.payload,
      };
    default:
      return state;
  }
};

const Context = createContext({});

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider, Reducer };
