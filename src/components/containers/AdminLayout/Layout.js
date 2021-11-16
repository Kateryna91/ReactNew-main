import React from 'react';

import Header from './Header';

export default props => (
    <>
      <Header />
      <div className="container">
        {props.children}
      </div>
    </>
  );
