import React from 'react';

const Pagination = (props) => {
    const {onLeftClick, onRightClick,page,totalpage} =props;
    return(
        <div className="pagination">
            <button onClick={onLeftClick}>
                <div> atras </div>
            </button>
                <div>{page} de {totalpage}</div>
            <button onClick={onRightClick}>
                <div> adelante </div>
            </button>
        </div>
    )
}
export default Pagination