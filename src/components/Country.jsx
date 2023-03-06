import React from "react";

const Country = (props) => {
  const { country } = props;
  const { name, flags, capital, population, area } = country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article>
      <div className="info">
        <img src={flags.png} alt={name.common} />
        <div>
          <h3>Name: {name.common}</h3>
          <h3>Capital: {capital}</h3>
          <h3>Population: {population}</h3>
          <h3>Area: {area}</h3>
          <button
            onClick={() => {
              handleRemoveCountry(name.common);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </article>
  );
};

export default Country;
