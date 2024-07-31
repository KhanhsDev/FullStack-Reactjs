import { act } from 'react';
import actionTypes from '../actions/actionTypes';

const initialState = {
    genders: [],
    roles: [],
    position: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log("fetch Gender User Start", action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let stateAction = { ...state }
            stateAction.genders = action.data
            console.log("fetch Gender User Success", stateAction.genders)
            return {
                ...stateAction,
            }
        case actionTypes.FETCH_GENDER_FAIL:
            console.log("fetch Gender User Fail", action)

            return {
                ...state,

            }

        default:
            return state;
    }
}

export default adminReducer;