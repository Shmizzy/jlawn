import './hero.css';
import image1 from '../../assets/hero-img.jpg';
import image2 from '../../assets/hero-img2.jpg';
import image3 from '../../assets/hero-img3.jpg';

const Hero = () => {
    return (
        <div className="hero">
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
                <p>Professional Lawn Services for a Greener, Healthier Yard. Available In Corpus Christi, Texas and Surrounding Cities!</p>
                <div className='button-container'><button>Recive Your Free Quote Now</button></div>
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