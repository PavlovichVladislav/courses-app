import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { Profile } from 'entities/Profile/model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  data: Profile;
  className?: string;
  error?: string;
  loaading: boolean;
  readOnly?: boolean;
  onChangeFirstName: (firstName: string) => void;
  onChangeLastName: (lastname: string) => void;
  onChangeCity: (city: string) => void;
  onChangeAge: (age: string) => void;
}

export const ProfileCard = ({
  className,
  error,
  loaading,
  data,
  readOnly,
  onChangeFirstName,
  onChangeLastName,
  onChangeCity,
  onChangeAge,
}: ProfileCardProps) => {
  const {
    firstname,
    lastname,
    city,
    age,
  } = data;
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
      <div className={styles.data}>
        <Input value={firstname} onChange={onChangeFirstName} placeholder={t('Ваше имя')} readOnly={readOnly} />
        <Input value={lastname} onChange={onChangeLastName} placeholder={t('Ваше фамилия')} readOnly={readOnly} />
        <Input value={city} onChange={onChangeCity} placeholder={t('Ваше город')} readOnly={readOnly} />
        <Input value={age} onChange={onChangeAge} placeholder={t('Ваше возраст')} readOnly={readOnly} />
      </div>
    </div>
  );
};
