import React from 'react';
import { ControlButton }  from '../ControlButton/ControlButton';
import './ControlButtons.scss';
import { setAction, SetEqualAction, setClearOne, setPersent, setClearAll } from '../../store/actions'; 
import deleteImg from '../../helpers/delete.svg'

export const ControlButtons = () => (
  <>
    <div className="controls__top">
      <ControlButton
        handleClick={setClearAll}
        value='AC'
      />
      <ControlButton
        handleClick={setClearOne}
        className="delete_button"
        img={deleteImg}
      />
      <ControlButton
        handleClick={setPersent}
        value="%"
      />
      <ControlButton
        handleClick={setAction}
        value="/"
      />
    </div>

    <div className="controls__right">
      <ControlButton
        handleClick={setAction}
        name="X"
        value="*"
      />
      <ControlButton
        handleClick={setAction}
        value="-"
      />
      <ControlButton
        handleClick={setAction}
        value="+"
      />
      <ControlButton
        className="equal_button"
        handleClick={SetEqualAction}
        value="="
      />
    </div>
  </>
);

