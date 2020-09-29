import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 14px;
`;

export const Item = styled.div`
  padding: 10px 16px;

  /*No meu segundo item*/
  * + div {
    border-top: 1px solid var(--outline);
  }

  /*Primeiro item da lista*/
  &:first-child {
    padding-top: 13px;
  }

  /*Último item da lista*/
  &:last-child {
    padding-bottom: 17px;
  }
`;
export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;
