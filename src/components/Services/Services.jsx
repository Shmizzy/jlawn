import './services.css';
import IconPlant from '../svgs/Plant/Plant';
import IconFence from '../svgs/Fence/Fence';
import IconGrass from '../svgs/Grass/Grass';


const Services = () => {
    return (
        <div className='services'>
            <section className='service-row'>
                <div className='service-card'>
                    <span><IconGrass /></span>
                    <h3>Lawn Care</h3>
                    <p>Keep your lawn looking pristine with our comprehensive lawn care services.</p>
                </div>
                <div className='service-card'>
                    <span><IconFence /></span>
                    <h3>Fencing</h3>
                    <p>Enhance your property's security and aesthetics with our custom fencing solutions. We specialize in building durable, high-quality wooden fences tailored to your specifications.</p>
                </div>
                <div className='service-card'>
                    <span><IconPlant /></span>
                    <h3>Landscaping Services</h3>
                    <p>Transform your outdoor space with our professional landscaping services.</p>
                </div>
            </section>
        </div>
    )
}

export default Services;