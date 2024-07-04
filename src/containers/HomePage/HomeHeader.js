import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
class HomeHeader extends Component {

    render() {

        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='logo-header'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo-image'> </div>
                        </div>
                        <div className='content-header'>
                            <div className='child-content-header'>
                                <div><b>Chuyên khoa</b></div>
                                <div className='header-subs-title'>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='child-content-header'>
                                <div><b>Cơ sở y tế</b></div>
                                <div className='header-subs-title'>Chọn bệnh viện theo phòng khám</div>
                            </div>
                            <div className='child-content-header'>
                                <div><b>Bác sĩ</b></div>
                                <div className='header-subs-title'> Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='child-content-header'>
                                <div><b>Gói Khám</b></div>
                                <div className='header-subs-title'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='header-support'>
                            <div className='support'>
                                <i className="fas fa-question-circle"></i>Hỗ Trợ</div>
                            <div className='flag'>VN</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
