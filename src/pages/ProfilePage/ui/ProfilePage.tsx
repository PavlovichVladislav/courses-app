import { classNames } from 'shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import {
  getProfileError, getProfilehData, getProfileLoading, profileActions, ProfileCard, profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData';
import { useSelector } from 'react-redux';
import { getProfileReadonly } from 'entities/Profile/model/selectors/getProfileReadonly';
import { ProfilePageHader } from './ProfilePageHader/ProfilePageHader';

interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const profile = useSelector(getProfilehData);
  const loading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeFirstName = (firstName: string) => {
    dispatch(profileActions.setProfileData({
      firstName,
    }));
  };

  const onChangeLastName = (lastname: string) => {
    dispatch(profileActions.setProfileData({
      lastname,
    }));
  };

  return (
    <DynamicModuleLoader reducerName="profile" reducers={initialReducers}>
      <div className={classNames('', {}, [className])}>
        <ProfilePageHader />
        <ProfileCard
          data={profile}
          loaading={loading}
          error={error}
          readOnly={readOnly}
          onChangeFirstName={onChangeFirstName}
          onChangeLastName={onChangeLastName}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
