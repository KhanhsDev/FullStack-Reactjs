import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';

// import Specialityimage from '../../../assets/session/co-xuong-khop.png'
// import Doctor from '../../../assets/session/session.jpg'

import './Session.scss'

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Doctor extends Component {


    render() {

        return (
            <>
                <div className='session-container'>
                    <div className='session-content'>
                        <div className='session-header'>
                            <span className='session-name'>
                                <FormattedMessage id="session.session" />
                            </span>
                            <button className='btn-session-readmore'>
                                <FormattedMessage id="session.Read more" />
                            </button>
                        </div>
                        <div className='session-body'>
                            <Slider {...this.props.settings}>
                                <div className='customize-session'>
                                    <div className='background-image background-image-doctor'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="session.musculoskeletal joints" />
                                        1
                                    </div>

                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-doctor'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="session.musculoskeletal joints" />
                                        2
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-doctor'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="session.musculoskeletal joints" />
                                        3
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-doctor'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="session.musculoskeletal joints" />
                                        4
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-doctor'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="session.musculoskeletal joints" />
                                        5
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-doctor'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="session.musculoskeletal joints" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
