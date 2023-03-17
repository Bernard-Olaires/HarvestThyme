import React from 'react';
import useAuth from '../hooks/useAuth';
import formatPhoneNumber from '../utilities/formatPhone'
import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
    const {service, removeService} = props;
    const {auth} = useAuth()


    return (
        <div className='service-card'>
            <img src={service.image} alt="service" />
            <div className='card-text'>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <p>Contact for information and pricing at: {service.email} or call {formatPhoneNumber(service.phone)}</p>
                {
                    auth?.user?.role === 'employee'
                        ?<div>
                            <Link to={`/services/edit/${service._id}`}><button>Edit Service</button></Link>
                            <button onClick={()=>removeService(service._id)}>Remove Service</button>
                        </div>
                        :null
                }
            </div>
        </div>
    );
}

export default ServiceCard;
