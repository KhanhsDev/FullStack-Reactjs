import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import { languages } from '../../utils';
import { ChangeLanguageApp } from '../../store/actions';
import { FormattedMessage } from 'react-intl';
import HomeHeader from '../HomePage/HomeHeader';

class Header extends Component {
    handleChangeLanguage = (language) => {
        this.props.ChangeLanguageAppRedux(language)
    }
    render() {
        const { processLogout, language, userInfo } = this.props;
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                {/* nút logout */}
                <div className='left-header'>
                    <div className='flag'>
                        <span className='welcome'><FormattedMessage id="homeheader.welcome" />, {userInfo && userInfo.firstName && userInfo.lastName ? userInfo.firstName + " " + userInfo.lastName : ''} </span>
                        <div className={language === languages.VI ? 'language-vi active' : 'language-vi'}>
                            <span className='flag-language-vi'
                                onClick={() => this.handleChangeLanguage(languages.VI)}>
                            </span>
                        </div>
                        <div className={language === languages.EN ? 'language-en active' : 'language-en'}>
                            <span className='flag-language-en'
                                onClick={() => this.handleChangeLanguage(languages.EN)}>
                            </span>
                        </div>
                        <div className="btn btn-logout" onClick={processLogout}>
                            <i className="fas fa-sign-out-alt"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        ChangeLanguageAppRedux: (language) => dispatch(ChangeLanguageApp(language))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
