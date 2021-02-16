import { ACTION_TYPES } from './actions';
import { choosingAction } from '../helpers/helpers';

const initialState = {
  firstValue: '0',
  secondValue: '',
  mathAction: '',
  result: '',
  persent: '',
  helpers: {
    isNewValue: false,
    isCalculate: false,
    isPersent: false,
  }
};

export function rootReducer(state = initialState, action) {
  const { firstValue, secondValue, result, mathAction, persent } = state;
  const { isCalculate, isNewValue, isPersent } = state.helpers;

  switch (action.type) {
    case ACTION_TYPES.SET_VALUE: {
      const { payload } = action;

      if (!mathAction && !isNewValue) {
        //check if firstValue already has '.'
        if (firstValue.includes('.') && payload === '.') {
          return state
        } else {
          return {
            ...state,
            firstValue: (firstValue === '0' && payload !== '.') ? payload : firstValue + payload,
          }
        }

      } else if (isNewValue) {
        return {
          ...state,
          firstValue: payload === '.' ? `0${payload}` : payload,
          helpers: {
            ...state.helpers,
            isNewValue: false,
          }
        }
      } else {
        //check if secondValue already has '.'
        if (secondValue.includes('.') && payload === '.') {
          return state
        } else {
          return {
            ...state,
            secondValue: (secondValue === '0' && payload !== '.') ? payload : secondValue + payload,
          }
        }

      }
    }

    case ACTION_TYPES.SET_ACTION: {
      const { payload } = action;

      return {
        ...state,
        mathAction: payload,
        helpers: {
          ...state.helpers,
          isCalculate: true,
          isNewValue: false,
        }
      }
    }

    case ACTION_TYPES.SET_EQUAL: {
      if (!secondValue && !result) {
        return state
      } else if (isCalculate || !result) {
        return {
          ...state,
          result: '' + choosingAction(mathAction, +firstValue, isPersent ? +persent : +secondValue),
          helpers: {
            ...state.helpers,
            isCalculate: false,
            isPersent: false,
          }
        }
      } else {
        return {
          firstValue: result,
          secondValue: '',
          mathAction: '',
          result: '',
          persent: '',
          helpers: {
            ...state.helpers,
            isNewValue: true,
            isCalculate: false,
          }

        }
      }
    }

    case ACTION_TYPES.SET_CLEAR_ONE: {
      if (secondValue) {
        return {
          ...state,
          secondValue: secondValue.slice(0, -1)
        }
      } else if (mathAction) {
        return {
          ...state,
          mathAction: '',
        }
      } else {
        return {
          ...state,
          firstValue: firstValue.slice(0, -1) || '0'
        }
      }
    }

    case ACTION_TYPES.SET_PERSENT: {
      const { payload } = action;
      if (!secondValue || isPersent) {
        return state
      } else {
        return {
          ...state,
          secondValue: secondValue + payload,
          persent: '' + choosingAction('%', +firstValue, +secondValue),
          helpers: {
            ...state.helpers,
            isPersent: true,
          }
        }
      }
    }

    case ACTION_TYPES.SET_CLEAR_ALL: {

      return {
        firstValue: '0',
        secondValue: '',
        mathAction: '',
        result: '',
        persent: '',
        helpers: {
          isPersent: false,
          isNewValue: false,
          isCalculate: false,
        }
      }
    }

    default:
      return state;
  }
}
