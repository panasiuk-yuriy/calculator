export const ACTION_TYPES = {
  SET_VALUE: 'SET_VALUE',
  SET_ACTION: 'SET_ACTION',
  SET_EQUAL: 'SET_EQUAL',
  SET_CLEAR_ONE: 'SET_CLEAR_ONE',
  SET_PERSENT: 'SET_PERSENT',
  SET_CLEAR_ALL: 'SET_CLEAR_ALL',
};

export const setValue = value => ({
  type: ACTION_TYPES.SET_VALUE, payload: value,
});

export const setClearOne = () => ({
  type: ACTION_TYPES.SET_CLEAR_ONE,
});

export const setAction = action => ({
  type: ACTION_TYPES.SET_ACTION, payload: action,
});

export const SetEqualAction = () => ({
  type: ACTION_TYPES.SET_EQUAL,
});

export const setPersent = value => ({
  type: ACTION_TYPES.SET_PERSENT, payload: value
});

export const setClearAll = () => ({
  type: ACTION_TYPES.SET_CLEAR_ALL,
});