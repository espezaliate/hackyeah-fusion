import { Container, Typography } from "@mui/material";
import React from "react";

interface IArticleProps {
  title: string;
  image: string;
  link: string;
  children?: React.ReactNode;
}

const Article: React.FC<IArticleProps> = ({ title, image, link, children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        margin: "2rem 0",
        gap: "15px",
        flexBasis: "33%",
      }}
    >
      <Typography variant="h3" fontSize={18} fontWeight="600" height={60}>
        {title}
      </Typography>

      <a href={link}>
        <img style={{ maxWidth: "100%" }} src={image} alt={title} />
      </a>
      <Typography>{children}</Typography>
    </Container>
  );
};

export default Article;
