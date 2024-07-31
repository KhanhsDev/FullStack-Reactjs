import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { languages } from '../../../utils/constant';
import * as actions from '../../../store/actions'

class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            roleIDArr: [],
            positionArr: [],
        }
    }

    async componentDidMount() {

        //USE Redux
        // cach 1
        this.props.fetchGenderStart()

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
    }
    render() {

        // use genderArr state
        // let genders = this.state.genderArr;

        // user props gender from redux (adminReducer)  
        let genders = this.props.gender;
        let language = this.props.language;
        let roleID = this.state.roleIDArr;
        let position = this.state.positionArr;

        console.log("check gender from redux props", genders)
        return (
            <>
                <div className='title mt-5'>
                    <FormattedMessage id='manage-user.add' />
                </div>
                <div className='container mt-3' style={{ width: 800 }}>
                    <form className="row g-3">
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
                            <label htmlFor="inputCity" className="form-label">
                                <FormattedMessage id='manage-user.phonenumber' />

                            </label>
                            <input type="text" className="form-control" id="inputCity" placeholder='Your phonenumber' />
                        </div>
                        <div className="col-md-3">
                            <label htmlFor="inputState" className="form-label">
                                <FormattedMessage id='manage-user.gender' />
                            </label>
                            <select id="inputState" className="form-select">
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
                            <label htmlFor="inputState" className="form-label">
                                <FormattedMessage id='manage-user.roleID' />
                            </label>
                            <select id="inputState" className="form-select">
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
                            <label htmlFor="inputState" className="form-label">
                                <FormattedMessage id='manage-user.position' />
                            </label>
                            <select id="inputState" className="form-select">
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
                            <input type="text" className="form-control" id="inputImage" />
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
        gender: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {

    return {
        fetchGenderStart: () => dispatch(actions.fetchGenderStart()),
        processLogout: () => dispatch(actions.processLogout()),
        // ChangeLanguageAppRedux: (language) => dispatch(ChangeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
