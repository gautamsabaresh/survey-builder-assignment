import { combineReducers } from 'redux';
import surveyReducer from '../pages/sample-survey/survey.slice';
import sensoryPreferenceReducer from '../pages/sensory-preferences/sensory-preferences.slice';

const rootReducer = combineReducers({
  surveyReducer,
  sensoryPreferenceReducer
});

export default rootReducer;