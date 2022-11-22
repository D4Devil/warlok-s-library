
export default function CardPreview({card}){
    return (
        <article className="card_preview">
            <h1>{card.title}</h1>
            <p>{card.text}</p>
        </article>
    );
}
