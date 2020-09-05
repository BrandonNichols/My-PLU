import React from "react";
import "./App.css";
import Papa from "papaparse";

function importAll(r) {
  let files = "";
  r.keys().forEach((item) => {
    console.log("ITEM: ", item);
    files = item.substr(2);
  });
  return files;
}

const csvFileName = importAll(require.context("./csv-input", false, /\.csv/));
let csvInput = {};

Papa.parse(csvFileName, {
  complete: function (result) {
    csvInput = result.data;
  }
});

function App() {
  console.log("INPUT: ", csvInput);
  return <div className="App"></div>;
}

export default App;
