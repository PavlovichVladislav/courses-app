import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly';
import { profileActions } from 'entities/Profile';
import styles from './ProfilePageHader.module.scss';

interface ProfilePageHaderProps {
  className?: string
}

export const ProfilePageHader = ({ className }: ProfilePageHaderProps) => {
  const { t } = useTranslation();
  const readOnly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onStartEdit = () => {
    dispatch(profileActions.setProfileReadOnly(false));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.setProfileReadOnly(true));
  };

  return (
    <div className={classNames(styles.profilePageHader, {}, [className])}>
      <Text title={t('Профиль')} />
      {readOnly ? (
        <Button className={styles.btn} theme={ButtonTheme.OUTLINE} onClick={onStartEdit}>
          {t('Редактировать')}
        </Button>
      ) : (
        <Button className={styles.btn} theme={ButtonTheme.OUTLINE} onClick={onCancelEdit}>
          {t('Отменить')}
        </Button>
      )}
    </div>
  );
};
