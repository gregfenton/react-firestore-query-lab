# Example App using React Firestore Query Lab
## `react-firestore-query-lab`

This project shows how you can leverage the `react-firestore-query-lab` component to test hand-written JSON queries against your Firestore database.

## Getting Started
1. `git clone https://github.com/gregfenton/react-firestore-query-lab.git`
1. `cd react-firestore-query-lab`
1. `cd example`
1. `npm install`
1. Edit `src/firestoreConfig.js` and add your Firebase project's configuration to:
   ```js
   const firebaseConfig = {
     // YOUR FIREBASE APP CONFIG
     //
     // Copy contents of firebaseConfig from:
     //   Log into Firebase Console (https://console.firebase.google.com/)
     //      >> YOUR_PROJECT
     //      >> Project Settings
     //      >> Add App (or use existing one)
     //      >> Firebase SDK snippet
     //      >> Config
   };
   ```
1. `npm start`
1. If your browser doesn't automatically start, browse to:  http://localhost:3000/ (or whatever URL your `npm start` console output indicates)
1. In your browser:
  1. From the _Example Queries_ Click the first _load_ button.  This copies the first example into the _Query Zone_.
  1. If your Firstore database does not have a `"users"` collection, modify the Query Zone so you are querying one of your exising top-level collections.
  1. Click the _Run Query_ button
  1. Review _Results Zone_