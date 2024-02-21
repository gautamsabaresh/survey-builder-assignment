import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { CONSTANTS } from '../../libs';

const initialState: Array<any> = CONSTANTS.SAMPLE_SURVEY_QUESTIONS_JSON.questions;
export const surveySlice = createSlice({
    name: "survey",
    initialState,
    reducers: {
        submitAnswer: (state, action: PayloadAction<any>) => {
            return action.payload;
        },
    },
});
export const { submitAnswer } =
    surveySlice.actions;
export const surveySelector = (state: RootState) => state.surveyReducer;
export default surveySlice.reducer;