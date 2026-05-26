"use client";

import { store } from "./store";
import { Provider } from "react-redux";
import React from "react";
import { ReduxPersist } from "./ReduxPersist";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ReduxPersist />
      {children}
    </Provider>
  );
}
