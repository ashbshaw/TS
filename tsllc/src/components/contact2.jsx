import React from 'react';
import { useForm } from 'react-hook-form';

export const Contact = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);  

  const message = watch('message') || "";
  const messageCharsLeft = 1500 - message.length;

  return (
    <div>  
        <div className='container'>
            <div className='col-md-8'>
                <div className='row'>
                    <div className='section-title'>
                        <h2>Get In Touch</h2>
                        <p>
                          Please fill out the form below to send us an email and we will get back to you as soon as possible.
                        </p>
                    </div>


                <form name='sentMessage' onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group'>
                                {errors.user_name && errors.user_name.type === "required" && (<div role="alert">Name is required<br/></div>)}
                                <input
                                    type='text'
                                    name='user_name'
                                    placeholder='Name' 
                                    maxLength='30'
                                    aria-invalid={errors.user_name ? "true" : "false"}
                                    ref={register({ required: true })}
                                />
                                <p className='help-block text-danger'></p>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group'>

                                {errors.user_email && errors.user_email.type === "required" && (<div role="alert">Email is required<br/></div>)}
                                <input 
                                    type='email' 
                                    name='user_email'
                                    placeholder='Email'
                                    aria-invalid={errors.user_email ? "true" : "false"}
                                    ref={register({ required: true })}
                                />
                                <p className='help-block text-danger'></p>
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        {errors.message === "required" && (<div role="alert">Message is required<br/></div>)}
                        <textarea 
                            name='message'
                            placeholder='Message' 
                            maxLength='1500'
                            aria-invalid={errors.message ? "true" : "false"}
                            ref={register({ required: true })}
                        />
                        <p className='message-chars-left'>{messageCharsLeft}</p>
                        <p className='help-block text-danger'></p>
                    </div>
                    <div id='success'></div>
                        <button type='submit' className='btn btn-custom btn-lg' value='Send'></button>
                </form>
                
                </div>
            </div>

            <div className='col-md-3 col-md-offset-1 contact-info'>
                <div className='contact-item'>
                    <h3>Contact Info</h3>
                </div>
                <div className='contact-item'>
                    <p>
                        <span>
                        <i className='fa fa-envelope-o'></i> Email
                        </span>{' '}
                    </p>
                </div>
            </div>
  
        </div>

        <div id='footer'>
            <div className='container text-center'>
                <p>
                    &copy; 2021 Team Summer Consulting, LLC
                    {/* <a href='http://www.templatewire.com' rel='nofollow'>
                    Team Summer
                    </a> */}
                </p>
            </div>
        </div>

    </div>
  );
}

export default Contact;