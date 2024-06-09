import './contact.css'
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { useState } from 'react';
import map from '../../assets/map.png'


const Contact = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
    }
    return (
        <div className='contact' id='contact'>
            <section className='contact-info'>
                <h1>Contact Information</h1>
                <div className='contact-top'>
                    <h5>Corpus Christi Texas and Surrounding Areas</h5>
                    <h6>📞 956-867-3570</h6>
                    <h6>✉️ Jmojica0918@yahoo.com</h6>
                </div>
                <div className='contact-map-card'><img src={map} /></div>
                <div className='contact-bottom'>
                    <h6>Our team of proffesionals well give you a low price custom for you within 24 hours!</h6>
                    <h6>Hours: 7:00AM - 7:00PM</h6>
                    <h6>Monday - Saturday</h6>
                </div>
            </section>
            {formSubmitted ? (
                <section className='success-card'>
                    <div className="success-message">
                        <h2>Thank you for your submission!</h2>
                        <p>We will get back to you within 24 hours.</p>
                    </div>
                </section>
            ) : (
                <section className='contact-form'>
                    <div className="form-card">
                        <form className="request-form" onSubmit={handleSubmit}>
                            <div className="form-section">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your full name" required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="address">Address</label>
                                <input type="address" id="address" name="address" placeholder="123 Ice Cream St" />
                            </div>
                            <div className="form-section">
                                <label htmlFor="phone">Phone #</label>
                                <input type="tel" id="phone" name="phone" placeholder="(555) 555-1234" required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="Your message here"></textarea>
                            </div>
                            <div className="form-section">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Contact;


