import CardPreview from "./card_preview";

export default function CardList({cards}){
    const current_cards = cards.map((card, i) => {
        return <CardPreview card={card} key={"card_" + i}/>
    });

    return (
        <div className="card-list">
            {current_cards}
        </div>
    );
}
