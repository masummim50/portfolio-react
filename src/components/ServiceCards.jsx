import React from 'react';
import './card.css';

const services = [{
    title: 'FrontEnd Development',
    description: 'I can develop fully responsive landing page with custom or tailwindcss or any css library. I can integrate provided api in the frontend to create read and update data.'
},
{
    title: 'Rest Api Development',

    description: 'I can build fully functional rest api with authentication using tools such as nodejs, express, mongodb, jwt, mongoose etc.'
},

{
    title: 'Full stack Development',

    description: 'I can develop fully functional web application with both backend and frontend. See my projects for examples.'
}]

const ServiceCards = () => {
    

    return (
        <div className='card-container  grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 max-w-[1100px] m-auto'>
            <div className='card  rounded-md'>
                <Card title={services[0].title} description={services[0].description} />

            </div>
            <div className='card   rounded-md'>
                <Card title={services[1].title} description={services[1].description} />
            </div>
            <div className='md:col-span-2 lg:col-span-1 card   rounded-md'>
                <Card title={services[2].title} description={services[2].description} />
            </div>

        </div>
    );
};

export default ServiceCards;

const Card = ({ title, description }) => {
    return (
        <div className=' w-[99%]  h-[99%] m-auto p-[30px] rounded-md cursor-pointer card-content'>
            <h2 className="text-center text-2xl text-green-500 mb-4">{title}</h2>
            <p className="text-center">{description}</p>
        </div>
    )
}