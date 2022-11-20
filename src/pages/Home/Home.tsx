import React from "react";
import { Container } from "@mui/material";
import articlesDB from "../../assets/DB/articles";
import Article from "../../components/Articles";

interface IHomeProps {
  children?: React.ReactNode;
}

const Home: React.FC<IHomeProps> = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {articlesDB.map((article) => (
        <Article
          title={article.title}
          image={article.image}
          link={article.link}
        >
          {article.body}
        </Article>
      ))}
    </Container>
  );
};

export default Home;
