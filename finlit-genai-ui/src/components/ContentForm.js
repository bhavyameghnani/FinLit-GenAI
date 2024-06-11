// src/components/ContentForm.js
import React, { useState } from "react";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";

const ContentForm = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleGenerateImage = () => {
    // Mock image generation logic
    setImage(
      `https://via.placeholder.com/400x300?text=${encodeURIComponent(content)}`
    );
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <br />
          <Typography variant="h4" gutterBottom>
            Workplace Finance B2B2E - Financial Literacy using GenAI
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Your Content"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGenerateImage}
          >
            Generate Image
          </Button>
          <br />
          <br />
        </Grid>
        <br />
        <br />
        {image && (
          <Grid item xs={12}>
            <Typography variant="h6">Generated Image:</Typography>
            <img
              src={image}
              alt="Generated"
              style={{ maxWidth: "100%", marginTop: "20px" }}
            />
          </Grid>
        )}
      </Grid>
      <br />
      <br />
    </Container>
  );
};

export default ContentForm;
