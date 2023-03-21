import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Countries() {
  const [data, setData] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data)); // Mise à jour de la variable d'état
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
      </ul>
      <ul>
        {data.slice(0, rangeValue).map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
}

export default Countries;
