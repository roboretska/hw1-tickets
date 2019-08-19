import React, {useState} from 'react';
import {AppProvider} from './context'
import * as values from './store';
import TicketsList from './components/TicketsList'
import Cart from './components/Cart'


function App() {
  const [store, setStore] = useState(values);
  const addToCart = (ticket) => {
      setStore(prevState => {
          let previousCart = [...prevState.cartList];
          const isPresent = previousCart.findIndex(t => t.id === ticket.id);
          if (~isPresent){
              ++previousCart[isPresent].amount
          } else {
              ticket.amount = 1;
              previousCart = [...previousCart, ticket];
          }
          return {
            ...prevState ,
              cartList: previousCart
          }
      })
  };
  const removeFromCart = (ticket) => {
      setStore(prevState => {
          let cartList = [...prevState.cartList];
          const element = cartList.find(t => t.id === ticket.id);
          if (element.amount > 1){
              --element.amount;
          } else {
              cartList = cartList.filter((t) => t.i !== ticket.id);
          }
          return {
              ...prevState ,
              cartList: cartList
          }
      });
      console.log(ticket);
  };
  console.log('removeFromCart',removeFromCart)
  return (
      <AppProvider value={store}>
          <Cart removeFromCart={removeFromCart} />
          <TicketsList addToCart={addToCart} />
      </AppProvider>
  );
}

export default App;
