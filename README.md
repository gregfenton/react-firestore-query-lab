<img src='https://github.com/gregfenton/react-firestore-query-lab/raw/master/media/icons/react.png' width='60'/><img src='https://github.com/gregfenton/react-firestore-query-lab/raw/master/media/icons/firestore.png' width='60'/><img src='https://github.com/gregfenton/react-firestore-query-lab/raw/master/media/icons/query.png' width='60'/><img src='https://github.com/gregfenton/react-firestore-query-lab/raw/master/media/icons/lab.png' width='60'/>
# React Firestore Query Lab 

Table of Contents
  * [The `react-firestore-query-lab` Component](#the--react-firestore-query-lab--component)
  * [Getting Started](#getting-started)
  * [Using the Component](#using-the-component)
  * [The Example App](#example-app)

## The `react-firestore-query-lab` Component

This is a React component allowing you to experiment with [react-redux-firebase](https://react-redux-firebase.com/) queries.  Well, actually, it uses [redux-firestore's `get()`](https://github.com/prescottprue/redux-firestore#get).

Your [react-redux-firebase](https://react-redux-firebase.com/) app should be configured and running against Firestore.  If not, [configure that first](https://react-redux-firebase.com/docs/getting_started.html).

This component can be included anywhere in your React app that a component can be added, assuming it is somewhere inside the hierarchy of the `<ReactReduxFirebaseProvider>`.

## Getting Started
For the following steps, we assume you are going to add the component to `<App>` of the [Firestore configuration](https://react-redux-firebase.com/docs/firestore.html):
  1. `npm install react-firestore-query-lab`
  1. In a "page" of your React app, such as the top-level `<App>`, include this component:
      - `import ReactFirestoreQueryLab from "react-firestore-query-lab"`
  1. In that same "page", add the component to your JSX:
      ```js
      function App() {
        return (
          <Provider store={store}>
            <ReactReduxFirebaseProvider {...rrfProps}>

              <ReactFirestoreQueryLab />

              <Todos />
            </ReactReduxFirebaseProvider>
          </Provider>
        )
      }
      ```
  1. Run your app: `npm start`

## Using the Component
Once loaded in your app, you can query your Firestore instance.  The Component comprises 4 "zones":
  1. **Example Queries** - displays several example queries, each prefixed with a **load** button.  Clicking the _load_ button copies the query text into the _Query Zone_.
  1. **Query Zone** - a text area where you compose your JSON query string
  1. **Run Query** - a button that when clicked parses the _Query Zone_ string and passes it to `firestore.get()`.
  1. **Results Zone** - a text field where query results or error strings are displayed.

The query takes a string that is parsed as JSON.  If it parses correctly and if it contains a valid query, `firestore.get()` is called with your query.  Results or Errors are displayed in the _Results Zone_.

<img src='https://github.com/gregfenton/react-firestore-query-lab/raw/master/media/screenshots/screenshot_1.png' width='700'/>

## The Example App
See [the project's example](https://github.com/gregfenton/react-firestore-query-lab/tree/master/example) to quickly get going in a sample app.


---
<small><i>Table of contents generated with<a href='http://ecotrust-canada.github.io/markdown-toc/'> markdown-toc</a></i></small>
