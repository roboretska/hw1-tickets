import React, {useContext, useState, useEffect} from 'react';
import AppContext from "../../context";
import Ticket from '../Ticket'

export default ({addToCart}) => {
    const state = useContext(AppContext);
    const [ticketsList, updateTicketsList] = useState([]);
    useEffect(() => {
        updateTicketsList(state.ticketsList);
    }, [state.ticketsList.length]);

    console.log('Tickets', state);
    console.log(ticketsList);

    return ticketsList.map((ticket) => <Ticket
        ticket={ticket}
        onClickEvent={() => addToCart(ticket)}
    />);
};
