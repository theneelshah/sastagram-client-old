import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20%;
  background: rgba(var(--d87, 255, 255, 255), 1);
  border-bottom: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

export const NavLogo = styled.div`
  font-family: "Grand Hotel", cursive;
  font-size: 40px;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    margin: 0 4rem;

    text-decoration: none;
    color: inherit;
  }
`;
