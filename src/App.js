import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import ItemList from './components/Items/ItemList';
import BasketItem from './components/Basket/BasketItem';
import Nav from './components/Nav/Nav';
import LoginComponent from './components/Login/LoginComponent';
import styled from 'styled-components';


const App = () => {


  return (
    <StyledDiv>
      <Nav />
      <div  >
        <Switch>
          <Route path='/' exact>
            <ItemList />
          </Route>
          <Route path='/basket'>
            <BasketItem />
          </Route>
          <Route path='/login'>
            <LoginComponent />
          </Route>
        </Switch>
      </div>
    </StyledDiv>

  )
};
const StyledDiv = styled.div`
  div{
    float: left;
  }

`;


export default App;
