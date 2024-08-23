import React, { Component } from 'react';
import { connect } from "react-redux";
import './manageDoctorSchedule.scss'
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import * as actions from '../../../store/actions'
import { languages } from '../../../utils';
// pick real time 
import DatePicker from '../../../components/Input/DatePicker';
// format ngay thang nam
import moment from 'moment';
class ManageDoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDoctor: null,
            listDoctors: [],
            chooseDate: new Date(),
            scheduleTime: []
        }
    }

    // dispath action fetch doctor
    async componentDidMount() {
        this.props.fetchDoctor()
        this.props.fetchScheduleHour()

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.Doctor !== this.props.Doctor) {
            let dataSelect = this.buildDataInputSelect(this.props.Doctor)
            this.setState({
                listDoctors: dataSelect
            })
        }
        if (prevProps.scheduleHour !== this.props.scheduleHour) {
            let scheduleTime = this.buildDataSchedeletime(this.props.scheduleHour)
            this.setState({
                scheduleTime: scheduleTime
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.Doctor)
            let scheduleTime = this.buildDataSchedeletime(this.props.scheduleHour)
            this.setState({
                listDoctors: dataSelect,
                scheduleTime: scheduleTime

            })
        }

    }

    // chỉnh họ tên sao cho phù hợp với ngôn ngữ đang dử dụng
    buildDataInputSelect = (data) => {
        let result = []
        let { language } = this.props;
        if (data && data.length) {
            data.map((item, index) => {
                let Object = {}
                let labelVI = `${item.lastName} ${item.firstName}`
                let labelEN = `${item.firstName} ${item.lastName}`
                Object.label = language === languages.VI ? labelVI : labelEN
                Object.value = item.id
                result.push(Object)
            })
        }
        return result
    }
    // lấy thời gian từ db (action.data)
    buildDataSchedeletime = (data) => {
        let result = []
        let { language } = this.props;
        if (data && data.length) {
            data.map((item, index) => {
                let Object = {}
                let labelVI = `${item.value_vi}`
                let labelEN = `${item.value_en}`
                Object.label = language === languages.VI ? labelVI : labelEN
                Object.value = item.id
                result.push(Object)
            })
        }
        return result
    }
    handleChange = async (selectedDoctor) => {
        this.setState({ selectedDoctor });
    }
    handleChangeDatePicker = (date) => {
        this.setState({
            chooseDate: date[0]
        })
    }
    render() {
        let { selectedDoctor, listDoctors, scheduleTime } = this.state;
        console.log(scheduleTime)
        return (
            <>
                <div className='manage-schedule-container'>
                    <div className='manage-schedule-title'>
                        <FormattedMessage id='manage schedule.manage doctor schedule' />
                    </div>
                    <div className='manage-schedule-content'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label className='mb-3'>
                                        <FormattedMessage id='manage schedule.choose doctor' />
                                    </label>
                                    <Select
                                        value={selectedDoctor}
                                        onChange={this.handleChange}
                                        options={listDoctors}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label className='mb-3'>
                                        <FormattedMessage id='manage schedule.choose date' />
                                    </label>
                                    <DatePicker
                                        onChange={this.handleChangeDatePicker}
                                        className='form-control'
                                        value={this.state.chooseDate}
                                        minDate={new Date()}
                                    />
                                </div>
                                <label className='mt-3'>
                                    <FormattedMessage id='manage schedule.choose time' />
                                </label>
                                <div className='col-12 form-group pick-time-container'>
                                    {scheduleTime && scheduleTime.length > 0 &&
                                        scheduleTime.map((item, index) => {
                                            return (
                                                <div className='schedule-time-doctor' key={index}>
                                                    <button className='btn btn-warning' style={{ width: 170 }} >{item.label}</button>
                                                </div>

                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <button className='btn btn-primary' style={{ marginTop: 30 }}>
                                <FormattedMessage id='manage schedule.Submit' />

                            </button>
                        </div>
                    </div>
                </div >
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        Doctor: state.admin.Doctor,
        language: state.app.language,
        scheduleHour: state.admin.scheduleHour
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDoctor: () => dispatch(actions.fetchDoctor()),
        fetchScheduleHour: () => dispatch(actions.fetchScheduleHour())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctorSchedule);
