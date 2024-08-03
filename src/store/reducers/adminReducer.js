import { act } from 'react';
import actionTypes from '../actions/actionTypes';
import { faL, faLeaf } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    isLoadingGender: false,
    isLoadingPosition: false,
    isLoadingRole: false,
    isLoadingUsers: false,
    genders: [],
    roles: [],
    positions: [],
    AllUser: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {

        // GENDER
        case actionTypes.FETCH_GENDER_START:
            state.isLoadingGender = true
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false
            return {
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAIL:
            state.isLoadingGender = false;
            state.genders = []
            return {
                ...state,

            }

        // POSITION
        case actionTypes.FETCH_POSITION_START:
            state.isLoadingPosition = true
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            state.isLoadingPosition = false
            return {
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAIL:
            state.isLoadingPosition = false;
            state.positions = []
            return {
                ...state,

            }

        // ROLE
        case actionTypes.FETCH_ROLE_START:
            state.isLoadingRole = true
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            state.isLoadingRole = false
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAIL:
            state.isLoadingRole = false;
            state.roles = []
            return {
                ...state,

            }

        // fetch all users 
        case actionTypes.FETCH_USER_SUCCESS:
            state.isLoadingUsers = false;
            state.AllUser = action.data
            console.log("check data all user from admin actions :", action)
            return {
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAIL:
            state.isLoadingUsers = false;
            state.AllUser = []
            return {
                ...state,
            }

        default:
            return state;
    }
}

export default adminReducer;