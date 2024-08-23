import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';


import './Session.scss'

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Speciality extends Component {


    render() {

        return (
            <>
                <div className='session-container'>
                    <div className='session-content  background-speciality-banner'>
                        <div className='session-header'>
                            <span className='session-name'>
                                <FormattedMessage id="Session.speciality.speciality" />
                            </span>
                            <button className='btn-session-readmore'>
                                <FormattedMessage id="Session.speciality.Read more" />
                            </button>
                        </div>
                        <div className='session-body'>
                            <Slider {...this.props.settings}>
                                <div className='customize-session'>
                                    <div className='background-image background-image-speciality'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.speciality.musculoskeletal joints" />
                                        1
                                    </div>

                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-speciality'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.speciality.musculoskeletal joints" />
                                        2
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-speciality'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.speciality.musculoskeletal joints" />
                                        3
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-speciality'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.speciality.musculoskeletal joints" />
                                        4
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-speciality'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.speciality.musculoskeletal joints" />
                                        5
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-speciality'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.speciality.musculoskeletal joints" />
                                        6
                                    </div>
                                </div>
                                <div className='customize-session'>
                                    <div className='background-image background-image-speciality'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.speciality.musculoskeletal joints" />
                                        7
                                    </div>
                                </div>
                                <div className='customize-session'>
                                    <div className='background-image background-image-speciality'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.speciality.musculoskeletal joints" />
                                        8
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
