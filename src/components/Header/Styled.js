import styled from "styled-components";

export const StyledHeader = styled.div`
header {
    padding: 20px;
}

  img {
    width: 98px;
    height: 15px;
  }

  .nav-wrapper {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 768px) {
    img {
        width: 202px;
        height: 31px;
  }

  header {
    padding: 24px 32px;
  }
}
`;
