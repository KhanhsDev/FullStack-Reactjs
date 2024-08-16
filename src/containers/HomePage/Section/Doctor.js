import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'
import { FormattedMessage } from 'react-intl';
import { languages, CommonUtils } from '../../../utils';

import { withRouter } from 'react-router';

import './Session.scss'

// import slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorArr: []
        }
    }
    async componentDidMount() {
        this.props.fetchDoctor()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.doctor !== this.props.doctor) {
            this.setState({
                doctorArr: this.props.doctor
            })
        }
    }
    handleViewDetailDoctor = (doctor) => {
        console.log("View information doctor ", doctor)
        this.props.history.push(`/detail-doctor/${doctor.id}`)
    }
    render() {
        let doctorArr = this.state.doctorArr
        let language = this.props.language
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            // autoplay: true,
        }
        return (
            <>
                <div className='session-container'>
                    <div className='session-content'>
                        <div className='session-header'>
                            <span className='session-name'>
                                <FormattedMessage id="Session.doctor.outstanding doctor" />
                            </span>
                            <button className='btn-session-readmore'>
                                <FormattedMessage id="Session.doctor.Read more" />
                            </button>
                        </div>
                        <div className='session-body'>
                            <Slider {...settings}>

                                {doctorArr && doctorArr.length > 0
                                    && doctorArr.map((item, index) => {
                                        let imageBase64 = ''
                                        if (item.image) {
                                            imageBase64 = new Buffer(item.image, 'base64').toString('binary')
                                        }
                                        let nameVi = `${item.positionData.value_vi}, ${item.lastName} ${item.firstName}`
                                        let nameEn = `${item.positionData.value_en}, ${item.firstName} ${item.lastName}`

                                        return (
                                            <div className='customize-session' key={index} onClick={() => this.handleViewDetailDoctor(item)}>
                                                <div className='background-image background-image-doctor'
                                                    style={{
                                                        backgroundImage: `url(${imageBase64})`
                                                    }}>

                                                </div>
                                                <div className='session-des'>
                                                    <div>{language === languages.VI ? nameVi : nameEn}</div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
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
        language: state.app.language,
        doctor: state.admin.Doctor,
        isLoadingDoctor: state.admin.isLoadingDoctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDoctor: () => dispatch(actions.fetchDoctor()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Doctor));
