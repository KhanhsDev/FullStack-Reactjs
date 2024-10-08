import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './HomeHeader.scss'
import { languages } from '../../utils';
import { ChangeLanguageApp } from '../../store/actions';
import Slider from "react-slick";
import { withRouter } from 'react-router';
class HomeHeader extends Component {
    handleChangeLanguage = (language) => {
        this.props.ChangeLanguageAppRedux(language)
    }
    returnHomePage = () => {
        this.props.history.push('/HomePage')
    }
    hanldeUserLogin = () => {
        this.props.history.push('/Login')
    }
    render() {

        let language = this.props.language
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='logo-header'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo-image' onClick={() => this.returnHomePage()}></div>
                        </div>
                        <div className='content-header'>
                            <div className='child-content-header'>
                                <div><b>
                                    <FormattedMessage id="homeheader.speciallity" />
                                </b></div>
                                <div className='header-subs-title'>
                                    <FormattedMessage id="homeheader.searchdoctor" />
                                </div>
                            </div>
                            <div className='child-content-header'>
                                <div><b>
                                    <FormattedMessage id="homeheader.Medical Facilities" />
                                </b></div>
                                <div className='header-subs-title'>
                                    <FormattedMessage id="homeheader.Choosing a hospital by clinic" />
                                </div>
                            </div>
                            <div className='child-content-header'>
                                <div><b>
                                    <FormattedMessage id="homeheader.Physician" />
                                </b></div>
                                <div className='header-subs-title'>
                                    <FormattedMessage id="homeheader.Choosing a good doctor" />
                                </div>
                            </div>
                            <div className='child-content-header'>
                                <div><b>
                                    <FormattedMessage id="homeheader.Examination Package" />
                                </b></div>
                                <div className='header-subs-title'>
                                    <FormattedMessage id="homeheader.General health" />
                                </div>
                            </div>
                        </div>
                        <div className='header-support'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>
                                <FormattedMessage id="homeheader.Support" />
                            </div>
                            <div className='flag'>
                                <div className={language === languages.VI ? 'language-vi active' : 'language-vi'}>
                                    <span className='flag-language-vi' onClick={() => this.handleChangeLanguage(languages.VI)}> </span>
                                </div>
                                <div className={language === languages.EN ? 'language-en active' : 'language-en'}>
                                    <span className='flag-language-en' onClick={() => this.handleChangeLanguage(languages.EN)}> </span>
                                </div>
                            </div>


                        </div>
                        <div className='header-login'>
                            <div className='login' >
                                <button type="button" className="btn btn-warning"
                                    onClick={() => this.hanldeUserLogin()}
                                >Login</button>
                            </div>
                            <div className='signin'>
                                <button type="button" className="btn btn-outline-info" style={{ width: 70, margin: 20 }}>Sign in</button>
                            </div>
                        </div>
                    </div>
                </div >
                {this.props.isShowBanner === true &&
                    <div className='home-header-banner'>
                        <Slider {...this.props.settings}>

                        </Slider>

                        <div className='home-search'>
                            <i classname="far fa-search"></i>
                            <input type="text" placeholder='Tìm chuyên khoa khám bệnh' />
                        </div>
                        <div className='home-options'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i classname="far fa-hospital"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="home-options.Specialist Examination" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i classname="fas fa-mobile-alt"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="home-options.Telemedicine" />

                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i classname="fas fa-stethoscope"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="home-options.General Examination" />

                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i classname="fas fa-vials"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="home-options.Medical Tests" />
                                </div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i classname="fas fa-notes-medical"></i>
                                </div>
                                <div className='text-child'>
                                    <FormattedMessage id="home-options.Dental Examination" />
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        ChangeLanguageAppRedux: (language) => dispatch(ChangeLanguageApp(language))
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
