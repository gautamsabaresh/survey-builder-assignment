import { combineReducers } from 'redux';
import surveyReducer from '../pages/sample-survey/survey.slice';

const rootReducer = combineReducers({
  surveyReducer
});

export default rootReducer;