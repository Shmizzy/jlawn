import './aboutUs.css'
import aboutImg from '../../assets/aboutus.jpg';
import { Link } from 'react-scroll';

const AboutUs = () => {
    return (
        <div className='aboutUs'>
            <div className='about-image-card'><img className='about-image' src={aboutImg} alt="" /></div>
            <section className='about-content'>
                <h1>About Us</h1>
                <p>Welcome to J's Lawn Care, your trusted partner for top-notch lawn care, fencing, and landscaping services in Corpus Christi, Texas. We are committed to delivering exceptional quality at competitive prices. Our mission is to enhance your outdoor spaces with honest hard work and a dedication to customer satisfaction. Choose J's Lawn Care for reliable service and outstanding results that transform your landscape.</p>
                <button className='contact-button'><Link Link to='contact' spy={true} smooth={true} offset={200} duration={100}>Contact Us</Link></button>
            </section>
        </div>
    )
}

export default AboutUs;