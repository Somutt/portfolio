import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .dark {
      min-height: 100vh;
      background-color: ${theme.colors.dark};
      color: ${theme.colors.white};
      transition: ${theme.transition.background};
    }

    .light {
      min-height: 100vh;
      background-color: ${theme.colors.white};
      color: ${theme.colors.dark};
      transition: ${theme.transition.background};
    }
  `}
`;
