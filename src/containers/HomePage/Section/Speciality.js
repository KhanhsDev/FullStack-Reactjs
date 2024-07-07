import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';

import Specialityimage from '../../../assets/speciality/co-xuong-khop.png'

import './Speciality.scss'

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Speciality extends Component {


    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,

        }
        return (
            <>
                <div className='Speciality-container'>
                    <div className='Speciality-content'>
                        <div className='speciality-header'>
                            <span className='speciality-name'>
                                <FormattedMessage id="speciality.speciality" />
                            </span>
                            <button className='btn-speciality-readmore'>
                                <FormattedMessage id="speciality.Read more" />
                            </button>
                        </div>
                        <div className='speciality-body'>
                            <Slider {...settings}>
                                <div className='customize-speciality'>
                                    <div className='background-image'></div>
                                    <div className='speciality-des'>
                                        <FormattedMessage id="speciality.musculoskeletal joints" />
                                        1
                                    </div>

                                </div>

                                <div className='customize-speciality'>
                                    <div className='background-image'></div>
                                    <div className='speciality-des'>
                                        <FormattedMessage id="speciality.musculoskeletal joints" />
                                        2
                                    </div>
                                </div>

                                <div className='customize-speciality'>
                                    <div className='background-image'></div>
                                    <div className='speciality-des'>
                                        <FormattedMessage id="speciality.musculoskeletal joints" />
                                        3
                                    </div>
                                </div>

                                <div className='customize-speciality'>
                                    <div className='background-image'></div>
                                    <div className='speciality-des'>
                                        <FormattedMessage id="speciality.musculoskeletal joints" />
                                        4
                                    </div>
                                </div>

                                <div className='customize-speciality'>
                                    <div className='background-image'></div>
                                    <div className='speciality-des'>
                                        <FormattedMessage id="speciality.musculoskeletal joints" />
                                        5
                                    </div>
                                </div>

                                <div className='customize-speciality'>
                                    <div className='background-image'></div>
                                    <div className='speciality-des'>
                                        <FormattedMessage id="speciality.musculoskeletal joints" />
                                        6
                                    </div>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
