import { GET_STATEMENT_LIST, GET_STATEMENT_TYPE, SET_COMPANY_INFO } from './financeType';
import { _statement_list, _statement_type } from './finance_data';

const initialState = {
    statement_list: null,
    statement_type: null,    
    stmt_id : '',
    stmt_type : ''
}

const financeReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_STATEMENT_LIST:
            return { ...state, statement_list: _statement_list }
        case GET_STATEMENT_TYPE:
            return { ...state, statement_type: _statement_type }
        case SET_COMPANY_INFO:
            return {                
                ...state, ...action.payload 
            }
        default:
            return { ...state }
    }

}

export default financeReducer;