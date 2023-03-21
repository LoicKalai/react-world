import React from "react";

const Card = ({ country }) => {
  return (
    <div>
      <li className="card">
        <img
          src={country.flags.svg}
          alt={"drapeau" + country.translations.fra.common}
        />
        <div className="infos">
          <h2>Nom du pays</h2>
        </div>
      </li>
    </div>
  );
};

export default Card;
