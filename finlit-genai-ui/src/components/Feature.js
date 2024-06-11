// src/components/Feature.js
import React from "react";
import { Parallax } from "react-parallax";
import { Box, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

const Feature = () => {
  return (
    <Parallax
      bgImage="https://i.etsystatic.com/40203455/r/il/db77a9/4596047913/il_fullxfull.4596047913_fknx.jpg"
      strength={500}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <b>
          <Typography variant="h2" component="h1">
            <Typewriter
              words={[
                "Financial Literacy using GenAI",
                "GenAIを使用した金融リテラシー",
                "Empowering Your Financial Journey",
                "あなたのファイナンシャルジャーニーを強化する",
                "AI-Powered Financial Education",
                "AI を活用した金融教育",
                "Unlocking Financial Wisdom with AI",
                "Transforming Finances with GenAI",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </Typography>
        </b>
      </Box>
    </Parallax>
  );
};

export default Feature;
