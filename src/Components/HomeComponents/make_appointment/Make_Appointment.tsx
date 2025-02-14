import { ArrowElbowRight } from '@phosphor-icons/react';
import img from '../../../assets/Home_imgs/Make_appointment/app.png';
import './appointment.css';
import React, { useState } from 'react';
import { MakeAppointmentForm } from '../../../types/@types';

const Make_appointment = () => {
    const initial_data: MakeAppointmentForm = {
        name: '',
        email: '',
        phone: '',
        Subject: '',
        message: ''
    };
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [massage, setMassage] = useState("");
    const [data, setData] = useState(initial_data);

    const handleChange = (field: string, value: string) => {
        setData({ ...data, [field]: value });
    };

    const validate = (data: MakeAppointmentForm) => {
        const errors: { [key: string]: string } = {};
        if (!data.name) {
            errors.name = 'Name is required';
        } else if (data.name.length < 3) {
            errors.name = 'Name should be at least 3 characters long';
        }

        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!data.phone) {
            errors.phone = 'Phone number is required';
        } else if (data.phone.length < 10) {
            errors.phone = 'Phone number should be at least 10 digits long';
        }

        if (!data.Subject) {
            errors.Subject = 'Subject is required';
        }

        if (!data.message) {
            errors.message = 'Message is required';
        } else if (data.message.length < 10) {
            errors.message = 'Message should be at least 10 characters long';
        }

        return errors;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate(data);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setMassage('');
        } else {
            setMassage('Form submitted successfully. We will contact you soon.');
            setErrors({});
            setData(initial_data);
        }
    };

    console.log(
        'name: ', data.name,
        'email: ', data.email,
        'phone: ', data.phone,
        'Subject: ', data.Subject,
        'message: ', data.message,
    );

    return (
        <div className='appointment'>
            <div className='container'>
                <div className='flex'>
                    <div className='img'>
                        <img src={img} alt='appointment' />
                    </div>
                    <div className='data'>
                        <div className='header'>
                            <span>ONLINE APPOINTMENT</span>
                            <h2>Make an online appointment booking for treatment patients</h2>
                            {massage && <span>{massage}</span>}
                        </div>
                        <div className='form'>
                            <form onSubmit={handleSubmit}>
                                {Object.keys(errors).length > 0 && (
                                    <div>
                                        {Object.values(errors).map((error, index) => (
                                            <span key={index}>{error}</span>
                                        ))}
                                    </div>
                                )}
                                <div className='input'>
                                    <input
                                        type='text'
                                        placeholder='Your Name'
                                        value={data.name}
                                        className={errors.name? "error" : ""}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                    />
                                    <input
                                        type='email'
                                        placeholder='Your E-mail'
                                        className={errors.email ? "error" : ""}
                                        value={data.email}
                                        onChange={(e) => handleChange('email', e.target.value)}
                                    />
                                </div>
                                <div className='input'>
                                    <input
                                        type='text'
                                        placeholder='Subject'
                                        className={errors.Subject? "error" : ""}
                                        value={data.Subject}
                                        onChange={(e) => handleChange('Subject', e.target.value)}
                                    />
                                    <input
                                        type='text'
                                        placeholder='Phone Number'
                                        className={errors.phone? "error" : ""}
                                        value={data.phone}
                                        onChange={(e) => handleChange('phone', e.target.value)}
                                    />
                                </div>
                                <div className='input'>
                                    <textarea
                                        placeholder='Your Message'
                                        rows={4}
                                        className={errors.message? "error" : ""}
                                        value={data.message}
                                        onChange={(e) => handleChange('message', e.target.value)}
                                    />
                                </div>
                                <button type='submit'>
                                    Send Now <ArrowElbowRight size={20} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Make_appointment;
