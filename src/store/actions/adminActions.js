import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserService,
    getAllUsers, deleteUserService, editUserService,
    getAllDoctorService, saveDetailDoctorServices,
} from '../../services/userService';
import { dateFilter } from 'react-bootstrap-table2-filter';
import { ToastContainer, toast } from 'react-toastify';
import { legacy_createStore } from 'redux';


export const fetchGenderStart = () => {
    return async (dispatch, getState) => {

        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER")
            if (res && res.data) {
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFail())
            }
        } catch (error) {
            dispatch(fetchGenderFail())
        }
    }
}

export const fetchGenderSuccess = (genderData) => ({
    // toan bo se nam trong action => chuyen sang cho reducers
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})


// Get POSITION
export const fetchPositionStart = () => {
    return async (dispatch, getState) => {

        try {
            dispatch({
                type: actionTypes.FETCH_POSITION_START
            })
            let res = await getAllCodeService("POSITION")
            if (res && res.data) {
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFail())
            }
        } catch (error) {
            dispatch((fetchPositionFail()))
        }
    }
}

export const fetchPositionSuccess = (positionData) => ({
    // toan bo se nam trong action => chuyen sang cho reducers
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFail = () => ({
    type: actionTypes.FETCH_POSITION_FAIL
})

// Get ROLE
export const fetchRoleStart = () => {
    return async (dispatch, getState) => {

        try {
            dispatch({
                type: actionTypes.FETCH_ROLE_START
            })
            let res = await getAllCodeService("ROLE")
            if (res && res.data) {
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFail())
            }
        } catch (error) {
            dispatch(fetchRoleFail())
        }
    }
}

export const fetchRoleSuccess = (roleData) => ({
    // toan bo se nam trong action => chuyen sang cho reducers
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFail = () => ({
    type: actionTypes.FETCH_ROLE_FAIL
})


export const createNewUser = (data) => {
    return async (dispatch, getState) => {

        try {

            let res = await createNewUserService(data)
            if (res && res.data) {
                dispatch(createUserSuccess())

            } else {
                dispatch(createUserFail())
            }
            dispatch(getAllUser())
        } catch (error) {
            dispatch(createUserFail())
        }
    }
}


export const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const createUserFail = () => ({
    type: actionTypes.CREATE_USER_FAIL
})

export const getAllUser = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("ALL")
            if (res && res.users) {
                dispatch(getAllUserSuccess(res.users.reverse()))
            } else {
                dispatch(getAllUserFail())
            }
        } catch (error) {
            dispatch(getAllUserFail())
        }
    }
}
export const getAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_USER_SUCCESS,
    data: data
})
export const getAllUserFail = () => ({
    type: actionTypes.FETCH_USER_FAIL
})

export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {

            let res = await deleteUserService(userId)
            if (res && res.ErrorCode === 0) {
                dispatch(deleteUserSuccess())
            } else {
                dispatch(deleteUserFail())
            }
            dispatch(getAllUser())
        } catch (error) {
            dispatch(deleteUserFail())
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})
export const deleteUserFail = () => ({
    type: actionTypes.DELETE_USER_FAIL
})
export const editUser = (userId) => {
    return async (dispatch, getState) => {
        try {

            let res = await editUserService(userId)
            if (res && res.ErrorCode === 0) {
                dispatch(editUserSuccess())
            } else {
                dispatch(editUserFail())
            }
            dispatch(getAllUser())
        } catch (error) {
            dispatch(editUserFail())
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})
export const editUserFail = () => ({
    type: actionTypes.EDIT_USER_FAIL
})

export const fetchDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctorService("R2")
            if (res && res.ErrorCode === 0) {
                dispatch(fetchDoctorSuccess(res.data))
            } else {
                dispatch(fetchDoctorFail())
            }
        } catch (error) {
            dispatch(fetchDoctorFail())

        }
    }
}
export const fetchDoctorSuccess = (doctorData) => ({
    type: actionTypes.FETCH_DOCTOR_SUCCESS,
    data: doctorData
})
export const fetchDoctorFail = () => ({
    type: actionTypes.FETCH_DOCTOR_FAIL
})
export const saveInfoDoctor = (data) => {
    return async (dispatch, getState) => {

        try {

            let res = await saveDetailDoctorServices(data)
            if (res && res.data) {
                dispatch({
                    type: actionTypes.SAVE_INFOR_DOCTOR_SUCCESS
                })

            } dispatch({
                type: actionTypes.SAVE_INFOR_DOCTOR_FAIL
            })
            dispatch(getAllUser())
        } catch (error) {
            dispatch({
                type: actionTypes.SAVE_INFOR_DOCTOR_FAIL
            })
        }
    }
}

export const fetchScheduleHour = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME")
            if (res && res.ErrorCode === 0) {
                dispatch(fetchScheduleHourSuccess(res.data))
            } else {
                dispatch(fetchScheduleHourrFail())
            }
        } catch (error) {
            dispatch(fetchDoctorFail())

        }
    }
}
export const fetchScheduleHourSuccess = (scheduleTime) => ({
    type: actionTypes.FETCH_ALLCODE_HOUR_SUCCESS,
    data: scheduleTime
})
export const fetchScheduleHourrFail = () => ({
    type: actionTypes.FETCH_ALLCODE_HOUR_FAIL
})
