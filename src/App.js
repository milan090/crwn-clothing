import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homePage.component';
import ShopPage from './pages/shop/shop.component';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
