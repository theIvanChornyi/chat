import { ComponentPropsWithRef, FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import css from '../CopilotChat.module.scss';
import useStore from '../../store/store';
import { FORM_NAMES } from '../../const/form-names.const';
import { IForm } from '../../types/form.types';

interface IProps extends ComponentPropsWithRef<'div'> {}

interface IGptData {
  data: string;
}

const ChatWindow: FC<IProps> = ({ children }) => {
  const { setChatStarted, setRequest } = useStore();
  const methods = useForm<IForm>();
  const fetchData = async (query: string): Promise<IGptData> => {
    return axios.get(query);
  };

  const mutation = useMutation<IGptData, AxiosError, string>({
    mutationFn: fetchData,
    mutationKey: [],
    onSuccess: () => {
      setChatStarted();
    },
  });

  const onSubmit = ({ predefined, prompt }: IForm) => {
    const request = prompt || predefined;
    if (!predefined && !prompt) return;
    setRequest(request);
    mutation.mutate(request);
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
