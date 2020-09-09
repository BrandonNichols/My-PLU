import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [produceArray, setProduceArray] = useState([]);

  function pluProduceConnection(data) {
    return data.map(
      (produce) => `${produce.PLU} ${produce.VARIETY} ${produce.COMMODITY}`
    );
  }

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://produce-lookup-server.herokuapp.com/api/produce"
      );
      setProduceArray(pluProduceConnection(result.data));
    }
    fetchData();
  }, []);

  console.log("PRODUCE_ARRAY: ", produceArray);
  return <div className="App"></div>;
}

export default App;
