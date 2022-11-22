import {defaultCard} from "./card";
import { useState } from "react";
import React from "react";

export default function CardCRUD({cards, setCards}) {
    const [currentCard, setCurrentCard] = useState(defaultCard);

    const onChange = (e) => {
        setCurrentCard(prev => (
                {...prev, [e.target.name]: e.target.value}
            ))}

    const onSubmit = (e) => {
        e.preventDefault();
        let new_card = Object.fromEntries(new FormData(e.target).entries());
        let new_cards = [...cards];
        new_cards.push(new_card);
        setCards(new_cards);
    }

    return (
        <div className='card-crud'>
            <form onSubmit={onSubmit}>
                <input 
                    className='card-crud__title'
                    type='text'
                    name='title'
                    value={currentCard.title}
                    onChange={onChange}
                    ></input>
                <input
                    className='card-crud__text'
                    type='text'
                    name='text'
                    value={currentCard.text}
                    onChange={onChange}
                ></input>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}
