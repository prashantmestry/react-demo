import { GET_STATEMENT_LIST } from './financeType';

const list = [
    {
        id: 101,
        name: 'Cash Flow'
    },
    {
        id: 102,
        name: 'Blance Sheet'
    },
    {
        id: 103,
        name: 'Profit & Loss'
    }
]

const initialState = {
    statement_list: []
}

const financeReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_STATEMENT_LIST:            
            return { ...state, statement_list: list };
        default:
            return state
    }

}

export default financeReducer;