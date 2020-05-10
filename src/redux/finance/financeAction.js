import { GET_STATEMENT_LIST } from './financeType';
import { GET_STATEMENT_TYPE } from './financeType';
import { SET_COMPANY_INFO } from './financeType';

export const getStatementList = () => {
    return {
        type: GET_STATEMENT_LIST
    }
}

export const getStatementType = () => {
    return {
        type: GET_STATEMENT_TYPE
    }
}

export const setCompanyInfo = (data) => {
    return {
        type: SET_COMPANY_INFO,
        payload: data
    }
}