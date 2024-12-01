import { classNames } from 'shared/lib/classNames/classNames';

import { ChangeEvent, memo, useMemo } from 'react';
import styles from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  readonly: boolean;
}

export const Select = memo(({
  className, label, options, value, onChange, readonly,
}: SelectProps) => {
  const optionsList = useMemo(() => {
    return options.map(({ content, value }) => {
      return <option className={styles.option} value={value} key={value}>{content}</option>;
    });
  }, [options]);

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={classNames(styles.wrapper, { [styles.readonly]: readonly }, [className])}>
      {label && (
        <span>
          {label}
          {'>'}
        </span>
      )}
      <select value={value} className={styles.select} onChange={onChangeHandler} disabled={readonly}>
        {optionsList}
      </select>
    </div>
  );
});
