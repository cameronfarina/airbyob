import React from "react";
import Item from "./item";
import ItemDetailContainer from "./item_detail_container";
import { Route } from "react-router-dom";

// import PokemonIndexItem from "./pokemon_index_item";

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    // debugger
    if (
      prevProps.match.params.pokemonId !== this.props.match.params.pokemonId
    ) {
      this.props.requestSinglePokemon(this.props.match.params.pokemonId);
    }
  }

  render() {
    // debugger
    const { pokemon, items } = this.props;
    const newPokemonItem = Object.values(items).map(item => (
      <Item key={item.id} item={item} />
    ));

    return (
      <div className="detail-section">
        <div className="pokemon-detail-image">
          <img src={pokemon.image_url} alt={pokemon.name} />
        </div>
        <ul>
          <li>{pokemon.name}</li>
          <li>Type: {pokemon.poke_type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          <li>Moves: {pokemon.moves.join(", ")}</li>
        </ul>

        <div className="detail-items">
          <h1>Items</h1>
          <ul className="item-list">{newPokemonItem}</ul>
        </div>
        <Route
          path="/pokemon/:pokemonId/item/:itemId"
          component={ItemDetailContainer}
        />
      </div>
    );
  }
}

export default PokemonDetail;
