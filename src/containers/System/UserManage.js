import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AllUsers: []
        }
    }

    async componentDidMount() {
        let response = await getAllUsers('ALL')
        if (response && response.ErrorCode === 0) {
            this.setState({
                AllUsers: response.users
            })
        }
        console.log("Get all users from node.js", response)
    }

    render() {
        let AllUsers = this.state.AllUsers
        return (
            <div className="user-container">

                <div className='user-table'>
                    <Table striped bordered hover className="container">
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

                                            <Button variant="warning"
                                            >Edit</Button>{' '}
                                            <Button variant="danger"
                                            >Delete</Button>{' '}
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
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
