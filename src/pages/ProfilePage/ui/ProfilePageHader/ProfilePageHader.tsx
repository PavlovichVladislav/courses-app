import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import {
  getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import styles from './ProfilePageHader.module.scss';

interface ProfilePageHaderProps {
  className?: string
}

export const ProfilePageHader = ({ className }: ProfilePageHaderProps) => {
  const { t } = useTranslation();
  const readOnly = useSelector(getProfileReadonly);
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = profileData?.id === authData?.id;
  const dispatch = useAppDispatch();

  const onStartEdit = () => {
    dispatch(profileActions.setProfileReadOnly(false));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.canelEdit());
  };

  const onSave = () => {
    dispatch(updateProfileData());
  };

  return (
    <div className={classNames(styles.profilePageHader, {}, [className])}>
      <Text title={t('Профиль')} />
      {canEdit && (
        <div className={styles.btnsWrapper}>
          {readOnly ? (
            <Button className={styles.btn} theme={ButtonTheme.OUTLINE} onClick={onStartEdit}>
              {t('Редактировать')}
            </Button>
          ) : (
            <div className={styles.btnGroup}>
              <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                {t('Сохранить')}
              </Button>
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                {t('Отменить')}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
