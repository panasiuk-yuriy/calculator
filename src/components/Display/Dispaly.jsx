import React from 'react';
import { useSelector } from 'react-redux';
import {getAction, getFirstValue, getSecondValue, getResult} from '../../store/selectors';
import './Display.scss';


export const Display = () => {
  const firtsValue = useSelector(getFirstValue);
  const secondValue = useSelector(getSecondValue);
  const action = useSelector(getAction);
  const result = useSelector(getResult);

  return (
    <div className="display">
      <h3 className="display__math">{firtsValue}{action}{secondValue}</h3>
      <p className="display__total">{result}</p>
    </div>
  );
}

