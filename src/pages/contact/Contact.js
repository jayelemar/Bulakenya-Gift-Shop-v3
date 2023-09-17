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
    <section>
        <div className="container flex justify-center items-center bg-blue-400 ">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>Contact Us</button>
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello</h3>
    <p className="py-4">If you have any questions or comments, please send us a message..</p>

        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="flex flex-col md:flex-row p-2">
            <div className="form-group flex flex-col">
                <input type="text" placeholder='Name'
                    {...register('name', {required: true} )}
                />
                {errors.name && <span className='error'>Name is required</span>}
            </div>

            <div className="form-group flex flex-col ">
                <input type="email" placeholder='Email'
                    {...register('email', { required: true } )}
                />
                {errors.email && <span className='error'>Email is required</span>}
            </div>
            </div>
            <div className="form-group p-2">
                <textarea rows="4" placeholder='Message'
                    {...register('message', { required: true } )}
                >
                {errors.message && <span className='error'>Message is required</span>}
                </textarea>
            </div>

            <div className="form-group flex justify-center">
                <button type='submit' className='btn btn-outline px-10'>Submit</button>
            </div>
        </form>

    <div className="modal-action">
        <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
        </form>
    </div>
    </div>
</dialog>


        
</div>
    </section>
  )
}

export default Contact