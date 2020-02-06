import {createReducer, startReducer, failureReducer} from '../../helper';
import {
  FAILED_FETCHING_LOCALES,
  START_FETCHING_LOCALES,
  SET_LANGUAGES_OPTIONS,
  SET_LANGUAGE,
  FAIL_SET_LANGUAGE,
} from './types';

const initialState = {
  languages: [{}],
  currentLanguage: 'en',
  isRTL: false,
  error: {},
};

class reducers {
  /**
   * Reducer for profile errors
   * @function */
  static [FAILED_FETCHING_LOCALES] = failureReducer;

  /**
   * @function
   */
  static [START_FETCHING_LOCALES] = startReducer;

  static [SET_LANGUAGES_OPTIONS] = (state, {languages}) => ({
    ...state,
    languages,
  });

  static [SET_LANGUAGE] = (state, {language}) => ({
    ...state,
    currentLanguage: language,
  });

  static [FAIL_SET_LANGUAGE] = failureReducer;
}

const localeReducers = createReducer(initialState, reducers);
export default localeReducers;
