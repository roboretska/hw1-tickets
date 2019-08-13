import React, {useContext, useState, useEffect} from 'react';
import AppContext from "../../context";
import Ticket from '../Ticket'

import './Cart.css'

export default () => {
    const state = useContext(AppContext);
    const [ticketsList, updateTicketsList] = useState([]);
    useEffect(() => {
        updateTicketsList(state.cartList);
    }, [state.cartList.length]);

    return <div className='cart-container'>
        {ticketsList.map((ticket) => <Ticket ticket={ticket}/>)}
    </div>
};