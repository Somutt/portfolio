import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 40px;
    padding: 5px;
    font-size: ${theme.font.sizes.large};

    > a {
      color: unset;
    }
  `}
`;
