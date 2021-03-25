import React from 'react';
import Pokemon from './Pokemon';
import PokemonCard from "./Pokemon-Card";
import Pagination from "./Pagination";

const Pokedex = (props) => {
    console.log(props)
    const {pokemons, page, setpage, total, loading} = props;

    const lastPage = () => {
        const nextPage = Math.max(page-1, 0);
        setpage(nextPage)
    }
    const nextPage = () => {
        const nextPage = Math.min(page+1, total);
        setpage(nextPage)
    }


    return(
        <div>
            <div className="header">
                <h1>Pokedex</h1>
                <Pagination
                page={page+1}
                totalpage={total}
                onRightClick={nextPage}
                onLeftClick={lastPage}
                />
            </div>
            {loading ?
                <div className="container-loader">
                    <div className="loader"></div>
                    <div>
                        Cargando Pokemones...
                    </div>
                </div> :
                <div className="pokedex-grid">
                    {pokemons.map((pokemon, idx) => {
                        return (
                            // <Pokemon pokemon={pokemon} key={pokemon.name}/>
                            <PokemonCard pokemon={pokemon} key={pokemon.name}/>
                        )
                    })}


                </div>
            }
        </div>
    )
}
export default Pokedex;