import {
    ERROR_GLOBAL,
    SUCCESS_GLOBAL,
    CLEAR_NOTIFICATIONS
} from '../types';

export default function notificationReducer(state = {}, action) {
    switch (action.type) {
        case SUCCESS_GLOBAL:
            return {...state, success: true, msg: action.payload}
        case ERROR_GLOBAL:
            return {...state, error: true, msg:action.payload}
        case CLEAR_NOTIFICATIONS:
            return {}
        default:
            return state
    }
}