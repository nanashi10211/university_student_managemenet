import { createSelector } from "reselect";


const selectStudents = state => state.students;


export const selectStudentsList = createSelector(
    [selectStudents],
    students => students.studentsList
);

export const selectStudentsFetching = createSelector(
    [selectStudents],
    students => students.isFetching
);

export const selectStudentsError = createSelector(
    [selectStudents],
    students => students.errorMessage
)