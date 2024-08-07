
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalUser.scss'
import e from 'cors';
import { emitter } from "../../utils/emitter"
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: '',
            roleId: '',
            gender: '',
            positionId: '',
        }
        this.listenToEmitter();
    }
    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phonenumber: '',
                roleId: '',
                gender: '',
                positionId: '',
            })
        })
    }
    componentDidMount() {
    }

    toggle = () => {
        this.props.isToggleCreateUser()
    }

    handleOnchangeUserinfor = (event, id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value
        console.log(copyState[id])
        this.setState({
            ...copyState,

        })
    }

    ValidateUserInfor = () => {
        let Isvalid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phonenumber', 'roleId', 'gender']
        for (let i = 0; i < arrInput.length; i++) {
            if (!this.state[arrInput[i]]) {
                Isvalid = false
                alert("Missing input paremeter : " + arrInput[i])
                break;
            }
        }
        return Isvalid
    }
    handleCreateNewUser = () => {
        let Isvalid = this.ValidateUserInfor()

        if (Isvalid) {
            this.props.createNewUser(this.state)
        }
    }
    render() {
        return (
            <>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    size='lg'
                    centered
                    className='modal-user-container'
                >
                    <ModalHeader>Create New User</ModalHeader>
                    <ModalBody>
                        <div className='container '>
                            {/* <!-- email + password --> */}
                            <div class="row col-12  justify-content-center">
                                <div class="mb-6 col-5">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="email" class="form-control" name="email" aria-describedby="emailHelp" required
                                        onChange={(event) => this.handleOnchangeUserinfor(event, "email")}
                                        value={this.state.email}
                                    />
                                    <div name="emailHelp" class="form-text mb-4">We'll never share your email with anyone else.</div>
                                </div>

                                <div class="mb-6 col-5">
                                    <label for="password" class="form-label">Password</label>
                                    <input type="password" class="form-control" name="password" required
                                        onChange={(event) => this.handleOnchangeUserinfor(event, "password")}
                                        value={this.state.password}
                                    />
                                </div>
                            </div>
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

                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => { this.handleCreateNewUser() }} style={{ width: 60 }}>
                            Create
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

