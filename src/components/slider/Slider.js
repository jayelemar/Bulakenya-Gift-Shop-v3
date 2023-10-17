import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import styles from './Slider.module.scss'
import { sliderData } from './slider-data';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoScroll, setAutoScroll] = useState(true)
    const slideLength = sliderData.length
    const intervalTime = 5000;
    let slideInterval;
    
    const handleNextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    };

    const handlePrevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide -1);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
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
                        <div key={index} className={index === currentSlide ?  `${styles.slide} ${styles.current}` : `${styles.slide}`}>
                            {index === currentSlide && (
                                <img src={image} alt="slide" />
                            )}
                        </div>
                    )
                })}

                <div className={styles.dot}>
                    {sliderData.map((slide, index) => (
                        <div key={index} 
                            onClick={() => goToSlide(index)} 
                            className={`text-xl cursor-pointer ${index === currentSlide ? styles.activeDot : ''}`}>
                            <RxDotFilled />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Slider
