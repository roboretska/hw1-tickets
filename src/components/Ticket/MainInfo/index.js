import React from 'react'
import './MainInfo.css'


export  default ({info: {price, amount, location, description}}) => (
    <div className='ticket-container-info'>
        <div>{price}</div>
        <div>{amount}</div>
        <div>{location}</div>
        <div>{description}</div>
    </div>
)