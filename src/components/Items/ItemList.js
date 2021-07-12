import React from 'react'
import Item from './Item';
import styled from 'styled-components';
import { useAuth } from '../../Auth-Content';


const ItemList = () => {
    const { filtered, inputhandler } = useAuth();

    return (
        <div>
            <StyledInput>
                <input type='text' placeholder='Search for grocery...' onChange={inputhandler} />
            </StyledInput>
            <StyledDiv>
                <i className='fa fa-leaf' aria-hidden="true"></i>
                <h1>Groceries</h1>
            </StyledDiv>
            <ul >
                {filtered.map(item =>
                    <Item item={item} />
                )}
            </ul>
        </div>
    )
}
const StyledDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
i{
    font-size: 1.5rem;
    margin:0rem 2rem;
    color: #14a5867d;
}
    h1{
        width:90vw;
    }
   

`;
const StyledInput = styled.div`
 input{
    width: 40vw;
    padding: 1vh 0 1vh 1vw;
    margin: 2vh;
    font-family: 'caveat', cursive;
  }
`;

export default ItemList;
