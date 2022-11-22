import './header.css'

export default function Header() {
    return (
        <header className='main-header'>
            <div>
                <a className='header-logo'>Warlock's Library</a>
            </div>
            <nav className='nav-bar'>
                <ul className='nav-bar-elements'>
                    <li className='nav-bar-element'><a className='search-bar'>Quick Search</a></li>
                    <li className='nav-bar-element'><a>Expansions</a></li>
                    <li className='nav-bar-element'><a>Advanced Search</a></li>
                    <li className='nav-bar-element'><a>Homebrew</a></li>
                </ul>
            </nav>
        </header>
    );
}
