import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
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
            // auto();
        }
        return () => clearInterval(slideInterval);
    },[currentSlide, slideInterval, autoScroll, ])

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
                    <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
                        {index === currentSlide && (
                                <img src={image} alt="slide" />
                        )}
                    </div>
                )
            })}

            <div className={styles.dot}>
                {sliderData.map((slide, index) => (
                    <div>
                        <RxDotFilled />
                    </div>
                ))}
            </div>

        </div>
    </section>
)
}

export default Slider
