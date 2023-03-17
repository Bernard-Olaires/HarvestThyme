import React from 'react';
import { useLocation } from 'react-router-dom';


import './Form.css'

const ServiceForm = (props) => {
    const {service, setService, preview, setPreview, submitHandler, errors, setFile} = props
    const location = useLocation()
    
    let btnTxt = location.pathname.split('/')[2]

    const capitalize = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1) 
    }


    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setPreview(URL.createObjectURL(e.target.files[0]))
            const file = e.target.files[0]
            setFile(file)
        } else {
            setService({ ...service, [e.target.name]: e.target.value })
        }
    }

    return (
        <div>
            <div className="form-wrapper">
                <div className='form-style'>
                    <h2>Create a new Service</h2>
                    {
                        preview && <img src={preview} alt='img preview' />
                    }
                    {
                        errors.image ? <p className='errors'>{errors.image}</p> : null
                    }
                    <form onSubmit={submitHandler}>
                        <div className='form-control'>
                            <label>Name: </label>
                            <input type="text" name='name' value={service.name} onChange={handleChange} />
                            {
                                errors?.name ? <p className='errors'>{errors.name}</p> : null
                            }
                        </div>
                        <div className='form-control'>
                            <label>Description: </label>
                            <textarea name="description" cols="30" rows="3" value={service.description} onChange={handleChange}></textarea>
                            {
                                errors?.description ? <p className='errors'>{errors.description}</p> : null
                            }
                        </div>
                        <div className='form-control'>
                            <label>Contact Email: </label>
                            <input type="email" name='email' value={service.email} onChange={handleChange} />
                            {
                                errors?.email ? <p className='errors'>{errors.email}</p> : null
                            }
                        </div>
                        <div className='form-control'>
                            <label>Contact Phone #: </label>
                            <input type="tel" name='phone' value={service.phone} onChange={handleChange} />
                            {
                                errors?.phone ? <p className='errors'>{errors.phone}</p> : null
                            }
                        </div>
                        <div className='form-control'>
                            <label>Image: </label>
                            <input type='file' name='image' onChange={handleChange} />
                        </div>

                        <button>{capitalize(btnTxt)} Service</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ServiceForm;
