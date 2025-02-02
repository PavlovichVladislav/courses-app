import { FunctionComponent, SVGProps } from 'react';

export interface ISidebarItem {
  path: string;
  text: string;
  authOnly?: boolean;
  Icon: FunctionComponent<SVGProps<SVGSVGElement> & {
    title?: string;
  }>
}
