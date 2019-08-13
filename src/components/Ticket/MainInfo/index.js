import React from 'react'


export  default ({info: {price, amount, location, description}}) => (
    <div className='ticket-container-info'>
        <div>{price}</div>
        <div>{amount}</div>
        <div>{location}</div>
        <div>{description}</div>
    </div>
)