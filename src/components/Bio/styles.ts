import styled, { css } from 'styled-components';

export const Bio = styled.li`
  ${({ theme }) => css`
    line-height: ${theme.spacings.line.large};

    &:hover {
      transform: ${theme.transform.vertical};
      transition: ${theme.transition.vartical};
    }

    > span {
      font-size: ${theme.font.sizes.medium};
      margin-right: 20px;
    }

    > a {
      color: unset;
    }
  `}
`;
