import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';
import { dateFilter } from 'react-bootstrap-table2-filter';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

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
            console.log("fetch gender fail :", error)
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
            console.log("fetch position fail :", error)
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
            console.log("fetch role fail :", error)
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

