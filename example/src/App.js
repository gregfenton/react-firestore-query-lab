import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import ReactFirestoreQueryLab from "./ReactFirestoreQueryLab";

import { store, rrfProps } from "./firebaseConfig.";

// Setup react-redux so that connect HOC can be used
function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>

        <ReactFirestoreQueryLab />

      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

render(<App />, document.getElementById("root"));

export default App;
