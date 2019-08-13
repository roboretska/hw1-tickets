import React from 'react'

export  default ({name, addToCart}) => (
    <div className='ticket-container-header'>
        {name}
        <button onClick={addToCart}>Add to cart</button>
    </div>
)