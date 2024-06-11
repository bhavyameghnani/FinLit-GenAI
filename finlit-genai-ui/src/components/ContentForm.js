// src/components/ContentForm.js
import React, { useState } from "react";
import axios from "axios";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";

const ContentForm = () => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleGenerateImage = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/generate-image",
        { text: content },
        { responseType: "blob" }
      );
      const imageURL = URL.createObjectURL(response.data);
      setImage(imageURL);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Financial Literacy - Workplace Finance App B2B2E
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
