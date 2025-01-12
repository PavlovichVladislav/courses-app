import { classNames } from 'shared/lib/classNames/classNames';

import { CommentItem } from 'entities/Comment/model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: CommentItem;
  isLoading: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
  if (isLoading) return 'загрузка';

  return (
    <div className={classNames(styles.commentCard, {}, [className])}>
      {comment.text}
    </div>
  );
};
