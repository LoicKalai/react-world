import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Countries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data)); // Mise à jour de la variable d'état
  }, []);

  return (
    <div className="countries">
      <h1>Countries</h1>
      <ul>
        {data.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
}

export default Countries;
