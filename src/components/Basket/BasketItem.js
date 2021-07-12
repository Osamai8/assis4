import React from 'react';
import Basket from './Basket';
import styled from 'styled-components';
import firebase from 'firebase';
import { useAuth } from '../../Auth-Content';
import { Redirect } from 'react-router-dom';

const Basketitem = () => {
    const { basket, emptyBasketHandler, isSignedIn } = useAuth();

    return (
        <div>
            <StyledDiv >
                <i className='fa fa-trash' onClick={emptyBasketHandler} ></i>
                <h1>Basket Items</h1>
                <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
            </StyledDiv>
            <ul>
                {basket.map(item =>
                    <Basket item={item} />
                )}
            </ul>
        </div>
    )
};

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 2rem;

i{
    font-size: 1.5rem;
    margin:0rem 1rem;
    color: #f04c367c;
    padding:10px;
    border-radius: 50%;
    &:hover{
        background: #dbdbdb;
    }
}
    h1{
        width:70vw;
    }
button{
    padding:0.4rem 2rem;
    border-radius: 15rem;
    background: #dbdbdb;
    border: none;
    font-size: 1.2rem;
    &:hover{
        background: #f04c367c;
    }
}
`;

export default Basketitem;
