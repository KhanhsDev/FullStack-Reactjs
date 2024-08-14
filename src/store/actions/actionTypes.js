const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE_APP: "CHANGE_LANGUAGE_APP",

    //user  
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',


    // Admin

    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAIL: 'FETCH_GENDER_FAIL',

    FETCH_ROLE_START: 'FETCH_ROLE_START',
    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAIL: 'FETCH_ROLE_FAIL',

    FETCH_POSITION_START: 'FETCH_POSITION_START',
    FETCH_POSITION_SUCCESS: 'FETCH_POSITION_SUCCESS',
    FETCH_POSITION_FAIL: 'FETCH_POSITION_FAIL',


    // MANAGE USER REDUX
    CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
    CREATE_USER_FAIL: "CREATE_USER_FAIL",
    FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
    FETCH_USER_FAIL: "FETCH_USER_FAIL",
    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_FAIL: "DELETE_USER_FAIL",
    EDIT_USER_SUCCESS: "EDIT_USER_SUCCESS",
    EDIT_USER_FAIL: "EDIT_USER_FAIL",
    FETCH_DOCTOR_SUCCESS: "FETCH_DOCTOR_SUCCESS",
    FETCH_DOCTOR_FAIL: "FETCH_DOCTOR_FAIL",

    SAVE_INFOR_DOCTOR_SUCCESS: "SAVE_INFOR_DOCTOR_SUCCESS",
    SAVE_INFOR_DOCTOR_FAIL: "SAVE_INFOR_DOCTOR_FAIL"
})

export default actionTypes;