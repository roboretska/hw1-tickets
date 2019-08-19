import React, {useContext, useState, useEffect} from 'react';
import AppContext from "../../context";
import Ticket from '../Ticket'

import './TicketList.css'

export default ({addToCart}) => {
    const state = useContext(AppContext);
    const [ticketsList, updateTicketsList] = useState([]);
    useEffect(() => {
        updateTicketsList(state.ticketsList);
    }, [state.ticketsList.length]);

    return <div className='ticket-list-container flexible-list'>
        {ticketsList.map((ticket) =>
            <Ticket
                ticket={ticket}
                onClickEvent={() => addToCart(ticket)}
                fromList={true}
            />)}
    </div>
};
