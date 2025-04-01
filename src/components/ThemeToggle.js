import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <IconButton color="inherit" onClick={toggleTheme}>
      {isDarkMode ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeToggle;
