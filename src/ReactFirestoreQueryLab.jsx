import React, { useState } from "react";
import { withFirestore } from "react-redux-firebase";
import { compose } from "recompose";

import * as style from "./styles";

const ReactFirestoreQueryLab = (props) => {
  const { firestore } = props;

  const [queryResult, setQueryResult] = useState("");
  const [query, setQuery] = useState("");

  const runQuery = () => {
    try {
      let q = JSON.parse(query);

      firestore
        .get(q)
        .then((querySnapshot) => {
          console.log("runQuery() -- num rows returned:", querySnapshot.size);

          let retVal = [];
          querySnapshot.forEach((queryDocSnapshot) => {
            let d = queryDocSnapshot.data();
            retVal.push({ ...d, __META_ID: queryDocSnapshot.id });
          });
          setQueryResult(retVal);
        })
        .catch((err) => {
          console.log(`ERROR: runQuery() hit: ${err}`);
          setQueryResult(`ERROR: runQuery() hit: ${err}`);
        });
    } catch (err) {
      console.log(`ERROR: ${err}`);
      setQueryResult(`ERROR: ${err}`);
    }
  };

  const handleQueryChange = (evt) => {
    //    evt.preventDefault();
    setQuery(evt.target.value);
  };

  const exampleQueries = [
    `{"collection": "users", "limit": 4}`,
    `{"collection": "users", "limit": 4, "orderBy": ["displayName"], "startAt": ["James"]}`,
    `{"collection": "users", "limit": 4, "orderBy": [["displayName", "asc"], ["email", "asc"]], "startAt": ["James","james2@test.com"]}`,
    `{"collection": "vehicles", "limit": 4, "orderBy": [["make", "asc"], ["model", "desc"]], "startAt": ["Buick","LeSabre"]}`,
    `{"collection": "customers", "limit": 4, "orderBy": [["firstName", "desc"], ["age", "desc"]], "startAt": ["Ingrid", 31]}`,
  ];

  const copyToQueryZone = (queryString) => {
    setQuery(queryString);
  };

  const resultsZone = () => {
    if (typeof queryResult === "string" && queryResult.startsWith("ERROR")) {
      return <div style={style.RESULTS_ERROR}>{queryResult}</div>;
    } else {
      return (
        <div style={style.RESULTS}>{JSON.stringify(queryResult, null, 3)}</div>
      );
    }
  };

  return (
    <div style={style.LAB}>
      <h3>Example Queries</h3>
      {exampleQueries.map((query, idx) => (
        <p style={style.EXAMPLE_QUERIES} key={`query-${idx}`}>
          <button
            onClick={() => copyToQueryZone(query)}
            style={style.BUTTON_LOAD}
          >
            load
          </button>{" "}
          {query}
        </p>
      ))}
      <h3>Query Zone</h3>
      <textarea
        style={style.QUERY_ZONE}
        onChange={handleQueryChange}
        value={query}
        rows={style.QUERY_ZONE_NUM_ROWS}
      ></textarea>
      <button style={style.BUTTON_RUN_QUERY} onClick={() => runQuery()}>
        Run Query
      </button>
      <h3>Results Zone</h3>
      {resultsZone()}
    </div>
  );
};

export default compose(
  withFirestore,
)(ReactFirestoreQueryLab);
