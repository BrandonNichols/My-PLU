import React, { useState, useEffect } from "react";
import axios from "axios";
import ProduceContainer from "./components/ProduceContainer";
import "./App.css";

function App() {
  const [produceArray, setProduceArray] = useState([]);

  function pluProduceConnection(data) {
    return data.map((produce) =>
      `${produce.PLU} ${produce.VARIETY} ${produce.COMMODITY}`.toUpperCase()
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

  return (
    <div className="App">
      <ProduceContainer data={produceArray} />
    </div>
  );
}

export default App;
