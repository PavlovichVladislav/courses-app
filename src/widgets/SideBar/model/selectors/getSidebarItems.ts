import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import InfoIcon from 'shared/assets/icons/info.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';
import Articles from 'shared/assets/icons/articles.svg';
import { ISidebarItem } from '../types/sidebar';

export const getSidebarItemsts = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: ISidebarItem[] = [
      {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная страница',
      },
      {
        path: RoutePath.about,
        Icon: InfoIcon,
        text: 'Страница информации',
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Профиль',
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          Icon: Articles,
          text: 'Статьи',
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
