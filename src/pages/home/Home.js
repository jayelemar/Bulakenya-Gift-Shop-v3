import React from 'react'
import pictures from '../../assets/wood-oval-brush-removebg-preview.png'

const Home = () => {
  return (
    <section>
        <div className="container">
            <div className="hero bg-base-200">
                <div className="bg-white hero-content flex-col lg:flex-row-reverse p-0 ">
                    <img src={pictures} alt='pictures' className="shadow-2xl" />
                    <div className='px-12 bg-white'>
                        <h1 className="text-5xl md:text-3xl font-bold">Gift and party needs for your Beloved</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-neutral">Start Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home
