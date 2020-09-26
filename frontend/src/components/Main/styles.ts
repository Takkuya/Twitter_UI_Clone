import styled, { css } from 'styled-components';
import {
  ArrowLeft,
  Home,
  Search,
  Notifications,
  Email,
} from '../../styles/icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  /*O Container só vai crescer até 601px, explicado no minuto 28:20*/
  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2; /*Especifica para que o elemento fique acima de qualquer outro elemento*/
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background: var(--twitter-dark-hover);
    }
  }
`;
export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--twitter);
`;

export const ProfileInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong {
    font-size: 19px;
  }

  > span {
    font-size: 15px;
    color: var(--gray);
  }
`;

export const BottomMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px)); /*Calculo que faz com que a barrinha mude de tamanho de acordo com a tela*/

  /*A partir de 500px a barra não vai mais aparecer na tela*/
  @media (min-width: 500px) {
    display: none;
  }
`;

const iconCSS = css`
  width: 31px;
  height: 31px;

  cursor: pointer;

  fill: var(--gray);

  /*Quando eu passar o mouse encima ou quando ele estiver ativado na minha tela*/
  &:hover,
  &.active {
    fill: var(--twitter);
  }
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const SearchIcon = styled(Search)`
  ${iconCSS}
`;
export const EmailIcon = styled(Notifications)`
  ${iconCSS}
`;
export const BellIcon = styled(Email)`
  ${iconCSS}
`;
