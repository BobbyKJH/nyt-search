import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: block;
  position: flex;
  background-color: #000;
  bottom: 0;
  width: 80vw;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

const Title = styled.div`
  display: block;
  text-align: center;
  color: #fff;
  font-size: 36px;
  padding: 10px 0;
`;

function Footer() {
  return (
    <Container>
      <Title>Header</Title>
    </Container>
  );
}

export default Footer;
