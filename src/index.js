import React from "react";
import ReactDom from "react-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import ConnectedApp from "./App";

const ReduxApp = () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
};

ReactDom.render(<ReduxApp />, document.getElementById("root"));
