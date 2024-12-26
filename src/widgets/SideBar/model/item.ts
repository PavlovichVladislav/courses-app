import { FunctionComponent, SVGProps } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import InfoIcon from 'shared/assets/icons/info.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';
import Articles from 'shared/assets/icons/articles.svg';

export interface ISidebarItem {
  path: string;
  text: string;
  authOnly?: boolean;
  Icon: FunctionComponent<SVGProps<SVGSVGElement> & {
    title?: string;
  }>
}

export const sidebarItemsList: ISidebarItem[] = [
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
  {
    path: RoutePath.profile,
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
];
