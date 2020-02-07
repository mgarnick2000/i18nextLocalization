import {combineReducers} from 'redux';
import {persistReducer, createMigrate} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import {localeReducers} from './locales';

const migrations = {
  0: state => ({
    ...state,
  }),
};

const rootPersistConfig = {
  key: 'root',
  version: 0,
  storage: ExpoFileSystemStorage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['locales'],
  migrate: createMigrate(migrations, {debug: false}),
};

const reducers = combineReducers({
  locales: localeReducers,
});

const persistedReducer = persistReducer(rootPersistConfig, reducers);

export default persistedReducer;
