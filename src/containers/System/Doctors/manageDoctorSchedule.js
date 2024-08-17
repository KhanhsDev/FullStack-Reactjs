import React, { Component } from 'react';
import { connect } from "react-redux";
class ManageDoctorSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    async componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    render() {

        return (
            <>
                manageDoctorSchedule
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctorSchedule);
