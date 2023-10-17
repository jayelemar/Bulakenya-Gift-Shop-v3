import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import styles from './Slider.module.scss'
import { sliderData } from './slider-data';

const Slider = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((currentSlide) => 
    //             (currentSlide < 5 ? currentSlide + 1 : 1)
    //         , 3000);

    //         return () => {
    //             clearInterval(interval);
    //         };
    //     })

<<<<<<< Updated upstream
    // },[])

return (
    <section className='slider'>
        <div className="carousel w-full">
            <AiOutlineArrowLeft className={`${styles.arrow} ${styles.prev}`}/>
            <AiOutlineArrowRight className={`${styles.arrow} ${styles.next}`}/>
=======
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


>>>>>>> Stashed changes

            {sliderData.map((slide, index) => {
                const { image } = slide;

                return (
                    <div key={index} className={index === currentSlide ? 'slide current' : 'slide'}>
                        {index === currentSlide && (
                                <img src={image} alt="slide" />
<<<<<<< Updated upstream
                                <div className="content">
                                    <h2>{heading}</h2>
                                    <p>{desc}</p>
                                    <hr />
                                    <a href="#product" className='btn btn-primary'>
                                        Shop Now
                                    </a>
                                </div>
                            </>
=======
>>>>>>> Stashed changes
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
