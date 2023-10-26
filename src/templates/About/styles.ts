import styled, { css } from 'styled-components';
export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    p {
      margin: 10px 0;
      color: ${theme.colors.white};
    }

    ul {
      > li {
        margin: 1rem 0;
        cursor: alias;
        color: ${theme.colors.white};

        &:hover {
          transform: translateY(-3px);
          transition: ${theme.transition.standard};
        }
        > span {
          margin-right: 2rem;
        }
      }
    }

    span {
      color: ${theme.colors.lightgreen};
    }

    span > span {
      color: ${theme.colors.green};
    }

    .skills {
      columns: 2;
    }
  `}
`;
