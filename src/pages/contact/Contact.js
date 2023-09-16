import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


const Contact = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit = (data) => {

    console.log(data);
    reset();
    setIsSubmitted(true);
    setTimeout(() => {
        setIsSubmitted(false);
    }, 3000);
  }


  return (
    <section id='contact'>
        <h2>Contact Us</h2>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="form-group">
                <input type="text" placeholder='Name'
                    {...register('name', {required: true} )}
                />
                {errors.name && <span className='error'>Name is required</span>}
            </div>

            <div className="form-group">

                <input type="email" placeholder='Email'
                    {...register('email', { required: true } )}
                />
                {errors.email && <span className='error'>Email is required</span>}
            </div>

            <div className="form-group">
                <textarea rows="4" placeholder='Message'
                    {...register('message', { required: true } )}
                >
                {errors.message && <span className='error'>Message is required</span>}
                </textarea>
            </div>

            <div className="form-group">
                <button type='submit'>Submit</button>
            </div>


            
        </form>

    </section>
  )
}

export default Contact