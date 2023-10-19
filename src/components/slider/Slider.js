import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import styles from './Slider.module.scss'
import { sliderData } from './slider-data';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoScroll, setAutoScroll] = useState(true)
    const intervalTime = 5000;
    let slideInterval;
    const slideLength = sliderData.length
    
    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    };

    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1);
    };


    function auto() {
        slideInterval = setInterval(handleNextSlide, intervalTime);
    }

    useEffect(()=> {
        auto();
        return () => clearInterval(slideInterval);
    },[currentSlide, autoScroll])

    return (
        <section className={styles.slider}>
            <div className={`container ${styles.box} group`}>
                <div className={`${styles.arrow} group-hover:block ${styles.prev}`}>
                    <BsChevronCompactLeft
                        onClick={handlePrevSlide}
                        size={30}
                    />
                </div>
                <div className={`${styles.arrow} group-hover:block ${styles.next}`}>
                    <BsChevronCompactRight
                        onClick={handleNextSlide}
                        size={30}
                    />
                </div>

                
                {sliderData.map((slide, index) => {
                    const { image } = slide;

                    return (
                        <div 
                            key={index} 
                            className={`carousel-item ${styles.slide} ${index === currentSlide ? styles.current : ''}`}
                        >
                            {index === currentSlide && (
                                <img src={image} alt="slide" width={500}/>
                            )}
                        </div>
                    )
                })}
                

                <div className={styles.dot}>
                    {sliderData.map((slide, index) => (
                        <div className={`text-2xl ${index === currentSlide ? styles.activeDot : ''}`}>
                            <RxDotFilled />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Slider
