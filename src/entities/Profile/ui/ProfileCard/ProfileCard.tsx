import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { Profile } from 'entities/Profile/model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  data: Profile;
  className?: string;
  error?: string;
  loaading: boolean;
}

export const ProfileCard = ({
  className, error, loaading, data,
}: ProfileCardProps) => {
  const { firstname, lastname } = data;
  const { t } = useTranslation('profile');

  if (loaading) {
    return (
      <div className={classNames(styles.profileCard, {}, [className, styles.loading])}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.profileCard, {}, [className])}>
        <Text
          theme={TextTheme.ERROR}
          title="Ошибка при загрузке профиля. Попробуйте, обновить страницу"
          text={error}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

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
