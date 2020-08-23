import React from 'react';

const Main = ({ history }) => {
  const goList = () => {
    history.push('list/nick');
  };

  return (
    <>
      <h1>Main Component.</h1>
      <button onClick={goList}>Go to List page </button>
    </>
  );
};

export default Main;
