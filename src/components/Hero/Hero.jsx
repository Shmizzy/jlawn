import './hero.css';
import image1 from '../../assets/hero-img.jpg';
import image2 from '../../assets/hero-img2.jpg';
import image3 from '../../assets/hero-img3.jpg';
import { Link } from 'react-scroll';


const Hero = () => {
    return (
        <div className="hero" id='hero'>
            <section className='hero-content'>
                <h1>
                    <div className='words'>
                        <span className='transform'>Transform</span>
                        <span className='transform'>Revamp</span>
                        <span className='transform'>Alter</span>
                        <span className='transform'>Remodel</span>
                        <span className='transform'>Change</span>
                    </div>
                    Your Lawn With <br /> Expert Care</h1>
                <p>Professional Lawn Services for a Greener, Healthier Yard. We service all lawns big or small. Available In Corpus Christi and Surrounding Cities!</p>
                <div className='button-container'><button><Link Link to='contact' spy={true} smooth={true} offset={200} duration={100}>Availability</Link></button></div>
            </section>
            <section className='hero-images'>
                <div className='hero-gallery'>
                    <img className='gallery-card' src={image1}></img>
                    <img className='gallery-card' src={image2}></img>
                    <img className='gallery-card' src={image3}></img>
                </div>
            </section>
        </div>
    )
}

export default Hero;