import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';

// import Specialityimage from '../../../assets/session/co-xuong-khop.png'

import './Session.scss'

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class MedicalFacility extends Component {


    render() {

        return (
            <>
                <div className='session-container'>
                    <div className='session-content'>
                        <div className='session-header'>
                            <span className='session-name'>
                                <FormattedMessage id="Session.Medical facility.Medical Facility" />
                            </span>
                            <button className='btn-session-readmore'>
                                <FormattedMessage id="Session.Medical facility.Read more" />
                            </button>
                        </div>
                        <div className='session-body'>
                            <Slider {...this.props.settings}>
                                <div className='customize-session'>
                                    <div className='background-image background-image-medical-facility'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.Medical facility.VIET DUC UNIVERSITY HOSPITAL" />
                                        1
                                    </div>

                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-medical-facility'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.Medical facility.VIET DUC UNIVERSITY HOSPITAL" />
                                        2
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-medical-facility'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.Medical facility.VIET DUC UNIVERSITY HOSPITAL" />
                                        3
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-medical-facility'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.Medical facility.VIET DUC UNIVERSITY HOSPITAL" />
                                        4
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-medical-facility'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.Medical facility.VIET DUC UNIVERSITY HOSPITAL" />
                                        5
                                    </div>
                                </div>

                                <div className='customize-session'>
                                    <div className='background-image background-image-medical-facility'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.Medical facility.VIET DUC UNIVERSITY HOSPITAL" />
                                        6
                                    </div>
                                </div>
                                <div className='customize-session'>
                                    <div className='background-image background-image-medical-facility'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.Medical facility.VIET DUC UNIVERSITY HOSPITAL" />
                                        7
                                    </div>
                                </div>
                                <div className='customize-session'>
                                    <div className='background-image background-image-medical-facility'></div>
                                    <div className='session-des'>
                                        <FormattedMessage id="Session.Medical facility.VIET DUC UNIVERSITY HOSPITAL" />
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
