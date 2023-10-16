import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import styles from './Slider.module.scss'
import { sliderData } from './slider-data';
import { useEffect } from 'react';

const Slider = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;
    // console.log(slideLength);

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    };
    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1: currentSlide -1)
    };
    
    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    function auto() {
        
    }

    useEffect(() => {
        if (autoScroll) {
            const auto = () => {
                slideInterval = setInterval(handleNextSlide, intervalTime)
            }
            auto();
        }
        return () => clearInterval(slideInterval);
    },[currentSlide, slideInterval, autoScroll, ])

return (
    <section className='slider'>
        <div className="carousel w-full">
            <AiOutlineArrowLeft 
                className={`${styles.arrow} ${styles.prev}`}
                onClick={handlePrevSlide}
            />
            <AiOutlineArrowRight 
                className={`${styles.arrow} ${styles.next}`}
                onClick={handleNextSlide}
            />

            {sliderData.map((slide, index) => {
                const { image, heading, desc } = slide;

                return (
                    <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
                        {index === currentSlide && (
                            <>
                                <img src={image} alt="slide" />
                                <div className={`${styles.content}`}>
                                    <h2>{heading}</h2>
                                    <p>{desc}</p>
                                    <hr />
                                    <a href="#product" className='btn btn-primary'>
                                        Shop Now
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}


            {/* <div id="slide1" className={`carousel-item relative w-full ${currentSlide === 1 ? 'active' : ''}`}>
                <img alt='image-1' src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" className={`carousel-item relative w-full ${currentSlide === 1 ? 'active' : ''}`}>
                <img alt='image-2' src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" className={`carousel-item relative w-full ${currentSlide === 1 ? 'active' : ''}`}>
                <img alt='image-3' src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" className={`carousel-item relative w-full ${currentSlide === 1 ? 'active' : ''}`}>
                <img alt='image-4' src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div> */}
        </div>
    </section>
)
}

export default Slider
