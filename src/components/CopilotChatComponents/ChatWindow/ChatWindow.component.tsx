import { ComponentPropsWithRef, FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useStore from '../../../store/store';
import { FORM_NAMES } from '../../../const/form-names.const';
import { IForm } from '../../../types/form.types';
import { IChatRole } from '../../../types/chat-api.types';
import { useChatGPTQuery } from '../../../hooks/useChatGPTQuery';
import css from './ChatWindow.module.scss';

interface IProps extends ComponentPropsWithRef<'div'> {}

const ChatWindow: FC<IProps> = ({ children }) => {
  const { setChatStarted, addMessage } = useStore();
  const methods = useForm<IForm>();
  const { mutate: postRequest } = useChatGPTQuery();

  const onSubmit = ({ predefined, prompt }: IForm) => {
    const request = prompt || predefined;
    if (!predefined && !prompt) return;
    const newMessage = { role: IChatRole.USER, content: request, token: 0 };
    setChatStarted();
    addMessage(newMessage);
    postRequest([newMessage]);
    methods.reset();
  };

  return (
    <div className={css.chat}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className={css.form}>
          {children}
          <input
            {...methods.register(FORM_NAMES.PROMPT)}
            className={css['text-input']}
            type="text"
            name={FORM_NAMES.PROMPT}
            placeholder="Enter a prompt"
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default ChatWindow;
