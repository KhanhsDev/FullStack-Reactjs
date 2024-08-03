import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { languages } from '../../../utils/constant';
import * as actions from '../../../store/actions'
// import './DisplayUserRedux.scss'
import { getAllUsers } from '../../../services/userService'

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { faL } from '@fortawesome/free-solid-svg-icons';

class DisplayUserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AllUsers: [],

        }
    }
    async componentDidMount() {
        // await this.getAllUsersFromReact()
        this.props.getAllUser({

        })
    }
    // getAllUsersFromReact = async () => {
    //     let response = await getAllUsers('ALL')
    //     console.log(response)
    //     if (response && response.ErrorCode === 0) {
    //         this.setState({

    //             AllUsers: response.users
    //         })
    //     }
    //     console.log("Get all users from node.js", response)
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.AllUser !== this.props.AllUser) {
            this.setState({
                AllUsers: this.props.AllUser
            })
        }
    }
    render() {
        let AllUsers = this.state.AllUsers
        return (
            <>
                <div className='mt-5'>
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
                                            >Edit</a>{'  '}
                                            <a type="button" class="btn btn-danger" style={{ width: 60 }}
                                            >Delete</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </>
        )
    }
}





const mapStateToProps = state => {
    return {
        AllUser: state.admin.AllUser,

    };
};

const mapDispatchToProps = dispatch => {

    return {
        getAllUser: (data) => dispatch(actions.getAllUser(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayUserRedux);
