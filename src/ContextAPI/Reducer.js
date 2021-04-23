export const initialState = {
    canadianApi: [],
    LoadingF: true,
    ApprovedVaccine: [],
    LoadingS: true,
    VaccineNews: [],
}

export const CANADIAN_API = 'CANADIAN_API'
export const RAPID_API = 'RAPID_API'
export const VACCINE_NEWS = 'VACCINE_NEWS'

const reducer = (state, { type, payload }) => {
    switch (type){

    case CANADIAN_API:
        return { ...state, canadianApi: payload , LoadingF: false}
    case RAPID_API:
        return{...state, ApprovedVaccine: payload, LoadingS: false}
    case VACCINE_NEWS:
        return{...state, VaccineNews: payload}    
    default:
        return state
    }
}

export default reducer