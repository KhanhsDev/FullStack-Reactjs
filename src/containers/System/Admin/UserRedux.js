import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { languages } from '../../../utils/constant';
import * as actions from '../../../store/actions'
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { faL } from '@fortawesome/free-solid-svg-icons';

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleIDArr: [],
            positionArr: [],
            previewImageUrl: '',
            isPreviewImage: false,
            // User Information 

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: '',
            gender: '',
            role: '',
            position: '',
            image: '',

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
                previewImageUrl: ObjectUrl,
                image: file
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
    handleOnchangeInput = (event, id) => {
        let copystate = { ...this.state }
        copystate[id] = event.target.value
        this.setState({
            ...copystate
        })
    }
    validateInput = () => {
        let isValid = true
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'address', 'gender', 'phonenumber', 'role', 'position']
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false
                alert("Missing input parameter: " + arrCheck[i])
                break
            }
        }
        return isValid;
    }
    handleOclickCreateUser = () => {
        let isValid = this.validateInput()
        if (isValid === false) {
            return
        }

        // fire actions redux
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phonenumber: this.state.phonenumber,
            roleId: this.state.role,
            position: this.state.position,
            gender: this.state.gender,

        })
    }
    render() {

        // use genderArr state
        // let genders = this.state.genderArr;

        // user props gender from redux (adminReducer)  
        let genders = this.props.gender;
        let positions = this.props.positions;
        let roleID = this.props.role;

        let isLoadingGender = this.props.isLoadingGender;
        let isLoadingPosition = this.props.isLoadingPosition;
        let isLoadingRole = this.props.isLoadingRole;

        let isPreviewImage = this.state.isPreviewImage;
        let language = this.props.language;


        let { email, password, firstName, lastName, address, gender, phonenumber, role, position, image } = this.state;
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
                            <input type="email" className="form-control" id="inputEmail4" placeholder='We will never share your email with anyone else.'
                                value={email}
                                onChange={(event) => { this.handleOnchangeInput(event, 'email') }}
                                required
                            />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">
                                <FormattedMessage id='manage-user.password' />
                            </label>
                            <input type="password" className="form-control" id="inputPassword4"
                                value={password}
                                onChange={(event) => { this.handleOnchangeInput(event, 'password') }} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputFirstName" className="form-label">
                                <FormattedMessage id='manage-user.first name' />
                            </label>
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name"
                                value={firstName}
                                onChange={(event) => { this.handleOnchangeInput(event, 'firstName') }} />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputLastName" className="form-label">
                                <FormattedMessage id='manage-user.last name' />
                            </label>
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"
                                value={lastName}
                                onChange={(event) => { this.handleOnchangeInput(event, 'lastName') }} />
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputAddress" className="form-label">
                                <FormattedMessage id='manage-user.address' />

                            </label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="Your Address"
                                value={address}
                                onChange={(event) => { this.handleOnchangeInput(event, 'address') }} />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputPhonenumber" className="form-label">
                                <FormattedMessage id='manage-user.phonenumber' />

                            </label>
                            <input type="text" className="form-control" id="inputPhonenumber" placeholder='Your phonenumber'
                                value={phonenumber}
                                onChange={(event) => { this.handleOnchangeInput(event, 'phonenumber') }} />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputGender" className="form-label">
                                <FormattedMessage id='manage-user.gender' />
                            </label>
                            <select id="inputGender" className="form-select"
                                onChange={(event) => { this.handleOnchangeInput(event, 'gender') }}
                            >
                                <option selected>Choose a option</option>
                                {genders && genders.length > 0 && genders.map((item, index) => {
                                    return (
                                        <option key={index} value={item.key}>
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
                            <select id="inputRole" className="form-select"
                                onChange={(event) => { this.handleOnchangeInput(event, 'role') }}>
                                <option selected>Choose a option</option>
                                {roleID && roleID.length > 0 && roleID.map((item, index) => {
                                    return (
                                        <option key={index} value={item.key}>
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
                            <select id="inputPosition" className="form-select"
                                onChange={(event) => { this.handleOnchangeInput(event, 'position') }}>
                                <option selected>Choose a option</option>
                                {positions && positions.length > 0 && positions.map((item, index) => {
                                    return (
                                        <option key={index} value={item.key}>
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

                    </form>
                    <div className="col-12">
                        <button className="btn btn-primary mt-3" style={{ width: 80 }}
                            onClick={() => this.handleOclickCreateUser()}
                        >
                            <FormattedMessage id='manage-user.submit' />

                        </button>
                    </div>
                </div>

            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        gender: state.admin.genders,
        positions: state.admin.positions,
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
        createNewUser: (data) => dispatch(actions.createNewUser(data))


        // ChangeLanguageAppRedux: (language) => dispatch(ChangeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
