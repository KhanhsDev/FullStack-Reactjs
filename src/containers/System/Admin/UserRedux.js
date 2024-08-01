import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { languages } from '../../../utils/constant';
import * as actions from '../../../store/actions'
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleIDArr: [],
            positionArr: [],
            previewImageUrl: '',
            isPreviewImage: false,
        }
    }

    async componentDidMount() {

        //USE Redux
        // cach 1
        this.props.fetchGenderStart();
        this.props.fetchPositionStart();
        this.props.fetchRoleStart()

        // cach 2
        // this.props.dispatch(actions.fetchGenderStart())


        // fetch API react

        // try {
        //     let gender = await getAllCodeService('gender')
        //     let roleid = await getAllCodeService('role')
        //     let position = await getAllCodeService('position')
        //     if (gender && gender.ErrorCode === 0) {
        //         this.setState({
        //             genderArr: gender.data,
        //         })
        //     }
        //     if (roleid && roleid.ErrorCode === 0) {
        //         this.setState({
        //             roleIDArr: roleid.data,
        //         })
        //     }
        //     if (position && position.ErrorCode === 0) {
        //         this.setState({
        //             positionArr: position.data,
        //         })
        //     }
        // } catch (error) {
        //     console.log(error)
        // }

    }


    // use genderArr state to load data gender
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.gender !== this.props.gender) {
            this.setState({
                genderArr: this.props.gender
            })
        }
        if (prevProps.position !== this.props.position) {
            this.setState({
                positionArr: this.props.position
            })
        }
        if (prevProps.role !== this.props.role) {
            this.setState({
                roleIDArr: this.props.role
            })
        }
    }

    handleOnChangeFile = (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {

            let ObjectUrl = URL.createObjectURL(file)
            this.setState({
                previewImageUrl: ObjectUrl
            })
        }
    }
    handleOnclickPreviewImage = () => {
        if (!this.state.previewImageUrl) {
            return
        }
        this.setState({
            isPreviewImage: true
        })
    }
    render() {

        // use genderArr state
        // let genders = this.state.genderArr;

        // user props gender from redux (adminReducer)  
        let genders = this.props.gender;
        let position = this.props.position;
        let roleID = this.props.role;

        let isLoadingGender = this.props.isLoadingGender;
        let isLoadingPosition = this.props.isLoadingPosition;
        let isLoadingRole = this.props.isLoadingRole;

        let isPreviewImage = this.state.isPreviewImage;
        let language = this.props.language;

        console.log("check gender from redux props", genders)
        return (
            <>
                <div className='title mt-5'>
                    <FormattedMessage id='manage-user.add' />
                </div>

                <div className='container mt-3' style={{ width: 800 }}>
                    <form className="row g-3">
                        <div >
                            {/* use setTimeOut */}
                            {isLoadingGender && isLoadingPosition && isLoadingRole === true ? "Loading data gender" : ""}
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                                <FormattedMessage id='manage-user.email' />
                            </label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder='We will never share your email with anyone else.' />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">
                                <FormattedMessage id='manage-user.password' />
                            </label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputFirstName" className="form-label">
                                <FormattedMessage id='manage-user.first name' />
                            </label>
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastName" className="form-label">
                                <FormattedMessage id='manage-user.last name' />
                            </label>
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputAddress" className="form-label">
                                <FormattedMessage id='manage-user.address' />

                            </label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Your Address" />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputPhonenumber" className="form-label">
                                <FormattedMessage id='manage-user.phonenumber' />

                            </label>
                            <input type="text" className="form-control" id="inputPhonenumber" placeholder='Your phonenumber' />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputGender" className="form-label">
                                <FormattedMessage id='manage-user.gender' />
                            </label>
                            <select id="inputGender" className="form-select">
                                <option selected>Choose a option</option>
                                {genders && genders.length > 0 && genders.map((item, index) => {
                                    return (
                                        <option key={index}>
                                            {language === languages.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    )
                                })
                                }
                            </select>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputRole" className="form-label">
                                <FormattedMessage id='manage-user.roleID' />
                            </label>
                            <select id="inputRole" className="form-select">
                                <option selected>Choose a option</option>
                                {roleID && roleID.length > 0 && roleID.map((item, index) => {
                                    return (
                                        <option key={index}>
                                            {language === languages.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    )
                                })
                                }
                            </select>
                        </div>

                        <div className="col-md-3">
                            <label htmlFor="inputPosition" className="form-label">
                                <FormattedMessage id='manage-user.position' />
                            </label>
                            <select id="inputPosition" className="form-select">
                                <option selected>Choose a option</option>
                                {position && position.length > 0 && position.map((item, index) => {
                                    return (
                                        <option key={index}>
                                            {language === languages.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    )
                                })
                                }
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputImage" className="form-label">
                                <FormattedMessage id='manage-user.image' />

                            </label>
                            <div className='uploadImage-container'>
                                <input id='UpLoadImage' type='file' hidden
                                    onChange={(event) => this.handleOnChangeFile(event)}
                                />
                                <label className='inputUploadImage' htmlFor='UpLoadImage'>Tai anh
                                    <i class="fas fa-upload"></i>
                                </label>
                                <div className='preview-iamge'
                                    style={{
                                        backgroundImage: `url(${this.state.previewImageUrl})`
                                    }}
                                    onClick={() => this.handleOnclickPreviewImage()}
                                >
                                    {isPreviewImage && (
                                        <Lightbox
                                            mainSrc={this.state.previewImageUrl}
                                            onCloseRequest={() => this.setState({ isPreviewImage: false })}
                                        />
                                    )}
                                </div>

                            </div>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary mt-3" style={{ width: 80 }}>
                                <FormattedMessage id='manage-user.submit' />

                            </button>
                        </div>
                    </form>
                </div>

            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        gender: state.admin.genders,
        position: state.admin.positions,
        role: state.admin.roles,

        isLoadingGender: state.admin.isLoadingGender,
        isLoadingPosition: state.admin.isLoadingPosition,
        isLoadingRole: state.admin.isLoadingRole,

    };
};

const mapDispatchToProps = dispatch => {

    return {
        fetchGenderStart: () => dispatch(actions.fetchGenderStart()),
        fetchPositionStart: () => dispatch(actions.fetchPositionStart()),
        fetchRoleStart: () => dispatch(actions.fetchRoleStart()),
        processLogout: () => dispatch(actions.processLogout()),


        // ChangeLanguageAppRedux: (language) => dispatch(ChangeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
