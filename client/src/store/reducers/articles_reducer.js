import {
    GET_ARTICLE,
    GET_ARTICLES,
    CLEAR_CURRENT_ARTICLE,
    ADD_ARTICLE,
    UPDATE_ARTICLE_STATUS,
    GET_ADMIN_ARTICLES,
    GET_CATEGORIES,
    ADD_CATEGORY,
    NAV_SEARCH
} from '../types';

export default function articleReducer(state={},action){
    switch(action.type){
        case ADD_ARTICLE:
            return {...state, lastAdded: action.payload, success:true }
        case GET_ARTICLES:
            return {...state, articles: action.payload}
        case GET_ARTICLE:
            return {...state, current: action.payload}
        case CLEAR_CURRENT_ARTICLE:
            return {...state, current: ''}
        case GET_ADMIN_ARTICLES:
            return {...state, adminArticles: action.payload}
        case UPDATE_ARTICLE_STATUS:
            return {
                ...state,
                adminArticles:{
                    ...state.adminArticles,
                    docs: action.payload
                },
                success: true
            }
        case GET_CATEGORIES:
            return {...state, categories: action.payload}
        case ADD_CATEGORY:
            return {...state, categories: action.payload}
        case NAV_SEARCH:
            return { ...state, navsearch: action.payload}
        default:
            return state
    }
}