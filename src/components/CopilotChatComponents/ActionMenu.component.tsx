import { ComponentPropsWithoutRef, FC } from 'react';

import MinimizeIco from '../../assets/minimize.svg';
import MaximizeIco from '../../assets/maximize.svg';
import HamburgerIco from '../../assets/hamburger.svg';
import BallonIco from '../../assets/ballon.svg';
import SuitcaseIco from '../../assets/suitcase.svg';

import css from '../CopilotChat.module.scss';

interface IProps extends ComponentPropsWithoutRef<'div'> {}

const ActionMenu: FC<IProps> = () => {
  return (
    <ul aria-label="Modify:" className={css['action-menu']}>
      <li>
        <button type="button" className={css['action-menu__button']}>
          <img src={MinimizeIco} alt="Minimize ico" />
          <span>Shorter</span>
        </button>
      </li>
      <li>
        <button type="button" className={css['action-menu__button']}>
          <img src={MaximizeIco} alt="Maximize ico" />
          <span>Longer</span>
        </button>
      </li>
      <li>
        <button type="button" className={css['action-menu__button']}>
          <img src={HamburgerIco} alt="Hamburger ico" />
          <span>Simpler</span>
        </button>
      </li>
      <li>
        <button type="button" className={css['action-menu__button']}>
          <img src={BallonIco} alt="Ballon ico" />
          <span>Casual</span>
        </button>
      </li>
      <li>
        <button type="button" className={css['action-menu__button']}>
          <img src={SuitcaseIco} alt="Suitcase ico" />
          <span>Professional</span>
        </button>
      </li>
    </ul>
  );
};

export default ActionMenu;
