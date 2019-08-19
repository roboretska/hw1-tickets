import React from 'react'

export  default ({name, onClickEvent}) => (
    <div className='ticket-container-header'>
        {name}
        <button onClick={onClickEvent}>Add to cart</button>
    </div>
)