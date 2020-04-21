import React from 'react';

const Search = ({callback}) => {
  return (
    <input
      list="posts"
      onChange={(event) => callback(event.target.value)}/>
  );
};

export default Search;
