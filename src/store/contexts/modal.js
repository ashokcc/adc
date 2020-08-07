import React from "react";
import { InitialState, ModalReducer } from "../reducers/modal";

export const ModalContext = React.createContext(InitialState);

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(ModalReducer, InitialState);
  return (
    <ModalContext.Provider
      value={{
        modals: state.modals,
        dispatch,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
