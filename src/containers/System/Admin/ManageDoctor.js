import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions'
import 'react-toastify/dist/ReactToastify.css';
// import './ManageDoctor.scss'

import 'react-image-lightbox/style.css';
import './manageDoctor.scss'
import { ToastContainer, toast } from 'react-toastify';


import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

import Select from 'react-select';
import e from 'cors';
import { lang } from 'moment';
import { languages, manageActions } from '../../../utils';
import { getDetailDoctorService } from "../../../services/userService"
import { faKey } from '@fortawesome/free-solid-svg-icons';

const mdParser = new MarkdownIt(/* Markdown-it options */);



class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            selectedDoctor: null,
            description: '',
            listDoctors: [],
            isCreateDetail: false
        }
    }

    async componentDidMount() {
        this.props.fetchDoctor()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.Doctor !== this.props.Doctor) {
            let dataSelect = this.buildDataInputSelect(this.props.Doctor)
            this.setState({
                listDoctors: dataSelect
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataSelect = this.buildDataInputSelect(this.props.Doctor)
            this.setState({
                listDoctors: dataSelect
            })
        }
    }

    handleOnclickSubmitDoctor = () => {
        let { isCreateDetail } = this.state
        this.props.saveInfoDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedDoctor.value,
            action: isCreateDetail === false ? manageActions.ADD : manageActions.EDIT
        })
        this.setState({
            contentMarkdown: '',
            contentHTML: '',
            selectedDoctor: null,
            description: '',
        })
        isCreateDetail === false ?
            toast.success('🦄 Create detail User Successfully', {
                // toast.promiss('Loading user', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: "Bounce",
            })
            :
            toast.success('🦄 Update detail User Successfully', {
                // toast.promiss('Loading user', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // transition: "Bounce",
            });

    }
    handleChange = async (selectedDoctor) => {
        this.setState({ selectedDoctor });
        let res = await getDetailDoctorService(selectedDoctor.value)
        console.log("check res get detail infor doctor", res)
        if (res && res.ErrorCode === 0 && res.data && res.data && res.data.Markdown) {
            let data = res.data.Markdown
            console.log("check data markdown", data)
            this.setState({
                contentMarkdown: data.contentMarkdown,
                contentHTML: data.contentHTML,
                description: data.description,
                isCreateDetail: true
            })
        }
        else {
            this.setState({
                contentMarkdown: '',
                contentHTML: '',
                description: '',
                isCreateDetail: false

            })
        }
    };
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html,
        })
    }
    handleOnchangeDescription = (event) => {
        this.setState({
            description: event.target.value
        })
    }
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
    render() {
        let { selectedDoctor, listDoctors, isCreateDetail } = this.state;
        return (
            <>
                <div className='manage-doctor-container'>
                    <div className='manage-doctor-title'>
                        Chinh sua thong tin bac si
                    </div>
                    <div className='more-infor'>

                        <div className='content-left form-group'>
                            <label>Chọn bác sĩ mà bạn muốn bổ sung</label>
                            <Select
                                value={selectedDoctor}
                                onChange={this.handleChange}
                                options={listDoctors}
                            />
                        </div>
                        <div className='content-right form-group'>
                            <label>Thông tin giới thiệu: </label>
                            <textarea className='form-control' rows={4}
                                onChange={(event) => this.handleOnchangeDescription(event)}
                                value={this.state.description}
                            >
                            </textarea>
                        </div>
                    </div>
                    <div className='manage-doctor-editor'>
                        <MdEditor
                            style={{ height: '500px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.contentMarkdown}
                        />
                    </div>
                    <button type="button"

                        class={isCreateDetail === true ? "btn-submit-markdown btn btn-primary" : "btn-submit-markdown btn btn-success "} onClick={() => this.handleOnclickSubmitDoctor()}
                    >
                        {isCreateDetail === false ?
                            <span>Tạo thông tin</span>
                            :
                            <span>Lưu thông tin</span>
                        }
                    </button>
                </div >

            </>
        )
    }
}





const mapStateToProps = state => {
    return {
        language: state.app.language,
        Doctor: state.admin.Doctor,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDoctor: () => dispatch(actions.fetchDoctor()),
        saveInfoDoctor: (data) => dispatch(actions.saveInfoDoctor(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
