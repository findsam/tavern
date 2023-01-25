import { useReducer, createContext } from "react";

const initialState = { user: null };

const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
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
