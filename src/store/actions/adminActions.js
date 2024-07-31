import actionTypes from './actionTypes';
import { getAllCodeService } from '../../services/userService';
import { dateFilter } from 'react-bootstrap-table2-filter';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {

        try {
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
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL
})

