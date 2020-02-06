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

const fetchLocaleSuccess = locale => ({
  type: FETCH_LOCALE_SUCCESS,
  locale,
});

const fetchLocaleFailure = error => ({
  type: FETCH_LOCALE_FAILURE,
  error,
});

export const fetchLocaleAction = () => async dispatch => {
  try {
    let locale;
    if (Platform.OS === 'ios') {
      locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
    } else {
      locale = NativeModules.I18nManager.localeIdentifier;
    }
    return dispatch(fetchLocaleSuccess(locale));
  } catch (error) {
    return dispatch(fetchLocaleFailure(error));
  }
};
