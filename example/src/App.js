import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

import ReactFirestoreQueryLab from "react-firestore-query-lab";

import { configureStore } from "./firestoreConfig";
const [store, rrfProps] = configureStore();

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
