import './navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h1>J's Lawn Service</h1>
            </div>
            <ul className='navigation'>
                <li>Home</li>
                <li>Services</li>
                <li>Gallery</li>
            </ul>
            <div className='nav-button'>
                <div className='button-wrapper'>
                    <button>Get a quote</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;