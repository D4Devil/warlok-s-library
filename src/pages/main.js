import React from 'react';
import SearchSection from '../components/search_section';
import Header from '../components/header';
import '../fonts/niveau_serif_black.otf'
import CardCRUD from '../modules/card/card_crud';
import CardList from '../modules/card/card_list';
import useCardsModel from '../modules/card/card';
import './main.css'

export default function Main() {
    const [cards, setCards] = useCardsModel();
    return (
        <div className='main'>
            <Header/>
            <SearchSection/>
            <CardCRUD cards={cards} setCards={setCards}/>
            <CardList cards={cards}/>
        </div>
    );
}
