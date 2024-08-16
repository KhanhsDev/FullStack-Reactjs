import React, { Component } from 'react';
import { connect } from "react-redux";
import HomeHeader from '../../HomePage/HomeHeader';
import { getDetailDoctorService } from '../../../services/userService'
import { languages } from '../../../utils';
import './DetailDoctor.scss'
class DetailDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DetailDoctor: {}
        }
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id
            let res = await getDetailDoctorService(id)
            if (res && res.ErrorCode === 0) {
                this.setState({
                    DetailDoctor: res.data
                })
            }
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {
        let { language } = this.props
        let DetailDoctor = this.state.DetailDoctor
        let nameEn = '', nameVi = ''
        if (DetailDoctor && DetailDoctor.positionData) {
            nameVi = `${DetailDoctor.positionData.value_vi} ${DetailDoctor.lastName} ${DetailDoctor.firstName}`
            nameEn = `${DetailDoctor.positionData.value_en} ${DetailDoctor.firstName} ${DetailDoctor.lastName}`
        }
        console.log("check ID doctor :", this.props.match.params.id)
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='detail-doctor-container'>
                    <div className='intro-doctor'>
                        <div className='content-left'
                            style={{
                                backgroundImage: `url(${DetailDoctor && DetailDoctor.image ? DetailDoctor.image : ''})`
                            }}
                        >
                        </div>
                        <div className='content-right'>
                            <div className='detail-doctor-title'>
                                <b>
                                    {language === languages.VI ? nameVi : nameEn}
                                </b>
                            </div>
                            <div className='detail-doctor-desc'>
                                {DetailDoctor && DetailDoctor.Markdown && DetailDoctor.Markdown.description
                                    &&
                                    <span>
                                        {DetailDoctor.Markdown.description}
                                    </span>
                                }

                            </div>
                        </div>
                    </div>
                    <div className='Medical-Examination-Schedule'></div>
                    <div className='detail-infor-doctor'></div>
                    <div className='feedback-doctor'></div>
                </div >
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
