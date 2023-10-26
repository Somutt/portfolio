import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: calc(100vh - 15vh);
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      color: unset;
    }

    a {
      color: ${theme.colors.green};
    }
  `}
`;
