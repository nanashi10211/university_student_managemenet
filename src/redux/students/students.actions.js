import StudentsTypes from "./students.types";


export const fetchStudentsStart = () => ({
    type: StudentsTypes.FETCH_STUDENTS_START
});

export const fetchStudentsSuccess = (studentsList) => ({
    type: StudentsTypes.FETCH_STUDENTS_SUCCESS,
    payload: studentsList
});

export const fetchStudentsError = (errorMessage) => ({
    type: StudentsTypes.FETCH_STUDENTS_ERROR,
    payload: errorMessage
});

export const fetchStudentsAsync = () => {
    return dispatch => {
        dispatch(fetchStudentsStart());
        // api will call here
        // base on api response i have to call 
        // dispatch(fetchStudentsSuccess(data))
        // dispatch(fetchStudentsError(error))
    }
}



