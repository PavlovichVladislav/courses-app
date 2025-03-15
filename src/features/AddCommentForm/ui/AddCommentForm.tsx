import { classNames } from 'shared/lib/classNames/classNames';

import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useCallback } from 'react';
import styles from './AddCommentForm.module.scss';
import { getAddCommentFormText } from '../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';

interface AddCommentFormProps {
  className?: string
  sendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className, sendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const commentFormText = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((text: string) => {
    dispatch(addCommentFormActions.setText(text));
  }, [dispatch]);

  const onSendComment = () => {
    sendComment(commentFormText);
    dispatch(addCommentFormActions.setText(''));
  };

  return (
    <DynamicModuleLoader reducers={reducers} reducerName="addCommentForm">
      <div className={classNames(styles.addCommentForm, {}, [className])}>
        <Input
          className={styles.input}
          placeholder="Введите текст комментария"
          value={commentFormText}
          onChange={onCommentTextChange}
        />
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onSendComment}
        >
          {t('Отправить')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default AddCommentForm;
