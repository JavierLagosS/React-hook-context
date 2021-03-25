import React from 'react';
const {useState} = React;


const Searchbar = (props) => {
    const {onSearch} = props
    const [search, setSearch] = useState("");


    const onChange = (evt) => {
        setSearch(evt.target.value);
        if (evt.target.value.length ===0){
            setSearch(null);
        }
    }
    const onClick = async (e) => {
        onSearch(search);
    };

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input
                    type="text"
                    placeholder="Buscar Pokemon"
                    onChange={onChange}
                />
            </div>
            <div className="searchbar-btn">
                <button onClick={onClick}>Buscar</button>
            </div>
        </div>
    );
};

export default Searchbar;