import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import './GenreFilter.css';

function GenreFilter({ genres, onGenreSelect }) {
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    onGenreSelect(genre);
  };

  return (
    <div className="genre-filter-container">
      <Typography variant="h4" gutterBottom>
        Filter by Genre
      </Typography>
      <div className="genre-buttons">
        {genres.map((genre, index) => (
          <Button
            key={index}
            onClick={() => handleGenreSelect(genre)}
            variant="contained"
            className={selectedGenre === genre ? 'selected' : ''}
          >
            {genre}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;

