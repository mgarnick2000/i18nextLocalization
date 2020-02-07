import {createReducer, startReducer, failureReducer} from '../../helper';
import * as Localization from 'expo-localization';
import {
  FAILED_FETCHING_LOCALES,
  START_FETCHING_LOCALES,
  SET_LANGUAGES_OPTIONS,
  SET_LANGUAGE,
  FAIL_SET_LANGUAGE,
  FETCH_LOCALE_SUCCESS,
} from './types';
import i18next from '../../../i18n';

const language = Localization.locale.substring(
  0,
  Localization.locale.indexOf('-'),
);

const initialState = {
  languages: Localization.locales,
  currentLanguage: language,
  isRTL: Localization.isRTL,
  error: {},
  locale: Localization.locale,
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

  static [SET_LANGUAGE] = (state, action) => {
    return {
      ...state,
      currentLanguage: action.language,
      isRTL: action.language === 'ar' && true,
    };
  };

  static [FAIL_SET_LANGUAGE] = failureReducer;

  /**
   * @function
   * @static
   * @memberof reducers
   */
  static [FETCH_LOCALE_SUCCESS] = (state, {locale}) => ({
    ...state,
    locale,
    error: {},
  });
}

const localeReducers = createReducer(initialState, reducers);
export default localeReducers;
