import { useState } from "react";

var cardsModel = [
    {
        title: 'First Card',
        text: 'Awesome Card'
    }
]

export default function useCardsModel() {
    const [cards, useCards] = useState(cardsModel);
    return [
        cards,
        useCards,
    ]
}

export function defaultCard() {
    return {title: 'Awesome Card', text: 'Awesome description' }
}
