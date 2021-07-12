import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../../Auth-Content';

const Item = ({ item }) => {
    const { addToBasketHandler } = useAuth();

    return (
        <StyledDiv>
            <li key={item.id} onClick={() => addToBasketHandler(item)} >
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
            </li>
        </StyledDiv>
    )
};

const StyledDiv = styled.div`
    background: #dbdbdb;
    border-radius: 10rem;
    width:13rem;
    margin:1rem;    
    cursor: pointer;
    transition: background 1s ease;
    &:hover{
        background: #14a5867d;
    }
    li{
        text-decoration: none;
        display:flex;
    }
    li:active{
        background: #17b6937b;
        border-radius: 10rem;
    }
    img{
        width:3rem;
        height:3rem;
        object-fit: cover;
        border-radius: 50%;
        margin:0.4rem;
    }
    h3{
        font-size: 1.3rem;
        padding: 1rem 0rem;
    }
`;

export default Item;
