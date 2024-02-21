import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { CONSTANTS } from '../../libs';
import ComposeDynamicField from '../../components/compose-dynamic-fields';


const SensoryPreferencesForm = () => {
  const [surveyQuestions, setSurveyQuestions] = useState<Array<{ [x: string]: any }>>([]);
  const [surveyAnswers, setSurveyAnswers] = useState<Array<string>>([]);
  const [paginatedSurvey, setPaginatedSurvey] = useState<Array<Array<any>>>([]);
  const [paginatedSurveyAnswers, setPaginatedSurveyAnswers] = useState<Array<Array<any>>>([]);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const formDetails = CONSTANTS.SPI_SURVEY_QUESTIONS_JSON;
  const [page, setPage] = useState(1);
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const pageNo = value <= paginatedSurvey.length ? value : 1;
    const questionsToBeDisplayed = [...paginatedSurvey[pageNo - 1]];
    const answersForTheQuestions = [...paginatedSurveyAnswers[pageNo - 1]];
    setPage(pageNo);
    setSurveyQuestions(questionsToBeDisplayed);
    setSurveyAnswers(answersForTheQuestions);
    queryParams.set("page", String(pageNo));
    const newSearch = `?${queryParams.toString()}`;
    navigate({ search: newSearch });
  };

  useEffect(() => {
    const pageSeparatedQuestions: Array<any> = [[]];
    const pageSeparatedAnswers: Array<any> = [[]];
    // TODO: GET QUESTIONS FROM STORE
    const initialQuestions = formDetails.questions;
    initialQuestions.forEach((question, index) => {
      pageSeparatedQuestions[pageSeparatedQuestions.length - 1].push(question);
      pageSeparatedAnswers[pageSeparatedAnswers.length - 1].push(question.answer || '');
      if (question?.pagebreak) {
        if (initialQuestions.length - 1 !== index) {
          pageSeparatedQuestions.push([]);
          pageSeparatedAnswers.push([]);
        }
      }
    });
    setPaginatedSurvey(pageSeparatedQuestions);
    setPaginatedSurveyAnswers(pageSeparatedAnswers);
    const pageFromQueryParams = Number(queryParams.get('page'));
    const pageNumber = pageFromQueryParams && (pageFromQueryParams <= pageSeparatedQuestions.length) ? Number(queryParams.get('page')) : 1;
    if (pageFromQueryParams && pageFromQueryParams > pageSeparatedQuestions.length) {
      setPage(0);
      setSurveyQuestions([]);
      setSurveyAnswers([]);
    } else {
      setPage(pageNumber);
      setSurveyQuestions(pageSeparatedQuestions[pageNumber - 1]);
      setSurveyAnswers(pageSeparatedAnswers[pageNumber - 1]);
    }
  }, [])

  const handleAnswerChange = (index: number, answer: any) => {
    const updatedAnswers = [...surveyAnswers];
    updatedAnswers[index] = answer;
    setSurveyAnswers(updatedAnswers);
    const paginatedAnswers = [...paginatedSurveyAnswers];
    paginatedSurveyAnswers[page - 1][index] = answer;
    setPaginatedSurveyAnswers(paginatedAnswers);
  }

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setShowSuccessAlert(false);
  };

  const onSubmit = () => {
    const finalAnswers = [];
    for (let i = 0; i < paginatedSurvey.length; i++) {
      for (let j = 0; j < paginatedSurvey[i].length; j++) {
        finalAnswers.push({ ...paginatedSurvey[i][j], answer: paginatedSurveyAnswers[i][j] });
      }
    }
    console.log(finalAnswers);
    // TODO: SAVE IN STORE
    setShowSuccessAlert(true);
  }

  return <>
    <Box component="section" sx={{ minHeight: '600px' }}>
      {
        !surveyQuestions.length ?
          <p>No Survey questions found</p>
          :
          surveyQuestions.map((question, index: number) => (
            <ComposeDynamicField key={index} {...question}
              onChange={(answer: any) => handleAnswerChange(index, answer)}
              value={surveyAnswers[index]}
            />
          )
          )
      }
    </Box>
    <Box component='div' display='flex' alignItems='center' justifyContent='space-between' sx={{ marginTop: '8px' }}>
      <Box>
        <Stack spacing={2}>
          <Pagination count={paginatedSurvey.length} variant="outlined" shape="rounded" page={page} onChange={handlePageChange} />
        </Stack>
      </Box>
      <Box>
        {
          paginatedSurvey.length === page &&
          <Button type='submit' onClick={onSubmit} variant="outlined">Submit</Button>
        }
      </Box>
    </Box>
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
}

export default SensoryPreferencesForm