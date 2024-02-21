import React, { useState, useEffect } from 'react'
import ComposeDynamicField from '../../components/compose-dynamic-fields'
import { submitAnswer, surveySelector } from "./survey.slice";
import { CONSTANTS } from '../../libs';
import { Alert, Snackbar, Button } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

const SampleSurveyForm = () => {
  const [surveyQuestions, setSurveyQuestions] = useState<Array<{ [x: string]: any }>>([]);
  const [surveyAnswers, setSurveyAnswers] = useState<Array<string>>([]); // Initialize answers state
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const formDetails = CONSTANTS.SAMPLE_SURVEY_QUESTIONS_JSON;
  const dispatch = useAppDispatch();
  const handleAnswerChange = (index: number, answer: any) => {
    // Update the answer in the state
    const updatedAnswers = [...surveyAnswers];
    updatedAnswers[index] = answer;
    setSurveyAnswers(updatedAnswers);
  }
  const initialQuestions = useAppSelector(surveySelector);
  useEffect(() => {
    setSurveyQuestions(initialQuestions);
    // Preload answers if they are already present
    const initialAnswers = initialQuestions.map(question => question.answer || '');
    setSurveyAnswers(initialAnswers);
  }, []);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSuccessAlert(false);
  };

  const onSubmit = () => {
    const updatedQuestionsWithAnswers = surveyQuestions.map((question, index) => ({
      ...question,
      answer: surveyAnswers[index]
    }));
    dispatch(submitAnswer(updatedQuestionsWithAnswers));
    setShowSuccessAlert(true);
  }

  return (
    <>
      {
        surveyQuestions.map((question, index: number) => (
          <div key={index}>
            <p>{question?.stem}</p>
            <ComposeDynamicField key={index} {...question}
              onChange={(answer: any) => handleAnswerChange(index, answer)}
              value={surveyAnswers[index]}
            />
          </div>
        )
        )
      }
      <Button type='submit' onClick={onSubmit} variant="outlined">Submit</Button>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={showSuccessAlert}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {formDetails.thankyou}
        </Alert>
      </Snackbar>
    </>
  )
}

export default SampleSurveyForm