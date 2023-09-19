import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Contact.module.scss'
import { AiOutlineClose } from 'react-icons/ai'


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

    <section>
        <div style={{ height: '60px' }}></div>
        <div className="container flex justify-center items-center bg-blue-400 ">

        <button className="btn" 
            onClick={()=>document.getElementById('my_modal_5').showModal()}>
        Contact Us
        </button>

        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box py-3">
    <div className="flex justify-between items-center">
    <h3 className={`font-bold text-lg ${styles.h3Style}`}>Hello</h3>
    <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm"><AiOutlineClose/></button>
        </form>
    </div>
    <p className="py-4">If you have any questions or comments, please send us a message..</p>

        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="flex flex-col p-2">
            <div className={`form-group flex flex-col ${styles['form-control']}`}>
                <input type="text" placeholder='Name'
                    {...register('name', {required: true} )}
                />
                {errors.name && <span className={`error ${styles.err}`}>Name is required</span>}
            </div>

            <div className={`form-group flex flex-col ${styles['form-control']}`}>
                <input type="email" placeholder='Email'
                    {...register('email', { required: true } )}
                />
                {errors.email && <span className={`error ${styles.err}`}>Email is required</span>}
            </div>
            </div>
            <div className={`form-group p-2 ${styles['form-control']}`}>
                <textarea rows="4" placeholder='Message' className='w-full'
                    {...register('message', { required: true } )}
                >
                {errors.message && <span className={`error ${styles.err}`}>Message is required</span>}
                </textarea>
            </div>

            <div className="form-group flex justify-center">
                <button type='submit' className='btn btn-outline px-10'>Submit</button>
            </div>
        </form>

    <div className="modal-action">

    </div>
    </div>
</dialog>
       
</div>
    </section>
  )
}

export default Contact