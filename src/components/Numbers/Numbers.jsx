import React from 'react';
import './Numbers.scss';
import { numbers } from '../../helpers/helpers';
import { useDispatch } from 'react-redux';
import { setValue } from '../../store/actions';

export const Numbers = () => {
  const dispatch = useDispatch()

  return (
      <div className="numbers">
        {numbers.map(item => (
          <button
            key={item}
            type="button"
            className='numbers__item'
            onClick={() => dispatch(setValue(item))}
          >
            {item}
          </button>
        ))}
      </div>
  );
}
