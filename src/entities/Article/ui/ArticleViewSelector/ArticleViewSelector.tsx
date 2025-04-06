import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from 'entities/Article/model/types/article';
import { Icon } from 'shared/ui/Icon/Icon';
import styles from './ArticleViewSelector.module.scss';
import GridIcon from '../../../../shared/assets/icons/grid.svg';
import ListIcon from '../../../../shared/assets/icons/list.svg';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = ({ className, view, onViewClick }: ArticleViewSelectorProps) => {
  return (
    <div className={classNames(styles.articleViewSelector, {}, [className])}>
      {viewTypes.map((viewType, i) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={() => onViewClick(viewType.view)}
          key={i}
        >
          <Icon Svg={viewType.icon} className={classNames('', { [styles.active]: view === viewType.view })} />
        </Button>
      ))}
    </div>
  );
};
