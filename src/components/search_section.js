import background from '../resources/search_background.png'
import logo from '../resources/talisman_logo_chopped.png'
import SearchBar from './search_bar';
import './search_section.css'

export default function SearchSection() {
    return (
        <section className='search-section' style={{backgroundImage: `url(${background})`}}>
            <picture className='search-section__logo'>
                <img className='search-section__image' src={logo} alt='Talisman Logo'></img>
            </picture>
            <h1 className='search-section__title search_section--flex-text'>Warlock's Library</h1>
            <SearchBar/>
            <h2 className='search-section__phrase search_section--flex-text'>
                - Una vez realizada la busqueda, 
                    esta web se desvance
                    hacia la pila de descarte -
            </h2>
        </section>
    );
} 
