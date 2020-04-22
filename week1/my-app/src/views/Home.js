import React from 'react';
import MediaTable from '../components/mediaTable';
import {Typography} from '@material-ui/core';

const Home = () => {
  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        gutterBottom>Home</Typography>
      <MediaTable/>
    </>
  );
};

export default Home;
