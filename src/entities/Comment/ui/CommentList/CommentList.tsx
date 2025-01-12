import { classNames } from 'shared/lib/classNames/classNames';

import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import styles from './CommentList.module.scss';
import { CommentItem } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments: CommentItem[];
  isLoading: boolean;
}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation();

  if (isLoading) return 'Загрузка';

  return (
    <div className={classNames(styles.commentList, {}, [className])}>
      {comments.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('Список комментариев пуст')} />
      )}
    </div>
  );
};
