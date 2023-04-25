
import React from "react";
import Button from "./Button";
import { Provider } from "react-redux";
import { store } from "./store";

export default function Assignment() {
  return (
    <div>
      <Provider store={store}>
        <Button />
      </Provider>
    </div>
  );
}