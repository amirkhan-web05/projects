import React from 'react';
import { AppContext } from '../context';

export function TextInputWithFocusButton() {
  const { showInput, setShowInput } = React.useContext(AppContext);

  const inputEl = React.useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <button onClick={() => setShowInput(!showInput)}>Show Input</button>
      {showInput && (
        <div>
          <input ref={inputEl} type="text" />
          <button onClick={onButtonClick}>
            Установить фокус на поле ввода
          </button>
        </div>
      )}
    </div>
  );
}
