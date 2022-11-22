export default function ExpansionsMenu() {
    // We should integrate the state and count of expansions through the database
    let images = [...Array(14).keys()].map((number) => <div id={number}>Expansion number {number}</div>);
    return (
        <section className="ExpansionsMenu">
            {images}
        </section>
    );
}
