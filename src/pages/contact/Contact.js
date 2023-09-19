import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './Contact.module.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const {register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSubmit = async (data) => {
        try {
            console.log(data);
            reset();
            setIsSubmitted(true);
            await new Promise(resolve => setTimeout(resolve, 1000));

            setIsSubmitted(false);
            closeModal();
            toast.success("Message Successfully Sent");
        } catch (error) {
            setIsSubmitted(false);
            closeModal();
            toast.error("Error Sending Message"); // Display an error toast
        }


        setTimeout(() => {
            setIsSubmitted(false);
            closeModal();
        }, 1000);


    }

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    // ()=>document.getElementById('my_modal_5').showModal()

    return (
        <section>
            <div style={{ height: '60px' }}></div>
            <div className="container flex justify-center items-center bg-blue-400 ">
                <button className="btn" 
                    onClick={openModal}>
                Contact Us
                </button>
                <dialog id="my_modal_5" className={`modal modal-bottom sm:modal-middle ${isModalOpen ? 'modal-open' : ''}`}>
                    <div className="modal-box py-3">
                        <div className="flex justify-between items-center">
                            <h3 className={`font-bold text-lg ${styles.h3Style}`}>Hello</h3>
                            <form method="dialog">
                                <button className="btn btn-sm"><AiOutlineClose/></button>
                            </form>
                        </div>
                        <p className="py-4">If you have any questions or comments, please send us a message..</p>
                        <form onSubmit={ handleSubmit(onSubmit) }>
                            <div className="flex flex-col p-2">
                                <div className={`form-group flex flex-col ${styles['form-control']}`}>
                                    <input type="text" 
                                        placeholder='Name'{...register('name', {required: true} )}
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
            <ToastContainer />
        </section>
    )
}

export default Contact