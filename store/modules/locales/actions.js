import {NativeModules, Platform} from 'react-native';
import {
  FAILED_FETCHING_LOCALES,
  START_FETCHING_LOCALES,
  SET_LANGUAGES_OPTIONS,
  SET_LANGUAGE,
  FAIL_SET_LANGUAGE,
  FETCH_LOCALE_FAILURE,
  FETCH_LOCALE_SUCCESS,
} from './types';

/** @function */
const startFetching = () => ({
  type: START_FETCHING_LOCALES,
});

/** @function */
const failedFetching = error => ({
  type: FAILED_FETCHING_LOCALES,
  error,
});

const fetchLanguages = languages => ({
  type: SET_LANGUAGES_OPTIONS,
  languages,
});

const setLanguage = language => ({
  type: SET_LANGUAGE,
  language,
});

const failSetLanguage = error => ({
  type: FAIL_SET_LANGUAGE,
  error,
});

export const changeLanguageAction = language => dispatch => {
  try {
    dispatch(setLanguage(language));
  } catch (e) {
    return dispatch(failSetLanguage(e));
  }
};
