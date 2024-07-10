import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';


import './Homefooter.scss'



class Homefooter extends Component {


    render() {

        return (
            <>
                <div className='homefooter-container'>
                    <div className='homefooter-about-text'>
                        Copyright By &copy; KhanhDev
                    </div>
                    <div className='homefooter-about-icon'>
                        <a target='_blank' href="https://www.facebook.com/vankhanh2k4">
                            <i class="fab fa-facebook"></i>
                        </a>
                        <a target='_blank' href="https://github.com/KhanhsDev">
                            <i class="fab fa-github"></i>
                        </a>
                        <a target='_blank' href='https://m.me/vankhanh2k4?hash=AbZk4DxVblFdk8cY&source=qr_link_share'>
                            <i class="fab fa-facebook-messenger"></i>
                        </a>

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

export default connect(mapStateToProps, mapDispatchToProps)(Homefooter);
