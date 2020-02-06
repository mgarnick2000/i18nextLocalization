/** **Reducing Redux Boilerplate** -
 * loops through the methods on an object and uses
 *  hasOwnProperty to select a reducer by action.type
 *  ref: https://github.com/reduxjs/redux/blob/master/docs/recipes/ReducingBoilerplate.md#generating-reducers
 *
 * @export
 * @param {object} initialState - install state given to reducers
 * @param {object} handlers - action handlers
 * @returns reducer - derived from handlers
 */
export function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export const failureReducer = state => ({
  ...state,
  isFetching: false,
  error: {},
});

export const startReducer = state => ({
  ...state,
  isFetching: true,
  error: {},
});
