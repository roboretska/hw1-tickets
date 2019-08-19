import React, {useState} from 'react';
import {AppProvider} from './context'
import * as values from './store';
import TicketsList from './components/TicketsList'
import Cart from './components/Cart'

import './App.css'


function App() {
  const [store, setStore] = useState(values);
  const addToCart = (ticket) => {
      setStore(prevState => {
          let previousCart = [...prevState.cartList];
          let previousList = [...prevState.ticketsList];
          const isPresent = previousCart.findIndex(t => t.id === ticket.id);
          const ticketInList = previousList.find((t) => t.id === ticket.id);
          if (ticketInList.amount > 1) {
              --ticketInList.amount;
          } else {
              previousList = previousList.filter(t => t.id !== ticket.id);
          }
          if (~isPresent){
              ++previousCart[isPresent].amount
          } else {
              const ticketCopy = {...ticket, amount: 1}
              previousCart = [...previousCart, ticketCopy];
          }
          return {
            ...prevState ,
              cartList: previousCart,
              ticketsList: [...previousList]
          }
      })
  };

  const removeFromCart = (ticket) => {
      setStore(prevState => {
          let cartList = [...prevState.cartList];
          let ticketList = [...prevState.ticketsList];
          const isPresent = ticketList.findIndex(t => t.id === ticket.id);
          const ticketInCart = cartList.find(t => t.id === ticket.id);

          if (ticketInCart.amount > 1) {
              --ticketInCart.amount;
          } else {
              cartList = cartList.filter(t => t.id !== ticket.id);
          }
          if (~isPresent){
              ++ticketList[isPresent].amount
          } else {
              const ticketCopy = {...ticket, amount: 1};
              ticketList = [...ticketList, ticketCopy];
          }


          return {
              ...prevState ,
              cartList: [...cartList],
              ticketsList: ticketList
          }
      });
  };
  return (
      <AppProvider value={store}>
          <div className='app-container'>
              <TicketsList addToCart={addToCart} />
              <Cart removeFromCart={removeFromCart} />
          </div>
      </AppProvider>
  );
}

export default App;
