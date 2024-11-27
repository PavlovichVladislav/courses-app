import { classNames } from 'shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  getProfileError,
  getProfileFormData,
  getProfileLoading,
  getProfileReadonly,
  profileActions,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useSelector } from 'react-redux';
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
  const readOnly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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

  return (
    <DynamicModuleLoader reducerName="profile" reducers={initialReducers}>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHader />
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
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
