import { classNames } from 'shared/lib/classNames/classNames';

import { CommentItem } from 'entities/Comment/model/types/comment';
import { Skeleton } from 'shared/ui/Skeleton/ui/Skeleton';
import { Text } from 'shared/ui/Text/Text';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppLink } from 'shared/ui/AppLInk/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: CommentItem;
  isLoading: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: CommentCardProps) => {
  const renderContent = (isLoading: boolean) => {
    if (isLoading) {
      return (
        <>
          <div className={styles.header}>
            <Skeleton width={30} height={30} borderRadius="50%" />
            <Skeleton width={100} height={16} />
          </div>
          <Skeleton width={130} height={30} />
        </>
      );
    }
    return (
      <>
        <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={styles.header}>
          <Avatar size={30} src={comment.user.avatar} />
          <Text title={comment.user.username} />
        </AppLink>
        <Text text={comment.text} />
      </>
    );
  };

  return (
    <div className={classNames(styles.commentCard, {}, [className])}>
      {renderContent(isLoading)}
    </div>
  );
};
