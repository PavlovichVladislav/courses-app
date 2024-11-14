import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading';
import { getProfilehData } from '../../model/selectors/getProfileData';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const { firstname, lastname } = useSelector(getProfilehData);
  const error = useSelector(getProfileError);
  const loaading = useSelector(getProfileLoading);

  return (
    <div className={classNames(styles.profileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль')} />
        <Button className={styles.btn} theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={styles.data}>
        <Input value={firstname} placeholder={t('Ваше имя')} />
        <Input value={lastname} placeholder={t('Ваше фамилия')} />
      </div>
    </div>
  );
};
