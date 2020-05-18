import * as types from './ratioType';

const initialState = {
    ratioDataLoading: false,
    ratioDataError: '',
    ratioData: null
}

const ratioReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.FETCH_RATIO_DATA_START:
            return { ...state, ratioDataLoading: true, ratioDataError: null, ratioData: null }

        case types.FETCH_RATIO_DATA_SUCCESS:
            return { ...state, ratioDataLoading: false, ratioDataError: null, ratioData: action.payload }

        case types.FETCH_RATIO_DATA_ERROR:
            return { ...state, ratioDataLoading: false, ratioDataError: action.payload, ratioData: null }

        default:
            return { ...state }
    }

}

export default ratioReducer;