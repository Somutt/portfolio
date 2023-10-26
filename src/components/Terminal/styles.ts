import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    width: 50%;
    margin-bottom: 3rem;

    .topBorder {
      background-color: ${theme.colors.lightgray};
      border-radius: 0.5rem 0.5rem 0 0;
      font-size: ${theme.font.sizes.small};
    }

    svg {
      padding: 0.5rem;
    }

    svg:nth-child(1) {
      color: ${theme.colors.red};
    }

    svg:nth-child(2) {
      color: ${theme.colors.yellow};
    }

    svg:nth-child(3) {
      color: ${theme.colors.green};
    }

    .terminal {
      font-size: ${theme.font.sizes.default};
      border-radius: 0 0 0.5rem 0.5rem;
      background-color: ${theme.colors.gray};
      font-family: ${theme.font.family.secondary};
      padding: 2rem 3rem;
    }
  `}
`;
