import React, {useContext} from 'react';
import bgPatternCard from '../images/bgPatternCard.svg'
import FavoriteContext from "../contexts/favoritesContexts";

const PokemonCard = (props) => {
    const {pokemon} = props;
    const  {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const heart = favoritePokemons.includes(pokemon.name)? redHeart: blackHeart;

    const clickHeart = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    };

    return (
        <div id="card">
            <div className="card">
                <img
                    src={bgPatternCard}
                    alt="imagen header card"
                    className="card-header"
                />
                <div className="card-body">
                    <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="card-body-img"/>

                    <button onClick={clickHeart} className="pokemon-heart-btn">
                        <div className="pokemon-favorite">{heart}</div>
                    </button>

                    <h1 className="card-body-title">
                        {pokemon.name}
                        <span>  {pokemon.stats[0].base_stat}hp</span>
                    </h1>

                    <div className="card-body-text">
                    {pokemon.types.map((type, idx)=>{
                        return <p className="card-body-text-letter" key={idx}>{type.type.name}</p>
                    })}
                    </div>

                </div>
                <div className="card-footer">
                    <div className="card-footer-social">
                        <h3>{pokemon.stats[1].base_stat}K</h3>
                        <p>Ataque</p>
                    </div>
                    <div className="card-footer-social">
                        <h3>{pokemon.stats[2].base_stat}K</h3>
                        <p>Ataque Especial</p>
                    </div>
                    <div className="card-footer-social">
                        <h3>{pokemon.stats[3].base_stat}K</h3>
                        <p>Defensa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PokemonCard