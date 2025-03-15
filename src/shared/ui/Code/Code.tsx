import { classNames } from 'shared/lib/classNames/classNames';

import CopyIcon from 'shared/assets/icons/copy.svg';
import { useCallback } from 'react';
import styles from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = ({ className, text }: CodeProps) => {
  const onCopyClick = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <div className={classNames(styles.code, {}, [className])}>
      <pre>
        <Button className={styles.copyBtn} onClick={onCopyClick} theme={ButtonTheme.CLEAR}>
          <CopyIcon className={styles.copyIcon} />
        </Button>
        <code>
          {text}
        </code>
      </pre>
    </div>
  );
};
