import React from "react";
import { Link } from "react-router-dom";

const PokemonIndexItem = ({ pokemon }) => ({
  render() {
    return (
      <div>
        <li className="index-item">
          <Link className="index-link" to={`/pokemon/${pokemon.id}`}>
            <img
              className="index-img"
              src={pokemon.image_url}
              alt={pokemon.name}
            />
            {pokemon.name}
          </Link>
        </li>
      </div>
    );
  }
});

export default PokemonIndexItem;
