import React from 'react';
import Image from './ImageContainer';
import MainInfo from './MainInfo';
import Header from './TicketHeader';
import './Ticket.css'


export  default ({ticket: {name, src, ...info}, onClickEvent, fromList}) => (
    <div className='ticket-container'>
        <Header name={name} onClickEvent={onClickEvent} fromList={fromList}/>
        <Image src={src}/>
        <MainInfo info={info}/>
    </div>
)