import { connect } from "react-redux";
import { selectAllListingsInCity, selectAllListingsInState, selectAllListingsInCountry } from "../../../reducers/entities/listings/listingsSelector";
import { requestAllPokemon } from "../../actions/pokemon_actions";
import ListingsIndex from "./ListingsIndex";

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
