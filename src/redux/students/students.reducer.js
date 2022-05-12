import StudentsTypes from "./students.types";

const initialState = {
    studentsList: [],
    isFetching: false,
    errorMessage: undefined
}

const studentsReducer = (state = initialState, action) => {
    switch(action.type) {
        case StudentsTypes.FETCH_STUDENTS_START:
            return {
                ...state,
                isFetching: true
            }
        case StudentsTypes.FETCH_STUDENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                studentsList: action.payload
            }
        case StudentsTypes.FETCH_STUDENTS_ERROR:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default: 
            return state;
    }
}

export default studentsReducer;