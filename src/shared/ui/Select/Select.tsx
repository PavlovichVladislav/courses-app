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
  setValue: (value: string) => void;
  readOnly: boolean;
}

export const Select = memo(({
  className, label, options, value, setValue, readOnly,
}: SelectProps) => {
  const optionsList = useMemo(() => {
    return options.map(({ content, value }) => {
      return <option className={styles.option} value={value} key={value}>{content}</option>;
    });
  }, [options]);

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={classNames(styles.wrapper, { [styles.readonly]: readOnly }, [className])}>
      {label && (
        <span>
          {label}
          {'>'}
        </span>
      )}
      <select value={value} className={styles.select} onChange={onChange} disabled={readOnly}>
        {optionsList}
      </select>
    </div>
  );
});
