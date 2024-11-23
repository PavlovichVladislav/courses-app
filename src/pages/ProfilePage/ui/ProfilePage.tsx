import { classNames } from 'shared/lib/classNames/classNames';

import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import {
  getProfileError, getProfilehData, getProfileLoading, ProfileCard, profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData';
import { useSelector } from 'react-redux';

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

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducerName="profile" reducers={initialReducers}>
      <div className={classNames('', {}, [className])}>
        <ProfileCard data={profile} loaading={loading} error={error} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
