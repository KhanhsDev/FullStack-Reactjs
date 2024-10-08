import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    isLoadingPosition: false,
    isLoadingRole: false,
    isLoadingUsers: false,
    isLoadingDoctor: false,
    genders: [],
    roles: [],
    positions: [],
    AllUser: [],
    Doctor: [],
    scheduleHour: []
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
            return {
                ...state,
            }
        case actionTypes.EDIT_USER_FAIL:
            state.isLoadingUsers = false;
            state.AllUser = []
            return {
                ...state,
            }

        // fetch doctor
        case actionTypes.FETCH_DOCTOR_SUCCESS:
            state.isLoadingDoctor = false;
            state.Doctor = action.data.data
            return {
                ...state,
            }
        case actionTypes.FETCH_DOCTOR_FAIL:
            state.isLoadingDoctor = false;
            state.Doctor = []
            return {
                ...state,
            }
        // get allcode schedule hour
        case actionTypes.FETCH_ALLCODE_HOUR_SUCCESS:
            state.scheduleHour = action.data
            console.log("check action data", action.data)
            return {
                ...state,
            }
        case actionTypes.FETCH_ALLCODE_HOUR_FAIL:
            state.scheduleHour = []
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;