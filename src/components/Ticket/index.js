import React from 'react';
import Image from './ImageContainer';
import MainInfo from './MainInfo';
import Header from './TicketHeader';


export  default ({ticket: {name, src, ...info}, onClickEvent}) => (
    <div className='ticket-container'>
        <Header name={name} onClickEvent={onClickEvent}/>
        <Image src={src}/>
        <MainInfo info={info}/>
    </div>
)