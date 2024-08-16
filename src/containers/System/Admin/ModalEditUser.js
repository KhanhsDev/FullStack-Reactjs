
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash'
import { ToastContainer, toast } from 'react-toastify';
import Lightbox from 'react-image-lightbox';
import { CommonUtils } from '../../../utils';
import { FormattedMessage } from 'react-intl';
// import './ ModalUpdateUser.scss'
import './ModalEditUser.scss'

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: '',
            roleId: '',
            gender: '',
            positionId: '',
            image: '',
            previewImageUrlUpdate: '',
            isPreviewImageUpdate: false,
        }
    }

    componentDidMount() {
        let user = this.props.userEdit

        // use lodash to check user is empty ( _.isEmpty(user) = false => !_.isEmpty(user) = true)
        if (user && !_.isEmpty(user)) {
            let imageBase64 = '';
            if (user.image) {
                imageBase64 = new Buffer(user.image, 'base64').toString('binary')
            }
            this.setState({
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address,
                phonenumber: user.phonenumber,
                roleId: user.roleId,
                gender: user.gender,
                positionId: user.positionId,
                // image: imageBase64,
                previewImageUrlUpdate: imageBase64
            })
        }
    }

    toggle = () => {
        this.props.isOpenEditUser()
    }
    handleOnChangeFileUpdate = async (event) => {
        let data = event.target.files
        let file = data[0]
        if (file) {
            let base64Update = await CommonUtils.getBase64(file)
            let ObjectUrlUpdate = URL.createObjectURL(file)
            this.setState({
                previewImageUrlUpdate: ObjectUrlUpdate,
                image: base64Update
            })
        }
    }
    handleOnclickPreviewImageUpdate = () => {
        if (!this.state.previewImageUrlUpdate) {
            return
        }
        this.setState({
            isPreviewImageUpdate: true
        })
    }
    handleOnchangeUserinfor = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState,

        })
    }

    ValidateUserInforEdit = () => {
        let Isvalid = true
        let arrInput = ['firstName', 'lastName', 'address', 'phonenumber', 'roleId', 'gender']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                Isvalid = false
                alert("Missing input paremeter : " + arrInput[i])
                break;
            }
        }
        return Isvalid
    }
    handleSaveUser = () => {
        let Isvalid = this.ValidateUserInforEdit()
        if (Isvalid) {
            this.props.editUser(this.state)
        }
        this.toggle()
        toast.info('🦄 Edit User Successfully', {
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
    render() {
        let isPreviewImageUpdate = this.state.isPreviewImageUpdate;

        return (
            <>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    size='lg'
                    centered
                    className='modal-user-container-update z-3'
                >
                    <ModalHeader>Edit User</ModalHeader>
                    <ModalBody>
                        <div className='container '>
                            {/* <!-- first name + last name --> */}
                            <div class="row col-12 justify-content-center">

                                <div class="mb-6 col-5">
                                    <label for="firstName" class="form-label">FirstName</label>
                                    <input type="text" class="form-control" name="firstName" required
                                        onChange={(event) => this.handleOnchangeUserinfor(event, "firstName")}
                                        value={this.state.firstName}
                                    />
                                </div>

                                <div class="mb-6 col-5">
                                    <label for="lastName" class="form-label">Lastname</label>
                                    <input type="text" class="form-control" name="lastName" required
                                        onChange={(event) => this.handleOnchangeUserinfor(event, "lastName")}
                                        value={this.state.lastName}
                                    />
                                </div>

                            </div>
                            {/* <!-- address + phone number --> */}
                            <div class="row col-12 mb-6 justify-content-center">

                                <div class="mb-6 col-10">
                                    <label for="address" class="form-label">Address</label>
                                    <input type="text" class="form-control" name="address" required
                                        onChange={(event) => this.handleOnchangeUserinfor(event, "address")}
                                        value={this.state.address}
                                    />

                                </div>
                            </div>

                            {/* <!-- positionID + image --> */}
                            <div class="row col-12 mb-6 justify-content-center">

                                <div class="mb-6 col-4">
                                    <label for="phonenumber" class="form-label">PhoneNumber</label>
                                    <input type="tel" class="form-control" name="phonenumber" required
                                        onChange={(event) => this.handleOnchangeUserinfor(event, "phonenumber")}
                                        value={this.state.phonenumber}
                                    />
                                </div>

                                <div class="mb-6 col-2">
                                    <label for="InputpositionID" class="form-label">roleID </label>
                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="roleId"
                                        onChange={(event) => this.handleOnchangeUserinfor(event, "roleId")}
                                        value={this.state.roleId}
                                    >

                                        <option>Choose 1 </option>
                                        <option value="R1">Admin </option>
                                        <option value="R2">Doctor</option>
                                        <option value="R3">Patient</option>
                                    </select>

                                </div>
                                <div class="mb-6 col-2">
                                    <label for="InputpositionID" class="form-label">Gender </label>
                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="gender"
                                        onChange={(event) => this.handleOnchangeUserinfor(event, "gender")}
                                        value={this.state.gender}
                                    >
                                        <option>Choose 1</option>
                                        <option value="M">Male </option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                    </select>
                                </div>
                                <div class="mb-6 col-2">
                                    <label for="InputpositionID" class="form-label">Position </label>
                                    <select class="form-select form-select-sm" aria-label=".form-select-sm example" name="positionId"
                                        onChange={(event) => this.handleOnchangeUserinfor(event, "positionId")}
                                        value={this.state.positionId}
                                    >
                                        <option>Choose 1 </option>
                                        <option value="P0">Physician </option>
                                        <option value="P1">Master</option>
                                        <option value="P3">Doctor</option>
                                        <option value="P3">Associate Professor</option>
                                        <option value="P4">Professor</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row col-12 mt-3 justify-content-center">
                                <label htmlFor="inputImage" className="form-label">
                                    <FormattedMessage id='manage-user.image' />

                                </label>
                                <div className='uploadImage-container-update'>
                                    <input id='UpLoadImageupdate' type='file' hidden
                                        onChange={(event) => this.handleOnChangeFileUpdate(event)}
                                    />
                                    <label className='inputUploadImageupdate' htmlFor='UpLoadImageupdate'>Tai anh
                                        <i class="fas fa-upload"></i>
                                    </label>
                                    <div className='preview-image-update'
                                        style={{
                                            backgroundImage: `url(${this.state.previewImageUrlUpdate})`
                                        }}
                                        onClick={() => this.handleOnclickPreviewImageUpdate()}
                                    >
                                        {isPreviewImageUpdate && (
                                            <>

                                                <Lightbox
                                                    mainSrc={this.state.previewImageUrlUpdate}
                                                    onCloseRequest={() => this.setState({ isPreviewImageUpdate: false })}
                                                />
                                            </>

                                        )}
                                    </div>

                                </div>
                            </div>

                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => { this.handleSaveUser() }} style={{ width: 130 }}>
                            Save Change
                        </Button>{' '}
                        <Button color="danger" onClick={() => { this.toggle() }} style={{ width: 60 }}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal >
            </>
        )

    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);

