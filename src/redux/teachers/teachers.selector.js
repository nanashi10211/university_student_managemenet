
import { createSelector } from "reselect";

const selectTeachers = state => state.teachers;


export const selectTeachersList = createSelector(
    [selectTeachers],
    teachers => teachers.teachersList
);

export const selectTeachersFetching = createSelector(
    [selectTeachers],
    teachers => teachers.isFetching
);

export const selectTeachersError = createSelector(
    [selectTeachers],
    teachers => teachers.errorMessage
)