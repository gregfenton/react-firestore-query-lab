var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/ReactFirestoreQueryLab.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "src"),
        exclude: /(build|example|node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  externals: {
    firebase: {
      commonjs: "firebase",
      commonjs2: "firebase",
      amd: "firebase",
      root: "Firebase",
    },
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      root: "React",
    },
    "react-redux": "react-redux",
    "react-redux-firebase": "react-redux-firebase",
    recompose: "recompose",
  },
  performance: {
    maxEntrypointSize: 700000,
    maxAssetSize: 700000,
  },
};

var tried = {
  "react-dom": "react-dom",
  redux: "redux",
  "redux-firestore": "redux-firestore",
};