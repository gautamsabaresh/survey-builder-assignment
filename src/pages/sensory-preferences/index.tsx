import React, { useEffect, useMemo, useState } from 'react'
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';
import { CONSTANTS } from '../../libs';
import ComposeDynamicField from '../../components/compose-dynamic-fields';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { submitAnswer, sensoryPreferenceSelector } from "./sensory-preferences.slice";


const SensoryPreferencesForm = () => {
  const [allSurveyQuestions, setAllSurveyQuestions] = useState<Array<{ [x: string]: any }>>([])
  const [paginatedSurvey, setPaginatedSurvey] = useState<Array<Array<any>>>([]);
  const [surveyQuestions, setSurveyQuestions] = useState<Array<{ [x: string]: any }>>([]);
  const [defaultSurveyFormAnswers, setDefaultSurveyFormAnswers] = useState({});
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [page, setPage] = useState(1);
  const formDetails = CONSTANTS.SPI_SURVEY_QUESTIONS_JSON;
  const dispatch = useAppDispatch();

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    const pageNo = value <= paginatedSurvey.length ? value : 1;
    const questionsToBeDisplayed = [...paginatedSurvey[pageNo - 1]];
    setPage(pageNo);
    setSurveyQuestions(questionsToBeDisplayed);
  };

  const initialQuestions = useAppSelector(sensoryPreferenceSelector);

  useEffect(() => {
    const pageSeparatedQuestions: Array<any> = [[]];
    const defaultAnswers: any = {};
    setAllSurveyQuestions([...initialQuestions]);
    initialQuestions.forEach((question, index) => {
      pageSeparatedQuestions[pageSeparatedQuestions.length - 1].push({ ...question, originalIndex: index });
      defaultAnswers[String(index)] = question.answer || '';
      if (question?.pagebreak) {
        if (initialQuestions.length - 1 !== index) {
          pageSeparatedQuestions.push([]);
        }
      }
    });
    setDefaultSurveyFormAnswers(defaultAnswers);
    reset(defaultAnswers);
    setPaginatedSurvey(pageSeparatedQuestions);
    setPage(page);
    setSurveyQuestions(pageSeparatedQuestions[page - 1]);
  }, [])

  const { handleSubmit, reset, control, setValue, formState: { isSubmitting, isDirty, isValid } } = useForm<any>({
    defaultValues: defaultSurveyFormAnswers,
    mode: 'onChange',
  });

  const handleClose = (event: React.SyntheticEvent | Event) => {
    setShowSuccessAlert(false);
  };

  const onSubmit = (data: any) => {
    const finalAnswers: any = [];
    allSurveyQuestions.map((question, index) => {
      finalAnswers.push({ ...question, answer: data[index] })
    });
    console.log(finalAnswers);
    dispatch(submitAnswer(finalAnswers));
    setShowSuccessAlert(true);
  }

  return <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box component="section" sx={{ minHeight: '600px' }}>
        {
          !surveyQuestions.length ?
            <p>No Survey questions found</p>
            :
            surveyQuestions.map((question, index: number) => (
              <ComposeDynamicField key={question.code} {...question}
                name={String(question.originalIndex)}
                control={control}
                label={question?.stem}
              />
            )
            )
        }
      </Box>
      <Box component='div' display='flex' alignItems='center' justifyContent='space-between' sx={{ marginTop: '8px' }}>
        <Box>
          <Stack spacing={2}>
            <Pagination count={paginatedSurvey.length} disabled={!isValid} variant="outlined" shape="rounded" page={page} onChange={handlePageChange} />
          </Stack>
        </Box>
        <Box>
          {
            paginatedSurvey.length === page &&
            <Button type='submit' disabled={!isValid} variant="outlined">Submit</Button>
          }
        </Box>
      </Box>
    </form>
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