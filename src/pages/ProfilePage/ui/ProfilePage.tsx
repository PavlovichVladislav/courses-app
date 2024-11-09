import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

interface ProfilePageProps {
  className?: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducerName="profile" reducers={initialReducers}>
      <div className={classNames('', {}, [className])}>
        {t('PROFILE PAGE')}
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
