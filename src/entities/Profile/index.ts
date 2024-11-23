export {
  Profile,
  ProfileSchema,
} from './model/types/profile';

export {
  profileActions,
  profileReducer,
} from './model/slice/profileSlice';

export {
  ProfileCard,
} from './ui/ProfileCard/ProfileCard';

export {
  getProfilehData,
} from './model/selectors/getProfileData';

export {
  getProfileError,
} from './model/selectors/getProfileError';

export {
  getProfileLoading,
} from './model/selectors/getProfileLoading';
