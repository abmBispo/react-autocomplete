import React from 'react';
import FormControl from 'react-bootstrap/FormControl';

const Search = ({callback}) => {
  return (
    <FormControl
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
      placeHolder='Comece a digitar'
      onChange={(event) => callback(event.target.value)} />

  );
};

export default Search;
