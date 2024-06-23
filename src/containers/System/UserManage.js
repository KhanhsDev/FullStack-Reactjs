import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { getAllUsers, createNewUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import { times } from 'lodash';
import { dateFilter } from 'react-bootstrap-table2-filter';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AllUsers: [],
            isOpenModalCreateUser: false

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
        console.log("Get all users from node.js", response)
    }
    handleCreateNewUser = (user) => {
        this.setState({
            isOpenModalCreateUser: true
        })
    }
    isToggle = () => {
        this.setState({
            isOpenModalCreateUser: !this.state.isOpenModalCreateUser
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data)
            if (response && response.ErrorCode !== 0) {
                alert(response.errorMessage)
            }
            else {
                this.getAllUsersFromReact()
                this.setState({
                    isOpenModalCreateUser: false
                })
            }
            console.log("check responce create new user ", response)
        } catch (error) {
            console.log(error)
        }

        console.log("check data from modal create new user :", data)
    }
    render() {
        let AllUsers = this.state.AllUsers
        return (
            <>
                <div>
                    <ModalUser
                        isOpen={this.state.isOpenModalCreateUser}
                        isToggle={this.isToggle}
                        createNewUser={this.createNewUser}
                    />
                </div>
                <div className='tile text-center mt-3 bold blue '>
                    Manage User
                </div>
                <div className='mx-1 '>
                    <button type="button" class="btn btn-primary" style={{ width: 130 }}
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
                                        <td>{item.phonenumber}</td>
                                        <td>

                                            <a type="button" class="btn btn-warning" style={{ width: 60 }}
                                            >Edit</a>{'  '}
                                            <a type="button" class="btn btn-danger" style={{ width: 60 }}
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
