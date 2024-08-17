import React, { Component } from 'react';
import { connect } from 'react-redux';

import { FormattedMessage } from 'react-intl';


import './Session.scss'



class Handbook extends Component {


    render() {

        return (
            <>
                <div className='session-about'>
                    <div className='session-about-left'>

                        <div className='session-about-header'>
                            Tìm hiểu thêm về chúng tôi
                        </div>
                        <div className='session-about-video'>
                            <iframe width="700px" height="400" src="https://www.youtube.com/embed/gylEJuzv1Sw"
                                title=""
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

                            </iframe>
                        </div>
                    </div>
                    <div className='session-about-right'></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
