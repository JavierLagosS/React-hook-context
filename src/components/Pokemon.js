import React from 'react';

const Pokemon = (props) => {
    const {pokemon} = props;
    return (
        <div className="pokemon-card">
            <div className="pokemon-img">
                <img src={pokemon.sprites.other.dream_world.front_default} alt="Imagen Pokemon"/>
            </div>
            <div>
                <div>
                    <h3>{pokemon.name}</h3>
                    <div>
                        #{pokemon.id}
                    </div>
                </div>
                <div>
                    <div>
                        {pokemon.types.map((type, idx) => {
                            return (
                                <div key={idx} className="pokemon-type-text">
                                    {type.type.name}
                                </div>
                            );
                        })}
                    </div>
                    <div>❤️</div>
                </div>
            </div>
        </div>
    )
}
export default Pokemon