import TeachersTypes from "./teachers.types";

export const fetchTeachersStart = () => ({
    type: TeachersTypes.FETCH_TEACHER_START
});

export const fetchTeachersSuccess = (teachersList) => ({
    type: TeachersTypes.FETCH_TEACHER_SUCCESS,
    payload: teachersList
});

export const fetchTeachersError = (errorMessage) => ({
    type: TeachersTypes.FETCH_TEACHER_ERROR,
    payload: errorMessage
});


export const fetchTeacherAsync = () => {
    return dispatch => {
        dispatch(fetchTeachersStart());
        // api will call here
        // base on api response i have to call 
        // dispatch(fetchStudentsSuccess(data))
        // dispatch(fetchStudentsError(error))
    
    }
}


