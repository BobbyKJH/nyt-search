// 네비게이션
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  margin: 10px auto;
  margin-bottom: 0px;
  border: 1px solid black;
  width: 80vw;
`;

const Title = styled.div`
  display: block;
  font-size: 48px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  align-items: center;
`;

const NavList = styled.div`
  display: flex;
`;

const Nav = styled.div`
  display: block;
  text-align: center;
  width: 40vw;
  padding: 10px 0;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <Container>
      <Title>
        <Link to="/">NewYork Times Search Service</Link>
      </Title>
      <hr />
      <NavList>
        <Link to="/">
          <Nav>Search</Nav>
        </Link>
        <hr />
        <Link to="/clip">
          <Nav>Clip</Nav>
        </Link>
      </NavList>
    </Container>
  );
}

export default Header;
