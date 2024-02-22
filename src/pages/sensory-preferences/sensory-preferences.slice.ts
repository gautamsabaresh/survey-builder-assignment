import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { CONSTANTS } from '../../libs';

const initialState: Array<any> = CONSTANTS.SPI_SURVEY_QUESTIONS_JSON.questions;
export const sensoryPreferenceSlice = createSlice({
    name: "sensory-preference",
    initialState,
    reducers: {
        submitAnswer: (state, action: PayloadAction<any>) => {
            return action.payload;
        },
    },
});
export const { submitAnswer } =
    sensoryPreferenceSlice.actions;
export const sensoryPreferenceSelector = (state: RootState) => state.sensoryPreferenceReducer;
export default sensoryPreferenceSlice.reducer;
