import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuth } from '../../Auth-Content';

const Nav = () => {
  const { inputhandler, isSignedIn } = useAuth();
  console.log('signedIn', isSignedIn);
  return (
    <StyledDiv>
      <header>
        <Link to='/' >
          <h1>Grocery Basket</h1>
        </Link>
        <Link to={isSignedIn ? '/basket' : '/login'} >
          <i className='fa fa-shopping-basket' aria-hidden="true"></i>
        </Link>
      </header>

    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  header{
    background:black;
    color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height:12vh;
    width: 100vw;
    i{
      font-size:2rem;
      margin:0rem 4rem;
      &:hover{
        color: #5ee4c7;
      }
    }
    h1{
      font-size: 3rem;
      margin:0rem 5rem;
      &:hover{
        color:#5ee4c7;
      }
    }
    a{
      text-decoration: none;
      color: white;
    }
  }  
 
  
`;


export default Nav
