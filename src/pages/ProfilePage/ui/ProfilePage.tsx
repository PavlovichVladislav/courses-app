import { classNames } from 'shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileLoading,
  getProfileReadonly,
  getValidatePorfileErrors,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { ValidateProfileError } from 'entities/Profile/model/services/validateProfileData';
import { useTranslation } from 'react-i18next';
import { ProfilePageHader } from './ProfilePageHader/ProfilePageHader';

interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileFormData);
  const loading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const validateErrors = useSelector(getValidatePorfileErrors);
  const { t } = useTranslation();

  const readOnly = useSelector(getProfileReadonly);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  const validateProfileErrors = {
    [ValidateProfileError.EMPTY_PROFILE_DATA]: t('Пустой профиль'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректное значение в названии страны'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные имя или фамилия'),
    [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка'),
  };

  const onChangeFirstName = (firstname: string) => {
    dispatch(profileActions.setFormData({
      firstname,
    }));
  };

  const onChangeLastName = (lastname: string) => {
    dispatch(profileActions.setFormData({
      lastname,
    }));
  };

  const onChangeCity = (city: string) => {
    dispatch(profileActions.setFormData({
      city,
    }));
  };

  const onChangeAge = (age: string) => {
    dispatch(profileActions.setFormData({
      age: Number(age),
    }));
  };

  const onChangeUsername = (username: string) => {
    dispatch(profileActions.setFormData({
      username,
    }));
  };

  const onChangeAvatar = (avatar: string) => {
    dispatch(profileActions.setFormData({
      avatar,
    }));
  };

  const onChangeCurrency = (currency: Currency) => {
    dispatch(profileActions.setFormData({
      currency,
    }));
  };

  const onChangeCountry = (country: Country) => {
    dispatch(profileActions.setFormData({
      country,
    }));
  };

  return (
    <DynamicModuleLoader reducerName="profile" reducers={initialReducers}>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHader />
        {validateErrors.map((error) => (
          <Text theme={TextTheme.ERROR} title={validateProfileErrors[error]} key={error} />
        ))}
        <ProfileCard
          data={formData}
          loaading={loading}
          error={error}
          readOnly={readOnly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
          onChangeCity={onChangeCity}
          onChangeAge={onChangeAge}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
