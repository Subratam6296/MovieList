import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import './MovieList.css';

function MovieList({ movies, selectedGenre }) {
  return (
    <Table className="movie-table">
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Genre</TableCell>
          <TableCell>Year</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {movies.map((movie, index) => (
          (!selectedGenre || movie.genre === selectedGenre) && (
            <TableRow key={index}>
              <TableCell>{movie.title}</TableCell>
              <TableCell>{movie.genre}</TableCell>
              <TableCell>{movie.year}</TableCell>
            </TableRow>
          )
        ))}
        {movies.length === 0 && (
          <TableRow>
            <TableCell colSpan={3}>
              <Typography variant="body1">No movies found.</Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default MovieList;

