import * as types from './financeType';
import { _statement_list, _statement_type } from './finance_data';

const initialState = {
    statement_list: null,
    statement_type: null,
    stmt_id: '',
    stmt_type: '',
    schema_id: null,
    dataLoading: false,
    dataError: 'Select Statement',
    tableData: null
}

const financeReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.GET_STATEMENT_LIST:
            return { ...state, statement_list: _statement_list }
        case types.GET_STATEMENT_TYPE:
            return { ...state, statement_type: _statement_type }
        case types.SET_COMPANY_INFO:
            return { ...state, ...action.payload }
        case types.FETCH_TABLE_DATA_START:
            return { ...state, dataLoading: true, dataError: null, tableData: null }
        case types.FETCH_TABLE_DATA_SUCCESS:
            return { ...state, dataLoading: false, tableData: action.payload, dataError: null }
        case types.FETCH_TABLE_DATA_ERROR:
            return { ...state, dataLoading: false, tableData: null, dataError: action.payload }

        default:
            return { ...state }
    }

}

export default financeReducer;