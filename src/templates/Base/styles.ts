import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;

    .dark {
      background-color: ${theme.colors.dark};
      color: ${theme.colors.white};
      transition: ${theme.transition.background};
    }

    .light {
      background-color: ${theme.colors.white};
      color: ${theme.colors.dark};
      transition: ${theme.transition.background};
    }
  `}
`;
