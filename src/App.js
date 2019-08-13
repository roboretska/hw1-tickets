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
              previousCart = [...previousCart, ticket];
          }
          return {
            ...prevState ,
              cartList: previousCart
          }
      })
  };
  return (
      <AppProvider value={store}>
          <Cart />
          <TicketsList addToCart={addToCart}/>
      </AppProvider>
  );
}

export default App;
