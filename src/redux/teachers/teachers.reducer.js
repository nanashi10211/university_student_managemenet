
import TeachersTypes from "./teachers.types";

const initialState = {
    teachersList: [],
    isFetching: false,
    errorMessage: undefined
}

const teachersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TeachersTypes.FETCH_TEACHER_START:
            return {
                ...state,
                isFetching: true
            }
        case TeachersTypes.FETCH_TEACHER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                teachersList: action.payload
            }
        case TeachersTypes.FETCH_TEACHER_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}


export default teachersReducer;