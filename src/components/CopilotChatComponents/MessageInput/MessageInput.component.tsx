import { ComponentPropsWithRef, FC, MouseEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import { DEFAULT_INPUT_CONFIG } from '../../../const/input.config.const';
import { FORM_NAMES } from '../../../const/form-names.const';
import css from './MessageInput.module.scss';

interface IProps extends ComponentPropsWithRef<'div'> {}

const MessageInput: FC<IProps> = () => {
  const { setValue } = useFormContext();
  const onClick = (e: MouseEvent<HTMLButtonElement>): void => {
    setValue(FORM_NAMES.PREDEFINED, e.currentTarget.dataset['value']);
  };

  return (
    <ul className={css.input}>
      {DEFAULT_INPUT_CONFIG.map(({ inputs, title }, i) => {
        return (
          <li className={css['input__item']} key={title}>
            <h2
              className={`${css['input__title']} ${
                i === 0 && css['input__title--strong']
              }`}
            >
              {title}
            </h2>
            <ul className={css['input__list']}>
              {inputs.map(value => {
                return (
                  <li key={value}>
                    <button
                      onClick={onClick}
                      className={`${css['input__list-item']}`}
                      type="submit"
                      data-value={value}
                    >
                      {value}
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default MessageInput;
