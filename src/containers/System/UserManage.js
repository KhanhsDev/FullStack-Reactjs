import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import { emitter } from '../../utils/emitter';
import ModalEditUser from './ModalEditUser';



class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AllUsers: [],
            isOpenModalCreateUser: false,
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact()
    }
    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL')
        if (response && response.ErrorCode === 0) {
            this.setState({

                AllUsers: response.users
            })
        }
    }
    handleCreateNewUser = (user) => {
        this.setState({
            isOpenModalCreateUser: true
        })
    }
    isToggleCreateUser = () => {
        this.setState({
            isOpenModalCreateUser: !this.state.isOpenModalCreateUser
        })
    }
    isOpenEditUser = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            if (response && response.ErrorCode !== 0) {
                alert(response.errorMessage)
            }
            else {
                await this.getAllUsersFromReact()
                this.setState({
                    isOpenModalCreateUser: false
                })
                emitter.emit('EVENT_CLEAR_MODAL_DATA')
            }
        } catch (error) {
            console.log(error)
        }
    }

    EditUser = async (user) => {
        try {
            let res = await editUserService(user)
            if (res && res.ErrorCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
                await this.getAllUsersFromReact()
            }
        } catch (error) {
            console.log(error)
        }
    }
    handleEditUser = (user) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }
    handleDeleteUser = async (user) => {
        try {
            let res = await deleteUserService(user.id);
            if (res && res.ErrorCode === 0) {
                await this.getAllUsersFromReact()
            } else {
                alert(res.errorMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }
    render() {
        let AllUsers = this.state.AllUsers
        return (
            <>
                <div>
                    <ModalUser
                        isOpen={this.state.isOpenModalCreateUser}
                        isToggleCreateUser={this.isToggleCreateUser}
                        createNewUser={this.createNewUser}
                    />
                    {
                        this.state.isOpenModalEditUser &&
                        <ModalEditUser
                            isOpen={this.state.isOpenModalEditUser}
                            isOpenEditUser={this.isOpenEditUser}
                            userEdit={this.state.userEdit}
                            editUser={this.EditUser}
                        />
                    }
                </div>
                <div className='title text-center mt-3 bold blue '>
                    Manage User
                </div>
                <div className='mx-1 '>
                    <button type="button" class="btn btn-primary" style={{ width: 160 }}
                        onClick={(event) => this.handleCreateNewUser(event)}
                    >

                        <i className="fas fa-plus px-2"></i>
                        Add new user
                    </button>
                </div>
                <div className='user-table mt-3 mx-1'>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Gender</th>
                                <th>RoleID</th>
                                <th>Position</th>
                                <th>PhoneNumber</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllUsers && AllUsers.length > 0 && AllUsers.map((item, index) => {
                                return (
                                    <tr key={`user-${index}`}>
                                        <td>{index + 1} </td>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.roleId}</td>
                                        <td>{item.positionId}</td>
                                        <td>{item.phonenumber}</td>
                                        <td>

                                            <a type="button" class="btn btn-warning" style={{ width: 60 }}
                                                onClick={() => this.handleEditUser(item)}
                                            >Edit</a>{'  '}
                                            <a type="button" class="btn btn-danger" style={{ width: 60 }}
                                                onClick={() => this.handleDeleteUser(item)}
                                            >Delete</a>{' '}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
