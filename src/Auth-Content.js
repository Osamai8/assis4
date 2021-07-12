import React, { createContext, useState } from 'react';
import { groceryData, basketData } from './util';

const AuthContent = createContext({});

const AuthProvider = (props) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [openForm, setOpenForm] = useState(false);
    const [groceryList, setGroceryList] = useState(groceryData)
    const [basket, setBasket] = useState(basketData);
    const [input, setInput] = useState('');

    const addToBasketHandler = (item) => {
        const exist = basket.find((x) => x.id === item.id);
        if (exist) {
            setBasket(
                basket.map((x) =>
                    x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setBasket([...basket, { ...item, qty: 1 }]);
        }
    }

    const removeItem = (item) => {

        const exist = basket.find((x) => x.id === item.id);
        if (exist.qty === 1) {
            setBasket(basket.filter((x) => x.id !== item.id));
        } else {
            setBasket(
                basket.map((x) =>
                    x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    }

    const emptyBasketHandler = () => {
        setBasket([]);
    }

    const inputhandler = (e) => {
        setInput(e.target.value)
    }
    const filtered = groceryList.filter(item => {
        return item.name.toLowerCase().includes(input.toLowerCase());
    })

    const login = () => {
        setIsSignedIn(true);
    }

    const logout = () => {
        setIsSignedIn(false);
    }

    const authContextvalue = { login, isSignedIn, setIsSignedIn, openForm, setOpenForm, logout, basket, setBasket, input, setInput, filtered, addToBasketHandler, inputhandler, emptyBasketHandler, removeItem };
    return <AuthContent.Provider value={authContextvalue}{...props} />;
};

const useAuth = () => React.useContext(AuthContent);

export { AuthProvider, useAuth };