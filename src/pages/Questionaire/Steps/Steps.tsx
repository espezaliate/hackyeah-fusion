import { Container, TextareaAutosize, Typography } from "@mui/material";
import React, { useCallback } from "react";

interface IStepsProps {
  activeStep: number;
}
interface IQuestionProps {
  title: string;
}

const Question: React.FC<IQuestionProps> = ({ title }) => (
  <>
    <Typography
      sx={{ textAlign: "center", fontWeight: "600", lineHeight: "2rem" }}
    >
      {title}
    </Typography>
    <TextareaAutosize style={{ width: "400px", height: "200px" }} />
  </>
);

const Steps: React.FC<IStepsProps> = ({ activeStep }) => {
  const renderStep = useCallback(() => {
    switch (activeStep) {
      case 0:
        return (
          <Question title="Who are the powerful individuals who can cause speedups in fusion energy becoming sooner highly effective?" />
        );
      case 1:
        return (
          <Question
            title="Which single individual do you think has the highest power to cause fusion energy generation speedups?
            "
          />
        );
      case 2:
        return (
          <Question
            title="
        What kind of project or cooperation of projects do you think can cause fusion energy generation speedups with high efficiency?
        "
          />
        );
      case 3:
        return (
          <Question
            title="
        Which project do you think has the highest effective influence on causing fusion energy to happen closer to this moment in time?
        "
          />
        );
      case 4:
        return (
          <Question
            title="
        How can an individual calculate his/her own impact on solving fusion energy problems?
        "
          />
        );
      case 5:
        return (
          <Question
            title="
        
What three single persons ranked from first to third you think can cause globally scaling fusion energy generation technology speedups with highest power?
        "
          />
        );
      case 6:
        return (
          <Typography
            sx={{ textAlign: "center", lineHeight: "5rem" }}
            variant="h3"
          >
            Thank You For Completing Our Form!
          </Typography>
        );
      default:
        return null;
    }
  }, [activeStep]);
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "600px",
        maxHeight: "600px",
        gap: "2rem",
      }}
    >
      {renderStep()}
    </Container>
  );
};

export default Steps;
