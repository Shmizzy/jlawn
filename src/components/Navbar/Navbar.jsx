import './navbar.css';
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

    const toggleMenu = () => {
        setIsActive(!isActive)
        console.log(isActive);
    }

    return (
        <div className={`navbar ${isActive ? 'active' : ''}`}>
            <div className='logo'>
                <h1>J's Lawn Service</h1>
            </div>
            <div className={`nav-menu ${isActive ? 'active' : ''}`}>
                
                <div className='navigation'>
                    <h4><Link to='hero' onClick={toggleMenu} spy={true} smooth={true} duration={100}>Home</Link></h4>
                    <h4><Link to='services' onClick={toggleMenu} spy={true} smooth={true} offset={-380} duration={100}>Services</Link>
                    </h4>
                    <h4><Link to='contact' onClick={toggleMenu} spy={true} smooth={true} offset={-140} duration={100}>Contact</Link></h4>
                </div>
                <div className='nav-button'>
                    <div className='button-wrapper'>
                        <button><Link to='contact' onClick={toggleMenu} spy={true} smooth={true} offset={-140} duration={100}>Schedule us</Link></button>
                    </div>
                    <a href="tel:956-867-3570"><h4 className='phone'>📞 956-867-3570</h4></a>
                </div>
            </div>
            
            <div className={`hamburger-menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>{isActive ? '❌' : '☰'}</div>
        </div>
    )
}

export default Navbar;