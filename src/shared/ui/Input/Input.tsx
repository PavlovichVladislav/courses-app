import { classNames } from 'shared/lib/classNames/classNames';

import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  className?: string;
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo(({
  className, value, placeholder, onChange, autoFocus, type = 'text', ...otherProps
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onCahneHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value);
    setCaretPosition(event.target.value.length);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  useEffect(() => {
    if (autoFocus) {
      inputRef?.current?.focus();
      setIsFocused(true);
    }
  }, [autoFocus]);

  return (
    <div className={classNames(styles.inputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={styles.carriageWrapper}>
        <input
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={styles.input}
          onChange={onCahneHandler}
          type={type}
          onSelect={onSelect}
          ref={inputRef}
          {...otherProps}
        />
        {isFocused && (
          <span style={{ left: `${caretPosition * 9}px` }} className={styles.carriage} />
        )}
      </div>
    </div>
  );
});
