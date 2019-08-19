import React, {useContext, useState, useEffect} from 'react';
import AppContext from "../../context";
import Ticket from '../Ticket'

import './Cart.css'

export default ({removeFromCart}) => {
    const state = useContext(AppContext);
    const [ticketsList, updateTicketsList] = useState([]);
    useEffect(() => {
        updateTicketsList(state.cartList);
    }, [state.cartList.length]);

    return <div className='cart-container  flexible-list'>
        {ticketsList.map((ticket) =>
            <Ticket
                key={`${ticket.id}cart`}
                ticket={ticket}
                onClickEvent={() => removeFromCart(ticket)}
                fromList={false}
            />)}
    </div>
};