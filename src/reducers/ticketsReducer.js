import {combineReducers} from 'redux';
import actions from '../actions'

const initTicketsList = [
    {
        id: 1,
        name: 'Ticket 1',
        image: '../src/img.png',
        price: '400$',
        location: 'Lviv',
        description: 'Some info',
        amount: 400
    },
    {
        id: 2,
        name: 'Ticket 2',
        image: '../src/img.png',
        price: '400$',
        location: 'Lviv',
        description: 'Some info',
        amount: 400
    },
    {
        id: 3,
        name: 'Ticket 3',
        image: '../src/img.png',
        price: '400$',
        location: 'Lviv',
        description: 'Some info',
        amount: 400
    }
];

const ticketsList = (state = initTicketsList, actions) => {
    switch (actions) {
        default: return state;
    }

};

const selectedTicket = (state = null, actions) => {
    switch (actions) {
        default: return state;
    }

};

const ticketsCart = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_TO_CART: {
            console.log('actions.ADD_TO_CART', action, [...state, action.payload]);
            return [...state, action.payload];
        }
        case actions.REMOVE_FROM_CART: {
            return state.filter((ticket) => ticket.id!== actions.payload.id);
        }
        default: return state;
    }

};

export default combineReducers({
    ticketsList,
    selectedTicket,
    ticketsCart
});