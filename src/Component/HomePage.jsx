import React, { useEffect, useRef, useState } from 'react';

import '../Css/HomePage.scss';
import { profile, sliderImageOne, sliderImageTwo, sliderImageThree, sliderImagefour } from "../Assets";
const Home = () => {

    const sliderImages = [sliderImageTwo, sliderImageThree, sliderImagefour];
    const [sliderImagesActiveIndex, setSliderImagesActiveIndex] = useState(0);
    const timeoutRef = useRef(null);

    const sliderImagesText = [
        'Connector QR bridges the gaps.',
        'Build everything behind Logisticsblocks multipurpose QR.',
        'Easy access to more data.',
    ];

    useEffect(() => {
        const resetInterval = () => {
            if (timeoutRef.current) {
                clearInterval(timeoutRef.current);
            }
        };
        resetInterval();
        timeoutRef.current = setInterval(
            () =>
                setSliderImagesActiveIndex((prevIndex) =>
                    prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
                ),
            3000
        );
        return () => resetInterval();
    }, [sliderImages.length]);

    return (
        <div className="col main_div">

            <div className="row text_field">
                <p className="text_fied_header">Terminate ..</p>
                <p className="question_div">What kind of service do you want ?</p>
                <input placeholder="   Answer" className="text_field_input"></input>
                <div className="col  colaboration_div">

                    <div className="row profile">
                        <div className="profile_image">
                            <img src={profile} />
                        </div>
                        <div className="profile_details">
                            <p className="colaborator_name">VIDUSHA DILSHAN</p>
                            <p className="colaborator_details">Department of computer Engineering (UG) <br />University of Ruhuna</p>
                        </div>
                    </div>

                    <div className="row profile">
                        <div className="profile_image">
                            <img src={profile} />
                        </div>
                        <div className="profile_details">
                            <p className="colaborator_name">HARSHA MADURANGA</p>
                            <p className="colaborator_details">university</p>
                        </div>
                    </div>

                    <div className="row profile">
                        <div className="profile_image">
                            <img src={profile} />
                        </div>
                        <div className="profile_details">
                            <p className="colaborator_name">BIMAL PASINDU</p>
                            <p className="colaborator_details">Department of Marine & Naval architecture (UG) <br />University of Ruhuna</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="row image_field">
                
                    {sliderImages.map((_, index) => (

                        
                        <div
                            className={`SignUpPage__sliderImage__wrapper ${sliderImagesActiveIndex === index ? 'active' : ''
                                }`}
                            key={index}
                        >
                            <img src={sliderImages[index]} alt="" />
                            
                        </div>
                    ))}
                
            </div>
        </div>
    )
}

export default Home;