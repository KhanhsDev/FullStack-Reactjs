import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import * as actions from '../../../store/actions'

import { ToastContainer, toast } from 'react-toastify';
import { FormattedMessage } from 'react-intl';

import 'react-toastify/dist/ReactToastify.css';
// import './DisplayUserRedux.scss'

import ModalEditUser from './ModalEditUser';
import 'react-image-lightbox/style.css';
import { act } from 'react';

import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}

class DisplayUserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AllUsers: [],
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

    async componentDidMount() {
        this.props.getAllUser()
        toast.success('🦄 Display User Successfully', {
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.AllUser !== this.props.AllUser) {
            this.setState({
                AllUsers: this.props.AllUser
            })
        }
    }

    handleDeleteUser = (user) => {
        this.props.deleteUser(user.id)
        toast.error('🦄 Delete User Successfully', {
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

    handleEditUser = (data) => {
        this.setState({
            isOpenModalEditUser: true,
            userEdit: data
        })
        this.props.editUser(data.id)
    }


    isOpenEditUser = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser
        })
    }

    render() {
        let AllUsers = this.state.AllUsers
        return (
            <>
                <div className='title mt-5'>
                    <FormattedMessage id='manage-user.display' />
                </div>
                {
                    this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        isOpenEditUser={this.isOpenEditUser}
                        userEdit={this.state.userEdit}
                        editUser={this.props.editUser}
                        className='z-1'
                    />
                }
                <div className='mt-5 container' style={{ marginBottom: 50 }}>
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
                                        <td style={{ width: 150 }}>
                                            <a type="button" class="btn btn-warning" style={{ width: 60 }}
                                                onClick={() => this.handleEditUser(item)}
                                            >Edit</a>{'  '}
                                            <a type="button" class="btn btn-danger" style={{ width: 60 }}
                                                onClick={() => this.handleDeleteUser(item)}
                                            >Delete</a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div >

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
        deleteUser: (user) => dispatch(actions.deleteUser(user)),
        editUser: (data) => dispatch(actions.editUser(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayUserRedux);
