import { act } from 'react';
import actionTypes from '../actions/actionTypes';
import { faL, faLeaf } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    isLoadingGender: false,
    isLoadingPosition: false,
    isLoadingRole: false,
    genders: [],
    roles: [],
    positions: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {

        // GENDER
        case actionTypes.FETCH_GENDER_START:
            state.isLoadingGender = true
            console.log("fetch Gender User Start", action)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false
            console.log("fetch Gender User Success", state.genders)
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAIL:
            console.log("fetch Gender User Fail", action)
            state.isLoadingGender = false;
            state.genders = []
            return {
                ...state,

            }

        // POSITION
        case actionTypes.FETCH_POSITION_START:
            state.isLoadingPosition = true
            console.log("fetch Position User Start", action)
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            state.isLoadingPosition = false
            console.log("fetch Position User Success", state.positions)
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAIL:
            console.log("fetch Position User Fail", action)
            state.isLoadingPosition = false;
            state.positions = []
            return {
                ...state,

            }

        // ROLE
        case actionTypes.FETCH_ROLE_START:
            state.isLoadingRole = true
            console.log("fetch Role User Start", action)
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            state.isLoadingRole = false
            console.log("fetch Role User Success", state.roles)
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAIL:
            console.log("fetch Role User Fail", action)
            state.isLoadingRole = false;
            state.roles = []
            return {
                ...state,

            }

        default:
            return state;
    }
}

export default adminReducer;