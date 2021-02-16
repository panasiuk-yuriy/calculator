import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

export const ControlButton = ({handleClick, value, name, className, img}) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      style={img && {backgroundImage: `url(${img})`}}
      className={cn('numbers__item', className )}
      onClick={() => {dispatch(handleClick(value))}}
    >
      {name || value}
    </button>
  );
}

ControlButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  img: PropTypes.string,
};
