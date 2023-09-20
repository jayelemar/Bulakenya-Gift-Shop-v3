import React from 'react'
import { SiShopee } from 'react-icons/si'
import { AiFillFacebook } from 'react-icons/ai'
import lazadaLogo from '../../assets/lazada-logo.png'

const About = () => {
  return (
    <div>
        <section id='about'>
            <div style={{ height: '60px' }}></div>
            <div className="container bg-red-400 p-8">
                <h4 className='text-white text-2xl md:text-3xl'>Contact Details</h4>
                <div className='flex flex-col md:flex-row text-white '>
                    <div className="mb-5">
                        <p className='my-2 text-sm md:text-xl'><span className='block font-bold'>Address: </span> 558, Bulakan, 3017 Bulacan</p>
                        <p className='my-2 text-sm md:text-xl my-6'><span className='block font-bold '>Hours: </span> Monday - Friday, 10AM-5PM</p>
                        <p className='my-2 text-sm md:text-xl'><span className='block font-bold '>Email Address:</span> bulakenya.giftshop@gmail.com</p>
                    </div>
                    <div className="mb-0 relative md:left-32 lg:left-44">
                        <h4 className='text-white ml-5 text-2xl hidden md:block'>Social</h4>
                        <div className="flex w-full justify-start items-center p-3">
                            <a href="https://web.facebook.com/bulakenya.giftshop" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <AiFillFacebook size={52} className='rounded-full text-white mx-1'/>
                            </a>
                            <a href="https://shopee.ph/bulakenya_giftshop" 
                                target="_blank" 
                                rel="noreferrer"
                            >
                                <SiShopee 
                                    size={47} 
                                    className='text-white relative bottom-1 mx-6 md:mx-16 my-4'
                                /> 
                            </a>
                            <a 
                                href="https://www.lazada.com.ph/shop/bulakenya-gift-shop" 
                                target="_blank" 
                                rel="noreferrer"
                                style={{ width: '45px', height: '45px' }}> 
                                {/* Adjust the width and height as per your requirements */}
                                <img src={lazadaLogo} 
                                    alt="lazada-logo" 
                                    style={{ width: '100%', height: '100%' }} 
                                />
                            </a>
                        </div>
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default About
