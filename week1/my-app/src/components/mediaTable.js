import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import MediaRow from './mediaRow';

const MediaTable = () => {
  const [picArray, setPicArray] = useState([]);
  const loadMedia = async () => {
    const response = await fetch('test.json');
    const json = await response.json();
    console.log(json);
    setPicArray(json);
  };

  useEffect(() => {
    loadMedia();
  }, []);

  return (
    <table>
      <tbody>
        {
          picArray.map((file, index) => <MediaRow file={file} key={index}/>)
        }
      </tbody>
    </table>
  );
};
MediaTable.propTypes = {};

export default MediaTable;
