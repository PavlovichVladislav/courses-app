import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Spinner } from 'shared/ui/Spinner/Spinner';
import { Profile } from 'entities/Profile';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile/model/services/validateProfileData';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
  data: Profile;
  className?: string;
  error?: string;
  validateErrors: ValidateProfileError[];
  loaading: boolean;
  readOnly?: boolean;
  onChangeFirstName?: (firstName: string) => void;
  onChangeLastName?: (lastname: string) => void;
  onChangeCity?: (city: string) => void;
  onChangeAge?: (age: string) => void;
  onChangeUsername?: (username: string) => void;
  onChangeAvatar?: (avatar: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
  className,
  error,
  validateErrors,
  loaading,
  data,
  readOnly,
  onChangeFirstName,
  onChangeLastName,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
  onChangeCurrency,
  onChangeCountry,
}: ProfileCardProps) => {
  const {
    firstname,
    lastname,
    city,
    age,
    username,
    avatar,
    currency,
    country,
  } = data;
  const { t } = useTranslation('profile');

  const validateProfileErrors = {
    [ValidateProfileError.EMPTY_PROFILE_DATA]: t('Пустой профиль'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректное значение в названии страны'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные имя или фамилия'),
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
  };

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
    <div className={classNames(styles.profileCard, { [styles.editing]: !readOnly }, [className])}>
      {validateErrors.map((error) => (
        <Text theme={TextTheme.ERROR} title={validateProfileErrors[error]} />
      ))}
      <div className={styles.data}>
        <div className={styles.avatarWrapper}>
          <Avatar src={avatar} />
        </div>
        <Input value={firstname} onChange={onChangeFirstName} placeholder={t('Ваше имя')} readOnly={readOnly} />
        <Input value={lastname} onChange={onChangeLastName} placeholder={t('Ваше фамилия')} readOnly={readOnly} />
        <Input value={city} onChange={onChangeCity} placeholder={t('Ваше город')} readOnly={readOnly} />
        <Input value={age} onChange={onChangeAge} placeholder={t('Ваше возраст')} readOnly={readOnly} />
        <Input value={username} onChange={onChangeUsername} placeholder={t('Имя профиля')} readOnly={readOnly} />
        <Input value={avatar} onChange={onChangeAvatar} placeholder={t('Аватар')} readOnly={readOnly} />
        <CurrencySelect
          value={currency}
          onChange={onChangeCurrency}
          readonly={readOnly}
        />
        <CountrySelect
          value={country}
          onChange={onChangeCountry}
          readonly={readOnly}
        />
      </div>
    </div>
  );
};
