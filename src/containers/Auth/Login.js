import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

import * as actions from "../../store/actions";

import './Login.scss'

import { handleLogin } from "../../services/userService"

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowhidePassWord: false,
            errMessage: '',
        }
    }
    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleShowHidePassword = () => {
        this.setState({
            isShowhidePassWord: !this.state.isShowhidePassWord
        })
    }

    handleOnclinkLogin = async () => {
        this.setState({
            errMessage: ""
        })
        try {
            let data = await handleLogin(this.state.username, this.state.password)
            if (data && data.ErrorCode !== 0) {
                this.setState({
                    errMessage: data.Message
                })
            }
            if (data && data.ErrorCode === 0) {
                this.props.userLoginSuccess(data.user)
            }
        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.Message
                    })
                }
            }

        }
    }
    // on press enter key
    handleOnPressEnterKey = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13) {
            this.handleOnclinkLogin()
        }
    }
    render() {

        return (
            <>
                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12 text-center text-login'> Login</div>
                            <div className='col-12 form-group login-input'>
                                <label >User Name </label>
                                <input type='text'
                                    className='form-control  '
                                    placeholder='Enter Your Email '
                                    value={this.state.username}
                                    onChange={(event) => this.handleOnChangeUsername(event)}
                                />
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label >Password </label>
                                <div className='custom-input-password'>
                                    <input type={this.state.isShowhidePassWord ? 'text' : 'password'}
                                        className='form-control '
                                        placeholder='Enter Your Password'
                                        value={this.state.password}
                                        onChange={(event) => this.handleOnChangePassword(event)}
                                        onKeyDown={(event) => this.handleOnPressEnterKey(event)}
                                    />
                                    <span
                                        onClick={() => this.handleShowHidePassword()}
                                    >
                                        <i class={this.state.isShowhidePassWord ? "fas fa-eye-slash" : " fas fa-eye"}></i>
                                    </span>
                                </div>
                            </div>
                            <div className='col-12' style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            <div className='col-12'>
                                <button className='btn-login'
                                    onClick={() => this.handleOnclinkLogin()}
                                >Login</button>
                            </div>
                            <div className='col-12'>
                                <span className='forgot-password'>Forgot Your Password?</span>
                            </div>
                            <div className='col-12 text-center'>
                                <span className=''>Or Login wtih :</span>
                            </div>
                            <div className='col-12 social-login'>
                                <i class="fab fa-google-plus-g google"></i>
                                <i class="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>
                    </div>
                </div >

            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adm    inLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
