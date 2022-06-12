import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Word from "../components/Word";

const Container = styled.div`
  display: block;
  width: 80vw;
  height: 76vh;
  border: 1px solid black;
  margin: 0 auto;
  overflow: auto;
  text-align: center;
`;

function SearchPage() {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get("https://bobbykjh.github.io/exchange.json").then((res) => {
      setNews(res.data.list);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      console.log(res.data.list);
    });
  }, []);

  return (
    <Container>
      <Input />
      {loading ? (
        <img
          src="https://t1.daumcdn.net/cfile/tistory/184F8A4E4E55932B06"
          alt=""
        />
      ) : (
        <>
          {news.map((hh) => (
            <Word key={hh.id} id={hh.id} name={hh.name} />
          ))}
        </>
      )}
    </Container>
  );
}

export default SearchPage;
